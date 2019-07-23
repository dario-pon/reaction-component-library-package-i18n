import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes, preventAccidentalDoubleClick } from "../../utils";
import { priceByCurrencyCode } from "./utils";
var ProductMediaWrapper = styled.div.withConfig({
  displayName: "CatalogGridItem__ProductMediaWrapper",
  componentId: "sc-1e2ppln-0"
})(["background-color:", ";position:relative;"], applyTheme("CatalogGridItem.mediaBackgroundColor"));
var ProductInfo = styled.div.withConfig({
  displayName: "CatalogGridItem__ProductInfo",
  componentId: "sc-1e2ppln-1"
})(["align-items:center;display:flex;justify-content:space-between;padding-bottom:0;padding-left:0;padding-right:0;padding-top:", ";"], applyTheme("CatalogGridItem.verticalSpacingBetweenImageAndInfo"));
var ProductTitle = styled.aside.withConfig({
  displayName: "CatalogGridItem__ProductTitle",
  componentId: "sc-1e2ppln-2"
})(["", " line-height:1.125;"], addTypographyStyles("CatalogGridItemProductTitle", "headingTextBold"));
var ProductVendor = styled.span.withConfig({
  displayName: "CatalogGridItem__ProductVendor",
  componentId: "sc-1e2ppln-3"
})(["", ""], addTypographyStyles("CatalogGridItemProductVendor", "labelText"));
var PriceContainer = styled.div.withConfig({
  displayName: "CatalogGridItem__PriceContainer",
  componentId: "sc-1e2ppln-4"
})(["text-align:right;"]);

var CatalogGridItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CatalogGridItem, _Component);

  function CatalogGridItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CatalogGridItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CatalogGridItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

    _this.handleOnClick = preventAccidentalDoubleClick(function (event) {
      _this.props.onClick(event, _this.props.product);
    });
    return _this;
  }

  _createClass(CatalogGridItem, [{
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
      return React.createElement(ProductMediaWrapper, null, React.createElement(ProgressiveImage, {
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
      var productPrice = priceByCurrencyCode(currencyCode, pricing) || {};
      return React.createElement("div", null, React.createElement(ProductInfo, null, React.createElement(ProductTitle, null, title), React.createElement(PriceContainer, null, React.createElement(Price, {
        displayPrice: productPrice.displayPrice
      }))), React.createElement("div", null, React.createElement(ProductVendor, null, vendor)));
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

      return React.createElement("div", {
        className: className
      }, React.createElement(Link, {
        href: this.productDetailHref,
        onClick: this.handleOnClick
      }, React.createElement(BadgeOverlay, badgeProps, this.renderProductMedia(), this.renderProductInfo())));
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
}(Component);

CatalogGridItem.propTypes = {
  /**
   * Labels to use for the various badges. Refer to `BadgeOverlay`'s prop documentation.
   */
  badgeLabels: PropTypes.shape({
    BACKORDER: PropTypes.string,
    BESTSELLER: PropTypes.string,
    LOW_QUANTITY: PropTypes.string,
    SOLD_OUT: PropTypes.string,
    SALE: PropTypes.string
  }),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    BadgeOverlay: CustomPropTypes.component.isRequired,
    Link: CustomPropTypes.component.isRequired,
    Price: CustomPropTypes.component.isRequired,
    ProgressiveImage: CustomPropTypes.component.isRequired
  }),

  /**
   * Currency code to display the price for. Product must include a pricing object with the code in `product.pricing`
   */
  currencyCode: PropTypes.string.isRequired,

  /**
   * Item click handler
   */
  onClick: PropTypes.func,

  /**
   * Image to display when product doesn't have a primary image
   */
  placeholderImageURL: PropTypes.string,

  /**
   * Product to display
   */
  product: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    vendor: PropTypes.string,
    primaryImage: PropTypes.shape({
      URLs: PropTypes.shape({
        large: PropTypes.string,
        medium: PropTypes.string,
        small: PropTypes.string,
        thumbnail: PropTypes.string
      })
    }),
    pricing: PropTypes.arrayOf(PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string
      }),
      displayPrice: PropTypes.string
    })),
    isSoldOut: PropTypes.bool,
    isBackorder: PropTypes.bool,
    isOnSale: PropTypes.bool,
    isLowQuantity: PropTypes.bool,
    isBestseller: PropTypes.bool
  })
};
CatalogGridItem.defaultProps = {
  badgeLabels: null,
  onClick: function onClick() {},
  placeholderImageURL: ""
};
export default i18n.withTranslation()(withComponents(CatalogGridItem)); // auto-add i18n