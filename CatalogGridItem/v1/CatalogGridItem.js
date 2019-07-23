"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils2 = require("./utils");

// auto-add i18n 
var ProductMediaWrapper = _styledComponents.default.div.withConfig({
  displayName: "CatalogGridItem__ProductMediaWrapper",
  componentId: "sc-1e2ppln-0"
})(["background-color:", ";position:relative;"], (0, _utils.applyTheme)("CatalogGridItem.mediaBackgroundColor"));

var ProductInfo = _styledComponents.default.div.withConfig({
  displayName: "CatalogGridItem__ProductInfo",
  componentId: "sc-1e2ppln-1"
})(["align-items:center;display:flex;justify-content:space-between;padding-bottom:0;padding-left:0;padding-right:0;padding-top:", ";"], (0, _utils.applyTheme)("CatalogGridItem.verticalSpacingBetweenImageAndInfo"));

var ProductTitle = _styledComponents.default.aside.withConfig({
  displayName: "CatalogGridItem__ProductTitle",
  componentId: "sc-1e2ppln-2"
})(["", " line-height:1.125;"], (0, _utils.addTypographyStyles)("CatalogGridItemProductTitle", "headingTextBold"));

var ProductVendor = _styledComponents.default.span.withConfig({
  displayName: "CatalogGridItem__ProductVendor",
  componentId: "sc-1e2ppln-3"
})(["", ""], (0, _utils.addTypographyStyles)("CatalogGridItemProductVendor", "labelText"));

var PriceContainer = _styledComponents.default.div.withConfig({
  displayName: "CatalogGridItem__PriceContainer",
  componentId: "sc-1e2ppln-4"
})(["text-align:right;"]);

var CatalogGridItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CatalogGridItem, _Component);

  function CatalogGridItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CatalogGridItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CatalogGridItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      fit: "cover"
    };

    _this.setImageFit = function () {
      // Use cover fit if image is landcape, contain if portrait
      if (typeof Image !== "undefined") {
        var large = _this.primaryImage.URLs.large;
        var largeImage = new Image();
        largeImage.src = large;

        largeImage.onload = function () {
          if (_this._mounted === false) {
            return;
          }

          var fit = "";
          var width = largeImage.width,
              height = largeImage.height;

          if (height > width) {
            // Image is portrait
            fit = "contain";
          } else {
            // Image is landscape
            fit = "cover";
          }

          if (fit !== _this.state.fit) {
            _this.setState({
              fit: fit
            });
          }
        };
      }
    };

    _this.handleOnClick = (0, _utils.preventAccidentalDoubleClick)(function (event) {
      _this.props.onClick(event, _this.props.product);
    });
    return _this;
  }

  (0, _createClass2.default)(CatalogGridItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;
      this.setImageFit();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setImageFit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: "renderProductMedia",
    value: function renderProductMedia() {
      var _this$props = this.props,
          ProgressiveImage = _this$props.components.ProgressiveImage,
          description = _this$props.product.description;
      var fit = this.state.fit;
      return _react.default.createElement(ProductMediaWrapper, null, _react.default.createElement(ProgressiveImage, {
        fit: fit,
        altText: description,
        presrc: this.primaryImage.URLs.thumbnail,
        srcs: this.primaryImage.URLs
      }));
    }
  }, {
    key: "renderProductInfo",
    value: function renderProductInfo() {
      var _this$props2 = this.props,
          Price = _this$props2.components.Price,
          currencyCode = _this$props2.currencyCode,
          _this$props2$product = _this$props2.product,
          pricing = _this$props2$product.pricing,
          title = _this$props2$product.title,
          vendor = _this$props2$product.vendor;
      var productPrice = (0, _utils2.priceByCurrencyCode)(currencyCode, pricing) || {};
      return _react.default.createElement("div", null, _react.default.createElement(ProductInfo, null, _react.default.createElement(ProductTitle, null, title), _react.default.createElement(PriceContainer, null, _react.default.createElement(Price, {
        displayPrice: productPrice.displayPrice
      }))), _react.default.createElement("div", null, _react.default.createElement(ProductVendor, null, vendor)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          badgeLabels = _this$props3.badgeLabels,
          _this$props3$componen = _this$props3.components,
          BadgeOverlay = _this$props3$componen.BadgeOverlay,
          Link = _this$props3$componen.Link,
          product = _this$props3.product;
      var badgeProps = {
        product: product
      };

      if (badgeLabels) {
        badgeProps.badgeLabels = badgeLabels;
      }

      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(Link, {
        href: this.productDetailHref,
        onClick: this.handleOnClick
      }, _react.default.createElement(BadgeOverlay, badgeProps, this.renderProductMedia(), this.renderProductInfo())));
    }
  }, {
    key: "productDetailHref",
    get: function get() {
      var slug = this.props.product.slug;
      var url = "/product/".concat(slug);
      return url;
    }
  }, {
    key: "primaryImage",
    get: function get() {
      var _this$props4 = this.props,
          primaryImage = _this$props4.product.primaryImage,
          placeholderImageURL = _this$props4.placeholderImageURL;

      if (!primaryImage) {
        return {
          URLs: {
            thumbnail: placeholderImageURL,
            small: placeholderImageURL,
            medium: placeholderImageURL,
            large: placeholderImageURL
          }
        };
      }

      return primaryImage;
    }
  }]);
  return CatalogGridItem;
}(_react.Component);

CatalogGridItem.propTypes = {
  /**
   * Labels to use for the various badges. Refer to `BadgeOverlay`'s prop documentation.
   */
  badgeLabels: _propTypes.default.shape({
    BACKORDER: _propTypes.default.string,
    BESTSELLER: _propTypes.default.string,
    LOW_QUANTITY: _propTypes.default.string,
    SOLD_OUT: _propTypes.default.string,
    SALE: _propTypes.default.string
  }),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    BadgeOverlay: _utils.CustomPropTypes.component.isRequired,
    Link: _utils.CustomPropTypes.component.isRequired,
    Price: _utils.CustomPropTypes.component.isRequired,
    ProgressiveImage: _utils.CustomPropTypes.component.isRequired
  }),

  /**
   * Currency code to display the price for. Product must include a pricing object with the code in `product.pricing`
   */
  currencyCode: _propTypes.default.string.isRequired,

  /**
   * Item click handler
   */
  onClick: _propTypes.default.func,

  /**
   * Image to display when product doesn't have a primary image
   */
  placeholderImageURL: _propTypes.default.string,

  /**
   * Product to display
   */
  product: _propTypes.default.shape({
    title: _propTypes.default.string,
    slug: _propTypes.default.string,
    vendor: _propTypes.default.string,
    primaryImage: _propTypes.default.shape({
      URLs: _propTypes.default.shape({
        large: _propTypes.default.string,
        medium: _propTypes.default.string,
        small: _propTypes.default.string,
        thumbnail: _propTypes.default.string
      })
    }),
    pricing: _propTypes.default.arrayOf(_propTypes.default.shape({
      currency: _propTypes.default.shape({
        code: _propTypes.default.string
      }),
      displayPrice: _propTypes.default.string
    })),
    isSoldOut: _propTypes.default.bool,
    isBackorder: _propTypes.default.bool,
    isOnSale: _propTypes.default.bool,
    isLowQuantity: _propTypes.default.bool,
    isBestseller: _propTypes.default.bool
  })
};
CatalogGridItem.defaultProps = {
  badgeLabels: null,
  onClick: function onClick() {},
  placeholderImageURL: ""
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(CatalogGridItem)); // auto-add i18n


exports.default = _default;