"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var Items = _styledComponents.default.div.withConfig({
  displayName: "CartItems__Items",
  componentId: "sc-10kp11g-0"
})([""]);

var CartItems =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CartItems, _Component);

  function CartItems() {
    (0, _classCallCheck2.default)(this, CartItems);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CartItems).apply(this, arguments));
  }

  (0, _createClass2.default)(CartItems, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          items = _this$props.items,
          _this$props$component = _this$props.components,
          CartItem = _this$props$component.CartItem,
          components = (0, _objectWithoutProperties2.default)(_this$props$component, ["CartItem"]),
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "items", "components"]);
      return _react.default.createElement(Items, {
        className: className
      }, items.map(function (item) {
        return _react.default.createElement(CartItem, (0, _extends2.default)({
          key: item._id,
          item: item,
          components: components
        }, props));
      }));
    }
  }]);
  return CartItems;
}(_react.Component);

CartItems.propTypes = {
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
    /**
     * Pass either the Reaction `CartItem` component or your own component
     * that takes `items`, `isMiniCart`, `onChangeCartItemQuantity`, and
     * `onRemoveItemFromCart` props and uses them to render a single cart item.
     */
    CartItem: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Is in a MiniCart component
   */
  isMiniCart: _propTypes.default.bool,

  /**
   * Hide remove button and quantity input
   */
  isReadOnly: _propTypes.default.bool,

  /**
   * CartItem data. Only the `_id` prop is required by this component. Each item is passed to
   * CartItem, which may require additional props.
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * The cart item ID
     */
    _id: _propTypes.default.string.isRequired
  })).isRequired,

  /**
   * On cart item quantity change handler
   */
  onChangeCartItemQuantity: _propTypes.default.func,

  /**
   * On remove item from cart handler
   */
  onRemoveItemFromCart: _propTypes.default.func,

  /**
   * Product URL path to be prepended before the slug. Should end with with "/"
   */
  productURLPath: _propTypes.default.string
};
CartItems.defaultProps = {
  isMiniCart: false,
  isReadOnly: false,
  onChangeCartItemQuantity: function onChangeCartItemQuantity() {},
  onRemoveItemFromCart: function onRemoveItemFromCart() {}
};

var _default = (0, _componentsContext.withComponents)(CartItems);

exports.default = _default;