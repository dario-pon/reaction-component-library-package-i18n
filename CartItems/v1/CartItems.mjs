import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
import { CustomPropTypes } from "../../utils";
var Items = styled.div.withConfig({
  displayName: "CartItems__Items",
  componentId: "sc-10kp11g-0"
})([""]);

var CartItems =
/*#__PURE__*/
function (_Component) {
  _inherits(CartItems, _Component);

  function CartItems() {
    _classCallCheck(this, CartItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(CartItems).apply(this, arguments));
  }

  _createClass(CartItems, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          items = _this$props.items,
          _this$props$component = _this$props.components,
          CartItem = _this$props$component.CartItem,
          components = _objectWithoutProperties(_this$props$component, ["CartItem"]),
          props = _objectWithoutProperties(_this$props, ["className", "items", "components"]);

      return React.createElement(Items, {
        className: className
      }, items.map(function (item) {
        return React.createElement(CartItem, _extends({
          key: item._id,
          item: item,
          components: components
        }, props));
      }));
    }
  }]);

  return CartItems;
}(Component);

CartItems.propTypes = {
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
     * Pass either the Reaction `CartItem` component or your own component
     * that takes `items`, `isMiniCart`, `onChangeCartItemQuantity`, and
     * `onRemoveItemFromCart` props and uses them to render a single cart item.
     */
    CartItem: CustomPropTypes.component.isRequired
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
   * CartItem data. Only the `_id` prop is required by this component. Each item is passed to
   * CartItem, which may require additional props.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * The cart item ID
     */
    _id: PropTypes.string.isRequired
  })).isRequired,

  /**
   * On cart item quantity change handler
   */
  onChangeCartItemQuantity: PropTypes.func,

  /**
   * On remove item from cart handler
   */
  onRemoveItemFromCart: PropTypes.func,

  /**
   * Product URL path to be prepended before the slug. Should end with with "/"
   */
  productURLPath: PropTypes.string
};
CartItems.defaultProps = {
  isMiniCart: false,
  isReadOnly: false,
  onChangeCartItemQuantity: function onChangeCartItemQuantity() {},
  onRemoveItemFromCart: function onRemoveItemFromCart() {}
};
export default i18n.withTranslation()(withComponents(CartItems)); // auto-add i18n