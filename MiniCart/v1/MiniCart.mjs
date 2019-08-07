import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../utils";
var Cart = styled.div.withConfig({
  displayName: "MiniCart__Cart",
  componentId: "sc-1sxo1ab-0"
})(["border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";border-left-color:", ";border-left-style:solid;border-left-width:", ";border-right-color:", ";border-right-style:solid;border-right-width:", ";border-top-color:", ";border-top-style:solid;border-top-width:", ";max-width:", ";overflow:hidden;"], applyTheme("MiniCart.borderBottomColor"), applyTheme("MiniCart.borderBottomWidth"), applyTheme("MiniCart.borderLeftColor"), applyTheme("MiniCart.borderLeftWidth"), applyTheme("MiniCart.borderRightColor"), applyTheme("MiniCart.borderRightWidth"), applyTheme("MiniCart.borderTopColor"), applyTheme("MiniCart.borderTopWidth"), applyTheme("MiniCart.maxWidth"));
var Items = styled.div.withConfig({
  displayName: "MiniCart__Items",
  componentId: "sc-1sxo1ab-1"
})(["max-height:", ";overflow-x:hidden;overflow-y:auto;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], applyTheme("MiniCart.listHeightToBeginScrolling"), applyTheme("MiniCart.listPaddingBottom"), applyTheme("MiniCart.listPaddingLeft"), applyTheme("MiniCart.listPaddingRight"), applyTheme("MiniCart.listPaddingTop"));
var Footer = styled.div.withConfig({
  displayName: "MiniCart__Footer",
  componentId: "sc-1sxo1ab-2"
})(["border-top-color:", ";border-top-style:solid;border-top-width:", ";box-shadow:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";position:relative;"], applyTheme("MiniCartFooter.borderTopColor"), applyTheme("MiniCartFooter.borderTopWidth"), function (_ref) {
  var count = _ref.count;
  return count > 2 ? applyTheme("MiniCartFooter.boxShadow_overflow") : applyTheme("MiniCartFooter.boxShadow");
}, applyTheme("MiniCartFooter.paddingBottom"), applyTheme("MiniCartFooter.paddingLeft"), applyTheme("MiniCartFooter.paddingRight"), applyTheme("MiniCartFooter.paddingTop"));
var FooterMessage = styled.span.withConfig({
  displayName: "MiniCart__FooterMessage",
  componentId: "sc-1sxo1ab-3"
})(["", " display:block;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";text-align:center;"], addTypographyStyles("MiniCartFooterMessage", "captionText"), applyTheme("MiniCartFooterMessage.paddingBottom"), applyTheme("MiniCartFooterMessage.paddingLeft"), applyTheme("MiniCartFooterMessage.paddingRight"), applyTheme("MiniCartFooterMessage.paddingTop"));

var MiniCart =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MiniCart, _Component);

    function MiniCart() {
      _classCallCheck(this, MiniCart);

      return _possibleConstructorReturn(this, _getPrototypeOf(MiniCart).apply(this, arguments));
    }

    _createClass(MiniCart, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
          _this$props$cart = _this$props.cart,
          summary = _this$props$cart.checkout.summary,
          items = _this$props$cart.items,
          className = _this$props.className,
          _this$props$component = _this$props.components,
          Button = _this$props$component.Button,
          CartCheckoutButton = _this$props$component.CartCheckoutButton,
          CartItems = _this$props$component.CartItems,
          MiniCartSummary = _this$props$component.MiniCartSummary,
          onCheckoutButtonClick = _this$props.onCheckoutButtonClick,
          props = _objectWithoutProperties(_this$props, ["cart", "className", "components", "onCheckoutButtonClick"]);

        return React.createElement(Cart, {
          className: className
        }, React.createElement(Items, null, React.createElement(CartItems, _extends({
          items: items
        }, props, {
            isMiniCart: true
          }))), React.createElement(Footer, {
            count: items.length
          }, React.createElement(MiniCartSummary, {
            displaySubtotal: summary.itemTotal.displayAmount
          }), CartCheckoutButton && React.createElement(CartCheckoutButton, {
            onClick: onCheckoutButtonClick
          }) || React.createElement(Button, {
            actionType: "important",
            isFullWidth: true,
            onClick: onCheckoutButtonClick
          }, "Checkout"), React.createElement(FooterMessage, null, "Shipping and tax calculated in checkout")));
      }
    }]);

    return MiniCart;
  }(Component);

MiniCart.propTypes = {
  /**
   * Cart data
   */
  cart: PropTypes.shape({
    /**
     * Cart checkout info
     */
    checkout: PropTypes.shape({
      /**
       * Checkout summary
       */
      summary: PropTypes.shape({
        /**
         * Checkout summary item total info
         */
        itemTotal: PropTypes.shape({
          /**
           * Checkout summary item total display amount
           */
          displayAmount: PropTypes.string
        }),

        /**
         * Checkout summary tax info
         */
        taxTotal: PropTypes.shape({
          /**
           * Checkout summary tax display amount
           */
          displayAmount: PropTypes.string
        })
      })
    }),

    /**
     * CartItem data. This is passed to CartItems, which may require some props.
     */
    items: PropTypes.arrayOf(PropTypes.object).isRequired
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
    /**
     * Pass either the Reaction Button component or your own component that
     * accepts compatible props.
     */
    Button: CustomPropTypes.component,

    /**
     * An element to show as the cart checkout button. If this isn't provided,
     * a button will be rendered using Button component.
     */
    CartCheckoutButton: CustomPropTypes.component,

    /**
     * Pass either the Reaction CartItems component or your own component that
     * accepts compatible props.
     */
    CartItems: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction MiniCartSummary component or your own component that
     * accepts compatible props.
     */
    MiniCartSummary: CustomPropTypes.component.isRequired
  }),

  /**
   * On cart item quantity change handler
   */
  onChangeCartItemQuantity: PropTypes.func,

  /**
   * On default checkout button click. Not used if a custom button is supplied by `components.CartCheckoutButton`
   */
  onCheckoutButtonClick: PropTypes.func,

  /**
   * On remove item from cart handler
   */
  onRemoveItemFromCart: PropTypes.func,

  /**
   * Product URL path to be prepended before the slug
   */
  productURLPath: PropTypes.string
};
MiniCart.defaultProps = {
  onChangeCartItemQuantity: function onChangeCartItemQuantity() { },
  onCheckoutButtonClick: function onCheckoutButtonClick() { },
  onRemoveItemFromCart: function onRemoveItemFromCart() { }
};
export default i18n.withTranslation()(withComponents(MiniCart)); // auto-add i18n