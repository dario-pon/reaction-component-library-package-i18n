import "core-js/modules/web.dom.iterable";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerQuery } from "react-container-query";
import styled from "styled-components";
import { applyTheme } from "../../utils";
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

var ImageWrapper = styled.div.withConfig({
  displayName: "ProgressiveImage__ImageWrapper",
  componentId: "hzyzhr-0"
})(["background-color:", ";display:block;height:0;overflow:hidden;padding-top:100%;position:relative;width:100%;"], applyTheme("ProgressiveImage.backgroundColor"));
var Img = styled.img.withConfig({
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
  _inherits(ProgressiveImage, _Component);

  function ProgressiveImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProgressiveImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProgressiveImage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      ready: false
    };
    _this._mounted = false;
    _this._wrapper = null;
    return _this;
  }

  _createClass(ProgressiveImage, [{
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
      return React.createElement(ContainerQuery, {
        query: imageContainerQueries
      }, function (params) {
        var src = medium;
        var isLargeWidth = params.isLargeWidth;

        if (isLargeWidth) {
          src = large;
        }

        return React.createElement(Img, {
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
      return React.createElement(Img, {
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
      return React.createElement(Img, {
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
      return React.createElement(ImageWrapper, {
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
}(Component);

ProgressiveImage.propTypes = {
  /**
   * Image text alternative - https://www.w3.org/TR/WCAG20-TECHS/H37.html
   */
  altText: PropTypes.string,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * How the image should fit its container. "contain" (100% width, auto-scaled height, no clipping),
   * or "cover" (100% height, auto-scaled width centered horizontally, with clipping). Both options maintain the image's original aspect ratio.
   */
  fit: PropTypes.string,

  /**
   * Pre load image source: Provide a tiny version of the image to create a medium like progressive loading effect
   */
  presrc: PropTypes.string,

  /**
   * Image source
   */
  src: PropTypes.string,

  /**
   * Image sources - used to create a responsive image via the picture tag
   */
  srcs: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string
  })
};
ProgressiveImage.defaultProps = {
  altText: "",
  fit: "contain"
};
export default ProgressiveImage;