import "core-js/modules/es6.string.small";
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
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../utils";
var Item = styled.div.withConfig({
  displayName: "CartItem__Item",
  componentId: "sc-3kmsar-0"
})(["position:relative;align-items:flex-start;border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";border-left-color:", ";border-left-style:solid;border-left-width:", ";border-right-color:", ";border-right-style:solid;border-right-width:", ";border-top-color:", ";border-top-style:solid;border-top-width:", ";box-sizing:border-box;display:flex;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";width:100%;&:first-of-type{border-top:none;}&:last-of-type{border-bottom:none;}> *{box-sizing:border-box;}"], applyTheme("CartItem.borderBottomColor"), applyTheme("CartItem.borderBottomWidth"), applyTheme("CartItem.borderLeftColor"), applyTheme("CartItem.borderLeftWidth"), applyTheme("CartItem.borderRightColor"), applyTheme("CartItem.borderRightWidth"), applyTheme("CartItem.borderTopColor"), applyTheme("CartItem.borderTopWidth"), applyTheme("CartItem.paddingBottom"), applyTheme("CartItem.paddingLeft"), applyTheme("CartItem.paddingRight"), applyTheme("CartItem.paddingTop"));
var ItemContent = styled.div.withConfig({
  displayName: "CartItem__ItemContent",
  componentId: "sc-3kmsar-1"
})(["display:flex;margin-left:", ";position:relative;width:100%;"], applyTheme("CartItem.imageContentSpacing"));
var ItemContentDetail = styled.div.withConfig({
  displayName: "CartItem__ItemContentDetail",
  componentId: "sc-3kmsar-2"
})(["display:flex;flex:1 1 auto;flex-wrap:wrap;"]);
var ItemContentDetailInner = styled.div.withConfig({
  displayName: "CartItem__ItemContentDetailInner",
  componentId: "sc-3kmsar-3"
})(["display:flex;flex:1 1 100%;flex-wrap:wrap;"]);
var ItemContentDetailInfo = styled.div.withConfig({
  displayName: "CartItem__ItemContentDetailInfo",
  componentId: "sc-3kmsar-4"
})(["flex:1 1 100%;@media (min-width:992px){flex:1 1 ", ";}"], function (_ref) {
  var isMiniCart = _ref.isMiniCart;
  return isMiniCart ? "100%" : "auto";
});
var ItemContentQuantityInput = styled.div.withConfig({
  displayName: "CartItem__ItemContentQuantityInput",
  componentId: "sc-3kmsar-5"
})(["margin-top:", ";margin-bottom:", ";margin-left:0;margin-right:0;@media (min-width:992px){margin-top:", ";margin-bottom:", ";}"], applyTheme("CartItem.quantityInputSpacingAbove"), applyTheme("CartItem.quantityInputSpacingBelow"), function (props) {
  return props.isMiniCart ? applyTheme("CartItem.quantityInputSpacingAbove")(props) : "0";
}, function (props) {
  return props.isMiniCart ? applyTheme("CartItem.quantityInputSpacingBelow")(props) : "0";
});
var ItemContentPrice = styled.div.withConfig({
  displayName: "CartItem__ItemContentPrice",
  componentId: "sc-3kmsar-6"
})(["position:initial;bottom:", ";right:0;text-align:right;@media (max-width:768px){position:absolute;}@media (min-width:768px){margin-left:1.5rem;}"], applyTheme("CartItem.paddingBottom"));
var ItemContentSubtotal = styled.div.withConfig({
  displayName: "CartItem__ItemContentSubtotal",
  componentId: "sc-3kmsar-7"
})(["position:absolute;margin-top:", ";bottom:", ";right:0;text-align:right;@media (max-width:768px){position:initial;margin-top:", ";}"], function (props) {
  return props.isMiniCart ? applyTheme("CartItem.subtotalDisplaySpacingAbove")(props) : "0";
}, applyTheme("CartItem.paddingBottom"), applyTheme("CartItem.subtotalDisplaySpacingAbove"));
var ItemContentSubtotalTitle = styled.div.withConfig({
  displayName: "CartItem__ItemContentSubtotalTitle",
  componentId: "sc-3kmsar-8"
})(["", ";white-space:pre;"], addTypographyStyles("ItemContentSubtotalTitle", "labelText"));
var ItemContentSubtotalDisplay = styled.div.withConfig({
  displayName: "CartItem__ItemContentSubtotalDisplay",
  componentId: "sc-3kmsar-9"
})(["", ";"], addTypographyStyles("ItemContentSubtotalDisplay", "bodyTextSemiBold"));
var ItemRemoveButton = styled.button.withConfig({
  displayName: "CartItem__ItemRemoveButton",
  componentId: "sc-3kmsar-10"
})(["", " align-self:flex-start;background-color:transparent;border:none;color:", ";cursor:pointer;display:table;flex:0 1 auto;margin-bottom:", ";margin-left:0;margin-right:0;margin-top:", ";padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;width:auto;&:focus,&:hover{color:", ";}"], addTypographyStyles("CartItemRemoveButton", "labelText"), applyTheme("CartItem.removeButtonColor"), applyTheme("CartItem.removeButtonSpacingBelow"), applyTheme("CartItem.removeButtonSpacingAbove"), applyTheme("CartItem.removeButtonColor_focus"));

var CartItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CartItem, _Component);

  function CartItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CartItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CartItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isProcessing: false
    };

    _this.handleChangeCartItemQuantity = function (value) {
      var _this$props = _this.props,
          onChangeCartItemQuantity = _this$props.onChangeCartItemQuantity,
          _id = _this$props.item._id;
      onChangeCartItemQuantity(value, _id);
    };

    _this.handleRemoveItemFromCart = function () {
      var _this$props2 = _this.props,
          onRemoveItemFromCart = _this$props2.onRemoveItemFromCart,
          _id = _this$props2.item._id;
      onRemoveItemFromCart(_id);
    };

    return _this;
  }

  _createClass(CartItem, [{
    key: "renderImage",
    value: function renderImage() {
      var _this$props3 = this.props,
          isMiniCart = _this$props3.isMiniCart,
          _this$props3$item = _this$props3.item,
          imageURLs = _this$props3$item.imageURLs,
          productSlug = _this$props3$item.productSlug,
          productURLPath = _this$props3.productURLPath;

      var _ref2 = imageURLs || {},
          small = _ref2.small,
          thumbnail = _ref2.thumbnail;

      if (!small || !thumbnail) return null;
      return React.createElement("a", {
        href: [productURLPath, productSlug].join("")
      }, React.createElement("picture", null, isMiniCart ? "" : React.createElement("source", {
        srcSet: small,
        media: "(min-width: 768px)"
      }), React.createElement("img", {
        src: thumbnail,
        alt: "",
        style: {
          display: "block"
        }
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          components = _this$props4.components,
          isMiniCart = _this$props4.isMiniCart,
          isReadOnly = _this$props4.isReadOnly,
          productURLPath = _this$props4.productURLPath,
          _this$props4$item = _this$props4.item,
          attributes = _this$props4$item.attributes,
          compareAtPrice = _this$props4$item.compareAtPrice,
          currentQuantity = _this$props4$item.currentQuantity,
          productSlug = _this$props4$item.productSlug,
          productVendor = _this$props4$item.productVendor,
          title = _this$props4$item.title,
          quantity = _this$props4$item.quantity,
          isLowQuantity = _this$props4$item.isLowQuantity,
          displayPrice = _this$props4$item.price.displayAmount,
          subtotal = _this$props4$item.subtotal;

      var _ref3 = subtotal || {},
          displaySubtotal = _ref3.displayAmount;

      var _ref4 = compareAtPrice || {},
          displayCompareAtPrice = _ref4.displayAmount;

      var _ref5 = components || {},
          CartItemDetail = _ref5.CartItemDetail,
          Price = _ref5.Price,
          QuantityInput = _ref5.QuantityInput,
          StockWarning = _ref5.StockWarning;

      return React.createElement(Item, {
        className: className
      }, this.renderImage(), React.createElement(ItemContent, null, React.createElement(ItemContentDetail, null, React.createElement(ItemContentDetailInner, null, React.createElement(ItemContentDetailInfo, {
        isMiniCart: isMiniCart
      }, React.createElement(CartItemDetail, {
        attributes: attributes,
        isMiniCart: isMiniCart,
        productURLPath: productURLPath,
        productSlug: productSlug,
        productVendor: productVendor,
        quantity: isReadOnly ? quantity : null,
        title: title
      }), React.createElement(StockWarning, {
        inventoryQuantity: currentQuantity,
        isLowInventoryQuantity: isLowQuantity
      })), !isReadOnly && React.createElement(ItemContentQuantityInput, {
        isMiniCart: isMiniCart
      }, React.createElement(QuantityInput, {
        value: quantity,
        onChange: this.handleChangeCartItemQuantity
      }))), !isReadOnly && React.createElement(ItemRemoveButton, {
        onClick: this.handleRemoveItemFromCart
      }, "Remove"))), React.createElement(ItemContentPrice, {
        isMiniCart: isMiniCart
      }, React.createElement(Price, {
        displayPrice: displayPrice,
        displayCompareAtPrice: displayCompareAtPrice,
        hasPriceBottom: isMiniCart
      }), quantity !== 1 ? React.createElement(ItemContentSubtotal, {
        isMiniCart: isMiniCart
      }, React.createElement(ItemContentSubtotalTitle, null, "Total (", quantity, "):"), React.createElement(ItemContentSubtotalDisplay, null, displaySubtotal)) : null));
    }
  }]);

  return CartItem;
}(Component);

CartItem.propTypes = {
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
    /**
     * Pass either the Reaction CartItemDetail component or your own component that
     * accepts compatible props.
     */
    CartItemDetail: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Price component or your own component that
     * accepts compatible props.
     */
    Price: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction QuantityInput component or your own component that
     * accepts compatible props.
     */
    QuantityInput: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction StockWarning component or your own component that
     * accepts compatible props.
     */
    StockWarning: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Is in a MiniCart component
   */
  isMiniCart: PropTypes.bool,

  /**
   * Hide remove button and quantity input
   */
  isReadOnly: PropTypes.bool,

  /**
   * CartItem data
   */
  item: PropTypes.shape({
    /**
     * The cart item ID
     */
    _id: PropTypes.string,

    /**
     * Array of additional attributes of the chosen item.
     */
    attributes: PropTypes.arrayOf(PropTypes.object),

    /**
     * The current compareAt price (MSRP)
     */
    compareAtPrice: PropTypes.shape({
      /**
       * The display price
       */
      displayAmount: PropTypes.string.isRequired
    }),

    /**
     * Current stock quantity of item
     */
    currentQuantity: PropTypes.number,

    /**
     * Image URLs of chosen item
     */
    imageURLs: PropTypes.shape({
      large: PropTypes.string,
      medium: PropTypes.string,
      original: PropTypes.string,
      small: PropTypes.string,
      thumbnail: PropTypes.string
    }),

    /**
     * Is the chosen item have a low quantity
     */
    isLowQuantity: PropTypes.bool,

    /**
     * Price object of chosen item
     */
    price: PropTypes.shape({
      /**
       * The display price
       */
      displayAmount: PropTypes.string.isRequired
    }).isRequired,

    /**
     * Chosen items slug
     */
    productSlug: PropTypes.string,

    /**
     * Chosen items vendor
     */
    productVendor: PropTypes.string,

    /**
     * Chosen items title
     */
    subtotal: PropTypes.shape({
      /**
       * The display subtotal
       */
      displayAmount: PropTypes.string
    }),
    title: PropTypes.string,

    /**
     * Quantity of chosen item in cart
     */
    quantity: PropTypes.number
  }).isRequired,

  /**
   * On cart item quantity change handler
   */
  onChangeCartItemQuantity: PropTypes.func,

  /**
   * On remove item from cart handler
   */
  onRemoveItemFromCart: PropTypes.func,

  /**
   * Product URL path to be prepended before the slug
   */
  productURLPath: PropTypes.string
};
CartItem.defaultProps = {
  isMiniCart: false,
  isReadOnly: false,
  onChangeCartItemQuantity: function onChangeCartItemQuantity() {},
  onRemoveItemFromCart: function onRemoveItemFromCart() {}
};
export default i18n.withTranslation()(withComponents(CartItem)); // auto-add i18n