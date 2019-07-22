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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentsContext = require("@reactioncommerce/components-context");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var Title = _styledComponents.default.h3.withConfig({
  displayName: "FinalReviewCheckoutAction__Title",
  componentId: "x3j0ce-0"
})(["", ""], (0, _utils.addTypographyStyles)("FinalReviewCheckoutActionTitle", "subheadingTextBold")); // NOTE: We intentionally break from our convention of using separate border
// theme variables for each side here. Because various borders intersect, it
// could lead to strangeness to separate them.


var Summary = _styledComponents.default.div.withConfig({
  displayName: "FinalReviewCheckoutAction__Summary",
  componentId: "x3j0ce-1"
})(["border-color:", ";border-style:solid;border-width:", ";"], (0, _utils.applyTheme)("FinalReviewCheckoutAction.borderColor"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.borderWidth"));

var CartSummaryWrapper = _styledComponents.default.div.withConfig({
  displayName: "FinalReviewCheckoutAction__CartSummaryWrapper",
  componentId: "x3j0ce-2"
})(["padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.applyTheme)("FinalReviewCheckoutAction.summaryWrapperPaddingBottom"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.summaryWrapperPaddingLeft"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.summaryWrapperPaddingRight"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.summaryWrapperPaddingTop"));

var Items = _styledComponents.default.div.withConfig({
  displayName: "FinalReviewCheckoutAction__Items",
  componentId: "x3j0ce-3"
})(["border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.applyTheme)("FinalReviewCheckoutAction.borderColor"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.borderWidth"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.itemsWrapperPaddingBottom"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.itemsWrapperPaddingLeft"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.itemsWrapperPaddingRight"), (0, _utils.applyTheme)("FinalReviewCheckoutAction.itemsWrapperPaddingTop"));

var FinalReviewCheckoutAction =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FinalReviewCheckoutAction, _Component);

  function FinalReviewCheckoutAction() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FinalReviewCheckoutAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FinalReviewCheckoutAction)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.submit = function () {
      var onSubmit = _this.props.onSubmit;
      onSubmit();
    };

    return _this;
  }

  (0, _createClass2.default)(FinalReviewCheckoutAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onReadyForSaveChange = this.props.onReadyForSaveChange;
      onReadyForSaveChange(true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$checkoutS = _this$props.checkoutSummary,
          displayDiscount = _this$props$checkoutS.displayDiscount,
          displayShipping = _this$props$checkoutS.displayShipping,
          displaySubtotal = _this$props$checkoutS.displaySubtotal,
          displaySurcharge = _this$props$checkoutS.displaySurcharge,
          displayTax = _this$props$checkoutS.displayTax,
          displayTotal = _this$props$checkoutS.displayTotal,
          items = _this$props$checkoutS.items,
          _this$props$component = _this$props.components,
          CartItems = _this$props$component.CartItems,
          CartSummary = _this$props$component.CartSummary,
          label = _this$props.label,
          stepNumber = _this$props.stepNumber,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["checkoutSummary", "components", "label", "stepNumber"]);
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Title, null, stepNumber, ". ", label), _react.default.createElement(Summary, null, _react.default.createElement(Items, null, _react.default.createElement(CartItems, (0, _extends2.default)({
        isReadOnly: true,
        items: items
      }, props))), _react.default.createElement(CartSummaryWrapper, null, _react.default.createElement(CartSummary, {
        isDense: true,
        displayDiscount: displayDiscount,
        displayShipping: displayShipping,
        displaySubtotal: displaySubtotal,
        displaySurcharge: displaySurcharge,
        displayTax: displayTax,
        displayTotal: displayTotal
      }))));
    }
  }]);
  return FinalReviewCheckoutAction;
}(_react.Component);

FinalReviewCheckoutAction.renderComplete = function () {
  return null;
};

FinalReviewCheckoutAction.propTypes = {
  /**
   * Cart data
   */
  checkoutSummary: _propTypes.default.shape({
    /**
     * Discount amount associated with promo code
     */
    displayDiscount: _propTypes.default.string,

    /**
     * Shipping cost
     */
    displayShipping: _propTypes.default.string,

    /**
     * Subtotal amount
     */
    displaySubtotal: _propTypes.default.string.isRequired,

    /**
     * Surcharges added to this cart
     */
    displaySurcharge: _propTypes.default.string,

    /**
     * Calculated tax amount
     */
    displayTax: _propTypes.default.string,

    /**
     * Total amount
     */
    displayTotal: _propTypes.default.string.isRequired,

    /**
     * If a product qualifies for free shipping, display "FREE" for shipping method
     */
    isFreeShipping: _propTypes.default.bool,

    /**
     * CartItem data. This is passed to CartItems, which may require some props.
     */
    items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
  }),

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction CartItems component or your own component that
     * accepts compatible props.
     */
    CartItems: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction CartSummary component or your own component that
     * accepts compatible props.
     */
    CartSummary: _utils.CustomPropTypes.component.isRequired
  }),

  /**
   * Label of workflow step
   */
  label: _propTypes.default.string.isRequired,

  /**
   * When action is ready for save call this prop method to
   * enable the save button with in the `CheckoutActions`
   */
  onReadyForSaveChange: _propTypes.default.func,

  /**
   * When an action form passes validation and submits
   * the value will be passed to this callback
   * this function.
   */
  onSubmit: _propTypes.default.func,

  /**
   * Product URL path to be prepended before the slug
  */
  productURLPath: _propTypes.default.string,

  /**
   * Checkout process step number
   */
  stepNumber: _propTypes.default.number.isRequired
};
FinalReviewCheckoutAction.defaultProps = {
  onReadyForSaveChange: function onReadyForSaveChange() {}
};

var _default = (0, _componentsContext.withComponents)(FinalReviewCheckoutAction);

exports.default = _default;