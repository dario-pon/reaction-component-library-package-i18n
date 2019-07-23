"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactContainerQuery = require("react-container-query");

var _styledComponents = _interopRequireDefault(require("styled-components"));

// auto-add i18n 
var imageContainerQueries = {
  isLargeWidth: {
    minWidth: 301 // Use medium image (600px) until container width is greater than image width / 2 (up to 2x scaling)

  }
};
/**
 * @file Image component does a "Medium/Instagram" like progressive loading effect for images.
 * To achieve this the component first renders an img element with a tiny version of the full resolution image.
 * This low res image should download quickly and will be blurred by the CSS removing the pixelation.
 * The component then creates an Image buffer with a src of the full resolution image.
 * Once the buffer loads the full resolution image the blurred low res img will fade out revealing the full res image.
 *
 */

var ImageWrapper = _styledComponents.default.div.withConfig({
  displayName: "ProgressiveImage__ImageWrapper",
  componentId: "hzyzhr-0"
})(["background-color:", ";display:block;height:0;overflow:hidden;padding-top:100%;position:relative;width:100%;"], (0, _utils.applyTheme)("ProgressiveImage.backgroundColor"));

var Img = _styledComponents.default.img.withConfig({
  displayName: "ProgressiveImage__Img",
  componentId: "hzyzhr-1"
})(["width:", ";height:", ";left:50%;opacity:1;position:absolute;transition:opacity 300ms cubic-bezier(0.4,0,0.2,1);top:50%;transform:translate(-50%,-50%);", ""], function (_ref) {
  var fit = _ref.fit;
  return fit === "contain" && "100%" || "auto";
}, function (_ref2) {
  var fit = _ref2.fit;
  return fit === "cover" && "100%" || "auto";
}, function (_ref3) {
  var isLoading = _ref3.isLoading,
      isLoaded = _ref3.isLoaded,
      isHidden = _ref3.isHidden;
  var styles = "";

  if (isLoading) {
    styles += "\n        filter: blur(8px);\n        z-index: 1100;";
  }

  if (isLoaded) {
    styles += "z-index: 1000;";
  }

  if (isHidden) {
    styles += "opacity: 0;";
  }

  return styles;
});

