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

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var Cart = _styledComponents.default.div.withConfig({
  displayName: "MiniCart__Cart",
  componentId: "sc-1sxo1ab-0"
})(["border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";border-left-color:", ";border-left-style:solid;border-left-width:", ";border-right-color:", ";border-right-style:solid;border-right-width:", ";border-top-color:", ";border-top-style:solid;border-top-width:", ";max-width:", ";overflow:hidden;"], (0, _utils.applyTheme)("MiniCart.borderBottomColor"), (0, _utils.applyTheme)("MiniCart.borderBottomWidth"), (0, _utils.applyTheme)("MiniCart.borderLeftColor"), (0, _utils.applyTheme)("MiniCart.borderLeftWidth"), (0, _utils.applyTheme)("MiniCart.borderRightColor"), (0, _utils.applyTheme)("MiniCart.borderRightWidth"), (0, _utils.applyTheme)("MiniCart.borderTopColor"), (0, _utils.applyTheme)("MiniCart.borderTopWidth"), (0, _utils.applyTheme)("MiniCart.maxWidth"));

var Items = _styledComponents.default.div.withConfig({
  displayName: "MiniCart__Items",
  componentId: "sc-1sxo1ab-1"
})(["max-height:", ";overflow-x:hidden;overflow-y:auto;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.applyTheme)("MiniCart.listHeightToBeginScrolling"), (0, _utils.applyTheme)("MiniCart.listPaddingBottom"), (0, _utils.applyTheme)("MiniCart.listPaddingLeft"), (0, _utils.applyTheme)("MiniCart.listPaddingRight"), (0, _utils.applyTheme)("MiniCart.listPaddingTop"));

var Footer = _styledComponents.default.div.withConfig({
  displayName: "MiniCart__Footer",
  componentId: "sc-1sxo1ab-2"
})(["border-top-color:", ";border-top-style:solid;border-top-width:", ";box-shadow:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";position:relative;"], (0, _utils.applyTheme)("MiniCartFooter.borderTopColor"), (0, _utils.applyTheme)("MiniCartFooter.borderTopWidth"), function (_ref) {
  var count = _ref.count;
  return count > 2 ? (0, _utils.applyTheme)("MiniCartFooter.boxShadow_overflow") : (0, _utils.applyTheme)("MiniCartFooter.boxShadow");
}, (0, _utils.applyTheme)("MiniCartFooter.paddingBottom"), (0, _utils.applyTheme)("MiniCartFooter.paddingLeft"), (0, _utils.applyTheme)("MiniCartFooter.paddingRight"), (0, _utils.applyTheme)("MiniCartFooter.paddingTop"));

var FooterMessage = _styledComponents.default.span.withConfig({
  displayName: "MiniCart__FooterMessage",
  componentId: "sc-1sxo1ab-3"
})(["", " display:block;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";text-align:center;"], (0, _utils.addTypographyStyles)("MiniCartFooterMessage", "captionText"), (0, _utils.applyTheme)("MiniCartFooterMessage.paddingBottom"), (0, _utils.applyTheme)("MiniCartFooterMessage.paddingLeft"), (0, _utils.applyTheme)("MiniCartFooterMessage.paddingRight"), (0, _utils.applyTheme)("MiniCartFooterMessage.paddingTop"));

var MiniCart =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MiniCart, _Component);

  function MiniCart() {
    (0, _classCallCheck2.default)(this, MiniCart);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MiniCart).apply(this, arguments));
  }

  (0, _createClass2.default)(MiniCart, [{
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
          props = (0, _objectWithoutProperties2.default)(_this$props, ["cart", "className", "components", "onCheckoutButtonClick"]);
      return _react.default.createElement(Cart, {
        className: className
      }, _react.default.createElement(Items, null, _react.default.createElement(CartItems, (0, _extends2.default)({
        items: items
      }, props, {
        isMiniCart: true
      }))), _react.default.createElement(Footer, {
        count: items.length
      }, _react.default.createElement(MiniCartSummary, {
        displaySubtotal: summary.itemTotal.displayAmount
      }), CartCheckoutButton && _react.default.createElement(CartCheckoutButton, {
        onClick: onCheckoutButtonClick
      }) || _react.default.createElement(Button, {
        actionType: "important",
        isFullWidth: true,
        onClick: onCheckoutButtonClick
      }, "Checkout"), _react.default.createElement(FooterMessage, null, "Shipping and tax calculated in checkout")));
    }
  }]);
  return MiniCart;
}(_react.Component);

MiniCart.propTypes = {
  /**
   * Cart data
   */
  cart: _propTypes.default.shape({
    /**
     * Cart checkout info
     */
    checkout: _propTypes.default.shape({
      /**
       * Checkout summary
       */
      summary: _propTypes.default.shape({
        /**
         * Checkout summary item total info
         */
        itemTotal: _propTypes.default.shape({
          /**
           * Checkout summary item total display amount
           */
          displayAmount: _propTypes.default.string
        }),

        /**
         * Checkout summary tax info
         */
        taxTotal: _propTypes.default.shape({
          /**
           * Checkout summary tax display amount
           */
          displayAmount: _propTypes.default.string
        })
      })
    }),

    /**
     * CartItem data. This is passed to CartItems, which may require some props.
     */
    items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
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
    /**
     * Pass either the Reaction Button component or your own component that
     * accepts compatible props.
     */
    Button: _utils.CustomPropTypes.component,

    /**
     * An element to show as the cart checkout button. If this isn't provided,
     * a button will be rendered using Button component.
     */
    CartCheckoutButton: _utils.CustomPropTypes.component,

    /**
     * Pass either the Reaction CartItems component or your own component that
     * accepts compatible props.
     */
    CartItems: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction MiniCartSummary component or your own component that
     * accepts compatible props.
     */
    MiniCartSummary: _utils.CustomPropTypes.component.isRequired
  }),

  /**
   * On cart item quantity change handler
   */
  onChangeCartItemQuantity: _propTypes.default.func,

  /**
   * On default checkout button click. Not used if a custom button is supplied by `components.CartCheckoutButton`
   */
  onCheckoutButtonClick: _propTypes.default.func,

  /**
   * On remove item from cart handler
   */
  onRemoveItemFromCart: _propTypes.default.func,

  /**
   * Product URL path to be prepended before the slug
   */
  productURLPath: _propTypes.default.string
};
MiniCart.defaultProps = {
  onChangeCartItemQuantity: function onChangeCartItemQuantity() {},
  onCheckoutButtonClick: function onCheckoutButtonClick() {},
  onRemoveItemFromCart: function onRemoveItemFromCart() {}
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(MiniCart)); // auto-add i18n


exports.default = _default;