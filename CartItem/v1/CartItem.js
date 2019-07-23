"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.string.small");

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

// auto-add i18n 
var Item = _styledComponents.default.div.withConfig({
  displayName: "CartItem__Item",
  componentId: "sc-3kmsar-0"
})(["position:relative;align-items:flex-start;border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";border-left-color:", ";border-left-style:solid;border-left-width:", ";border-right-color:", ";border-right-style:solid;border-right-width:", ";border-top-color:", ";border-top-style:solid;border-top-width:", ";box-sizing:border-box;display:flex;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";width:100%;&:first-of-type{border-top:none;}&:last-of-type{border-bottom:none;}> *{box-sizing:border-box;}"], (0, _utils.applyTheme)("CartItem.borderBottomColor"), (0, _utils.applyTheme)("CartItem.borderBottomWidth"), (0, _utils.applyTheme)("CartItem.borderLeftColor"), (0, _utils.applyTheme)("CartItem.borderLeftWidth"), (0, _utils.applyTheme)("CartItem.borderRightColor"), (0, _utils.applyTheme)("CartItem.borderRightWidth"), (0, _utils.applyTheme)("CartItem.borderTopColor"), (0, _utils.applyTheme)("CartItem.borderTopWidth"), (0, _utils.applyTheme)("CartItem.paddingBottom"), (0, _utils.applyTheme)("CartItem.paddingLeft"), (0, _utils.applyTheme)("CartItem.paddingRight"), (0, _utils.applyTheme)("CartItem.paddingTop"));

var ItemContent = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContent",
  componentId: "sc-3kmsar-1"
})(["display:flex;margin-left:", ";position:relative;width:100%;"], (0, _utils.applyTheme)("CartItem.imageContentSpacing"));

var ItemContentDetail = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContentDetail",
  componentId: "sc-3kmsar-2"
})(["display:flex;flex:1 1 auto;flex-wrap:wrap;"]);

var ItemContentDetailInner = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContentDetailInner",
  componentId: "sc-3kmsar-3"
})(["display:flex;flex:1 1 100%;flex-wrap:wrap;"]);

var ItemContentDetailInfo = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContentDetailInfo",
  componentId: "sc-3kmsar-4"
})(["flex:1 1 100%;@media (min-width:992px){flex:1 1 ", ";}"], function (_ref) {
  var isMiniCart = _ref.isMiniCart;
  return isMiniCart ? "100%" : "auto";
});

var ItemContentQuantityInput = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContentQuantityInput",
  componentId: "sc-3kmsar-5"
})(["margin-top:", ";margin-bottom:", ";margin-left:0;margin-right:0;@media (min-width:992px){margin-top:", ";margin-bottom:", ";}"], (0, _utils.applyTheme)("CartItem.quantityInputSpacingAbove"), (0, _utils.applyTheme)("CartItem.quantityInputSpacingBelow"), function (props) {
  return props.isMiniCart ? (0, _utils.applyTheme)("CartItem.quantityInputSpacingAbove")(props) : "0";
}, function (props) {
  return props.isMiniCart ? (0, _utils.applyTheme)("CartItem.quantityInputSpacingBelow")(props) : "0";
});

var ItemContentPrice = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContentPrice",
  componentId: "sc-3kmsar-6"
})(["position:initial;bottom:", ";right:0;text-align:right;@media (max-width:768px){position:absolute;}@media (min-width:768px){margin-left:1.5rem;}"], (0, _utils.applyTheme)("CartItem.paddingBottom"));

var ItemContentSubtotal = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContentSubtotal",
  componentId: "sc-3kmsar-7"
})(["position:absolute;margin-top:", ";bottom:", ";right:0;text-align:right;@media (max-width:768px){position:initial;margin-top:", ";}"], function (props) {
  return props.isMiniCart ? (0, _utils.applyTheme)("CartItem.subtotalDisplaySpacingAbove")(props) : "0";
}, (0, _utils.applyTheme)("CartItem.paddingBottom"), (0, _utils.applyTheme)("CartItem.subtotalDisplaySpacingAbove"));

var ItemContentSubtotalTitle = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContentSubtotalTitle",
  componentId: "sc-3kmsar-8"
})(["", ";white-space:pre;"], (0, _utils.addTypographyStyles)("ItemContentSubtotalTitle", "labelText"));

var ItemContentSubtotalDisplay = _styledComponents.default.div.withConfig({
  displayName: "CartItem__ItemContentSubtotalDisplay",
  componentId: "sc-3kmsar-9"
})(["", ";"], (0, _utils.addTypographyStyles)("ItemContentSubtotalDisplay", "bodyTextSemiBold"));

var ItemRemoveButton = _styledComponents.default.button.withConfig({
  displayName: "CartItem__ItemRemoveButton",
  componentId: "sc-3kmsar-10"
})(["", " align-self:flex-start;background-color:transparent;border:none;color:", ";cursor:pointer;display:table;flex:0 1 auto;margin-bottom:", ";margin-left:0;margin-right:0;margin-top:", ";padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;width:auto;&:focus,&:hover{color:", ";}"], (0, _utils.addTypographyStyles)("CartItemRemoveButton", "labelText"), (0, _utils.applyTheme)("CartItem.removeButtonColor"), (0, _utils.applyTheme)("CartItem.removeButtonSpacingBelow"), (0, _utils.applyTheme)("CartItem.removeButtonSpacingAbove"), (0, _utils.applyTheme)("CartItem.removeButtonColor_focus"));

var CartItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CartItem, _Component);

  function CartItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CartItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CartItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  (0, _createClass2.default)(CartItem, [{
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
      return _react.default.createElement("a", {
        href: [productURLPath, productSlug].join("")
      }, _react.default.createElement("picture", null, isMiniCart ? "" : _react.default.createElement("source", {
        srcSet: small,
        media: "(min-width: 768px)"
      }), _react.default.createElement("img", {
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

      return _react.default.createElement(Item, {
        className: className
      }, this.renderImage(), _react.default.createElement(ItemContent, null, _react.default.createElement(ItemContentDetail, null, _react.default.createElement(ItemContentDetailInner, null, _react.default.createElement(ItemContentDetailInfo, {
        isMiniCart: isMiniCart
      }, _react.default.createElement(CartItemDetail, {
        attributes: attributes,
        isMiniCart: isMiniCart,
        productURLPath: productURLPath,
        productSlug: productSlug,
        productVendor: productVendor,
        quantity: isReadOnly ? quantity : null,
        title: title
      }), _react.default.createElement(StockWarning, {
        inventoryQuantity: currentQuantity,
        isLowInventoryQuantity: isLowQuantity
      })), !isReadOnly && _react.default.createElement(ItemContentQuantityInput, {
        isMiniCart: isMiniCart
      }, _react.default.createElement(QuantityInput, {
        value: quantity,
        onChange: this.handleChangeCartItemQuantity
      }))), !isReadOnly && _react.default.createElement(ItemRemoveButton, {
        onClick: this.handleRemoveItemFromCart
      }, "Remove"))), _react.default.createElement(ItemContentPrice, {
        isMiniCart: isMiniCart
      }, _react.default.createElement(Price, {
        displayPrice: displayPrice,
        displayCompareAtPrice: displayCompareAtPrice,
        hasPriceBottom: isMiniCart
      }), quantity !== 1 ? _react.default.createElement(ItemContentSubtotal, {
        isMiniCart: isMiniCart
      }, _react.default.createElement(ItemContentSubtotalTitle, null, "Total (", quantity, "):"), _react.default.createElement(ItemContentSubtotalDisplay, null, displaySubtotal)) : null));
    }
  }]);
  return CartItem;
}(_react.Component);

CartItem.propTypes = {
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
     * Pass either the Reaction CartItemDetail component or your own component that
     * accepts compatible props.
     */
    CartItemDetail: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Price component or your own component that
     * accepts compatible props.
     */
    Price: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction QuantityInput component or your own component that
     * accepts compatible props.
     */
    QuantityInput: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction StockWarning component or your own component that
     * accepts compatible props.
     */
    StockWarning: _utils.CustomPropTypes.component.isRequired
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
   * CartItem data
   */
  item: _propTypes.default.shape({
    /**
     * The cart item ID
     */
    _id: _propTypes.default.string,

    /**
     * Array of additional attributes of the chosen item.
     */
    attributes: _propTypes.default.arrayOf(_propTypes.default.object),

    /**
     * The current compareAt price (MSRP)
     */
    compareAtPrice: _propTypes.default.shape({
      /**
       * The display price
       */
      displayAmount: _propTypes.default.string.isRequired
    }),

    /**
     * Current stock quantity of item
     */
    currentQuantity: _propTypes.default.number,

    /**
     * Image URLs of chosen item
     */
    imageURLs: _propTypes.default.shape({
      large: _propTypes.default.string,
      medium: _propTypes.default.string,
      original: _propTypes.default.string,
      small: _propTypes.default.string,
      thumbnail: _propTypes.default.string
    }),

    /**
     * Is the chosen item have a low quantity
     */
    isLowQuantity: _propTypes.default.bool,

    /**
     * Price object of chosen item
     */
    price: _propTypes.default.shape({
      /**
       * The display price
       */
      displayAmount: _propTypes.default.string.isRequired
    }).isRequired,

    /**
     * Chosen items slug
     */
    productSlug: _propTypes.default.string,

    /**
     * Chosen items vendor
     */
    productVendor: _propTypes.default.string,

    /**
     * Chosen items title
     */
    subtotal: _propTypes.default.shape({
      /**
       * The display subtotal
       */
      displayAmount: _propTypes.default.string
    }),
    title: _propTypes.default.string,

    /**
     * Quantity of chosen item in cart
     */
    quantity: _propTypes.default.number
  }).isRequired,

  /**
   * On cart item quantity change handler
   */
  onChangeCartItemQuantity: _propTypes.default.func,

  /**
   * On remove item from cart handler
   */
  onRemoveItemFromCart: _propTypes.default.func,

  /**
   * Product URL path to be prepended before the slug
   */
  productURLPath: _propTypes.default.string
};
CartItem.defaultProps = {
  isMiniCart: false,
  isReadOnly: false,
  onChangeCartItemQuantity: function onChangeCartItemQuantity() {},
  onRemoveItemFromCart: function onRemoveItemFromCart() {}
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(CartItem)); // auto-add i18n


exports.default = _default;