var ProgressiveImage =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ProgressiveImage, _Component);

  function ProgressiveImage() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ProgressiveImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ProgressiveImage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      ready: false
    };
    _this._mounted = false;
    _this._wrapper = null;
    return _this;
  }

  (0, _createClass2.default)(ProgressiveImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;

      if (typeof window !== "undefined") {
        this.lazyLoad();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
    /**
     * Private check for component mount, used in image buffer
     */

  }, {
    key: "lazyLoad",

    /**
     *
     * @method lazyLoad
     * @summary If `IntersectionObserver` is supported create a new one and watch for the `_wrapper` element
     * to scroll within the viewport, once it's with 50px of the viewport start loading the full res image.
     * If the `IntersectionObserver` isn't supported just load the image normally.
     * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     * @return {Undefined} Nothing
     */
    value: function lazyLoad() {
      var _this2 = this;

      if (this.supportIntersectionObserver) {
        var viewportIntersection = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0 && !_this2.state.ready) {
              _this2.loadImage();
            }
          });
        }, {
          root: null,
          rootMargin: "50px 0px",
          threshold: 0.01
        });
        viewportIntersection.observe(this._wrapper);
      } else {
        this.loadImage();
      }
    }
    /**
     *
     * @method loadImage
     * @summary Create a new `Image` buffer and set the `src` to be
     * ether the `props.src` or `props.srcs.medium` if a responsive picture.
     * Once the buffer loads set the `ready` state to `true`
     * @return {Undefined} Nothing
     */

  }, {
    key: "loadImage",
    value: function loadImage() {
      var _this3 = this;

      var _this$props = this.props,
          src = _this$props.src,
          srcs = _this$props.srcs;
      var buffer = new Image();

      buffer.onload = function () {
        _this3._mounted && _this3.setState({
          ready: true
        });
      };

      buffer.src = src || srcs && srcs.medium;
    }
    /**
     *
     * @method renderResponsiveImage
     * @summary Renders an image that uses medium by default, and large when appropriate container width
     *  (see imageContainerQueries definition)
     * @return {Element} - `picture`
     */

  }, {
    key: "renderResponsiveImage",
    value: function renderResponsiveImage() {
      var _this$props2 = this.props,
          altText = _this$props2.altText,
          fit = _this$props2.fit,
          srcs = _this$props2.srcs;
      var medium = srcs.medium,
          large = srcs.large;
      return _react.default.createElement(_reactContainerQuery.ContainerQuery, {
        query: imageContainerQueries
      }, function (params) {
        var src = medium;
        var isLargeWidth = params.isLargeWidth;

        if (isLargeWidth) {
          src = large;
        }

        return _react.default.createElement(Img, {
          src: src,
          isLoaded: true,
          alt: altText,
          fit: fit
        });
      });
    }
    /**
     *
     * @method renderImg
     * @summary Renders a `img` element with the provided `props.src`
     * @return {Element} - `img`
     */

  }, {
    key: "renderImg",
    value: function renderImg() {
      var _this$props3 = this.props,
          altText = _this$props3.altText,
          fit = _this$props3.fit,
          src = _this$props3.src;
      return _react.default.createElement(Img, {
        src: src,
        isLoaded: true,
        alt: altText,
        fit: fit
      });
    }
    /**
     *
     * @method renderImage
     * @summary If a `props.src` is provided call `renderImg` else call `renderResponsiveImage`
     * @return {Element} - `picture` or `img`
     */

  }, {
    key: "renderImage",
    value: function renderImage() {
      var src = this.props.src;
      return src ? this.renderImg() : this.renderResponsiveImage();
    }
    /**
     *
     * @method renderLoadingImage
     * @summary Renders a `img` element with the provided `props.presrc`
     * once the full res image has loaded this `img` will fade out
     * @return {Element} - `img`
     */

  }, {
    key: "renderLoadingImage",
    value: function renderLoadingImage() {
      var _this$props4 = this.props,
          fit = _this$props4.fit,
          presrc = _this$props4.presrc;
      var ready = this.state.ready;
      return _react.default.createElement(Img, {
        src: presrc,
        isLoading: true,
        isHidden: ready,
        alt: "",
        fit: fit
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          presrc = _this$props5.presrc;
      var ready = this.state.ready;
      return _react.default.createElement(ImageWrapper, {
        className: className,
        innerRef: function innerRef(wrapper) {
          _this4._wrapper = wrapper;
        }
      }, ready ? this.renderImage() : null, presrc && this.renderLoadingImage());
    }
  }, {
    key: "supportIntersectionObserver",

    /**
     *
     * @method supportIntersectionObserver
     * @summary `IntersectionObserver` feature detection
     * @return {Boolean} - `true` if `IntersectionObserver` is supported by browser
     */
    get: function get() {
      if (typeof window === "undefined") {
        return false;
      }

      return "IntersectionObserver" in window;
    }
  }]);
  return ProgressiveImage;
}(_react.Component);

ProgressiveImage.propTypes = {
  /**
   * Image text alternative - https://www.w3.org/TR/WCAG20-TECHS/H37.html
   */
  altText: _propTypes.default.string,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * How the image should fit its container. "contain" (100% width, auto-scaled height, no clipping),
   * or "cover" (100% height, auto-scaled width centered horizontally, with clipping). Both options maintain the image's original aspect ratio.
   */
  fit: _propTypes.default.string,

  /**
   * Pre load image source: Provide a tiny version of the image to create a medium like progressive loading effect
   */
  presrc: _propTypes.default.string,

  /**
   * Image source
   */
  src: _propTypes.default.string,

  /**
   * Image sources - used to create a responsive image via the picture tag
   */
  srcs: _propTypes.default.shape({
    large: _propTypes.default.string,
    medium: _propTypes.default.string,
    small: _propTypes.default.string
  })
};
ProgressiveImage.defaultProps = {
  altText: "",
  fit: "contain"
};

var _default = _utils.default.withTranslation()(ProgressiveImage); // auto-add i18n


exports.default = _default;