"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStripeElements = require("react-stripe-elements");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns a value from the theme
 *   based on the current focused state reflected in `props`.
 *   If `isFocused` is `true`, uses theme prop with "focus" appended; otherwise
 *   uses theme prop with "default" appended.
 * @param {String} themeProp The name of the theme variable to get the value for
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */
function fieldBorderColor(themeProp) {
  return function (props) {
    var status = "default";

    if (props.isFocused) {
      status = "focus";
    }

    return (0, _utils.applyTheme)("".concat(themeProp, "_").concat(status));
  };
}

var Field = _styledComponents.default.div.withConfig({
  displayName: "StripeForm__Field",
  componentId: "phbkxv-0"
})(["-webkit-font-smoothing:antialiased;background-color:", ";border-color:", ";border-style:solid;border-width:1px;box-sizing:border-box;color:", ";line-height:", ";border-radius:2px;margin-bottom:20px;outline:none;padding:", " ", ";"], (0, _utils.applyTheme)("Input.backgroundColor_default"), fieldBorderColor("Input.borderColor"), (0, _utils.applyTheme)("Input.color_default"), (0, _utils.applyTheme)("Input.lineHeight"), (0, _utils.applyTheme)("Input.verticalPadding"), (0, _utils.applyTheme)("Input.horizontalPadding"));

var AcceptedPaymentMethods = _styledComponents.default.div.withConfig({
  displayName: "StripeForm__AcceptedPaymentMethods",
  componentId: "phbkxv-1"
})(["display:flex;justify-content:flex-end;margin:20px 0;"]);

var Span = _styledComponents.default.span.withConfig({
  displayName: "StripeForm__Span",
  componentId: "phbkxv-2"
})(["margin-left:5px;"]);

var FlexContainer = _styledComponents.default.div.withConfig({
  displayName: "StripeForm__FlexContainer",
  componentId: "phbkxv-3"
})(["display:flex;"]);

var StripeForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(StripeForm, _Component);

  function StripeForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, StripeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(StripeForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      cardNumberComplete: false,
      cardNumberIsFocused: false,
      cardExpiryComplete: false,
      cardExpiryIsFocused: false,
      cardCvcComplete: false,
      cardCvcIsFocused: false,
      postalCodeComplete: false,
      postalCodeIsFocused: false
    };

    _this.componentDidUpdate = function () {
      if (_this.props.stripe) {
        _this.props.stripeRef(_this.props.stripe);
      }
    };

    _this.handleOnFocus = function (event) {
      _this.setState((0, _defineProperty2.default)({}, "".concat(event.elementType, "IsFocused"), true));
    };

    _this.handleOnBlur = function (event) {
      _this.setState((0, _defineProperty2.default)({}, "".concat(event.elementType, "IsFocused"), false));
    };

    _this.handleOnChange = function (event) {
      var complete = event.complete,
          elementType = event.elementType;

      _this.setState((0, _defineProperty2.default)({}, "".concat(elementType, "Complete"), complete), _this.isComplete);
    };

    _this.isComplete = function () {
      var _this$state = _this.state,
          cardNumberComplete = _this$state.cardNumberComplete,
          cardExpiryComplete = _this$state.cardExpiryComplete,
          cardCvcComplete = _this$state.cardCvcComplete,
          postalCodeComplete = _this$state.postalCodeComplete; // console.log("isComplete", this.state);

      if (cardNumberComplete && cardExpiryComplete && cardCvcComplete && postalCodeComplete) {
        _this.props.isComplete(true);
      } else {
        _this.props.isComplete(false);
      }
    };

    _this.renderIcons = function (ccIcons) {
      return _react.default.createElement("div", null, ccIcons.map(function (icon, index) {
        return _react.default.createElement(Span, {
          key: index
        }, icon);
      }));
    };

    return _this;
  }

  (0, _createClass2.default)(StripeForm, [{
    key: "render",
    value: function render() {
      var ccIcons = [this.props.components.iconVisa, this.props.components.iconAmericanExpress, this.props.components.iconMastercard, this.props.components.iconDiscover];
      var _this$props = this.props,
          cardNumberPlaceholder = _this$props.cardNumberPlaceholder,
          cardExpiryPlaceholder = _this$props.cardExpiryPlaceholder,
          cardCvcPlaceholder = _this$props.cardCvcPlaceholder,
          postalCodePlaceholder = _this$props.postalCodePlaceholder;
      var _this$state2 = this.state,
          cardNumberIsFocused = _this$state2.cardNumberIsFocused,
          cardExpiryIsFocused = _this$state2.cardExpiryIsFocused,
          cardCvcIsFocused = _this$state2.cardCvcIsFocused,
          postalCodeIsFocused = _this$state2.postalCodeIsFocused;
      var commonProps = {
        style: {
          base: {
            "fontSize": (0, _utils.applyTheme)("Input.fontSize")(this.props),
            "color": (0, _utils.applyTheme)("Input.color_default")(this.props),
            "fontFamily": (0, _utils.applyTheme)("Input.fontFamily")(this.props),
            "::placeholder": {
              color: (0, _utils.applyTheme)("Input.placeholderColor")(this.props)
            }
          }
        },
        onFocus: this.handleOnFocus,
        onBlur: this.handleOnBlur
      };
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(AcceptedPaymentMethods, null, this.renderIcons(ccIcons)), _react.default.createElement(Field, {
        isFocused: cardNumberIsFocused
      }, _react.default.createElement(_reactStripeElements.CardNumberElement, (0, _extends2.default)({
        onChange: this.handleOnChange,
        placeholder: cardNumberPlaceholder
      }, commonProps))), _react.default.createElement(FlexContainer, null, _react.default.createElement(Field, {
        isFocused: cardExpiryIsFocused,
        style: {
          flexGrow: 1,
          marginRight: "1rem"
        }
      }, _react.default.createElement(_reactStripeElements.CardExpiryElement, (0, _extends2.default)({
        onChange: this.handleOnChange,
        placeholder: cardExpiryPlaceholder
      }, commonProps))), _react.default.createElement(Field, {
        isFocused: cardCvcIsFocused,
        style: {
          flexGrow: 1
        }
      }, _react.default.createElement(_reactStripeElements.CardCVCElement, (0, _extends2.default)({
        onChange: this.handleOnChange,
        placeholder: cardCvcPlaceholder
      }, commonProps)))), _react.default.createElement(Field, {
        isFocused: postalCodeIsFocused
      }, _react.default.createElement(_reactStripeElements.PostalCodeElement, (0, _extends2.default)({
        onChange: this.handleOnChange,
        placeholder: postalCodePlaceholder
      }, commonProps))));
    }
  }]);
  return StripeForm;
}(_react.Component); // We should be using `withTheme` here, but it seems to cause serious errors in the
// deployed app, and does not work anyway. Need to investigate why `withComponents`
// works and does not cause errors but `withTheme` does not work. It is surely
// something related to the iframes that Stripe uses.


StripeForm.propTypes = {
  /**
   * Card's CVV text placeholder
   */
  cardCvcPlaceholder: _propTypes.default.string,

  /**
   * Card's expiry date text placeholder
   */
  cardExpiryPlaceholder: _propTypes.default.string,

  /**
   * Card's Number text placeholder
   */
  cardNumberPlaceholder: _propTypes.default.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Visa icon as SVG
     */
    iconVisa: _propTypes.default.node,

    /**
     * American Express icon as SVG
     */
    iconAmericanExpress: _propTypes.default.node,

    /**
     * Discover icon as SVG
     */
    iconDiscover: _propTypes.default.node,

    /**
     * Mastercard icon as SVG
     */
    iconMastercard: _propTypes.default.node
  }).isRequired,

  /**
   *  Used to determined if all form fields have been completed
  */
  isComplete: _propTypes.default.func.isRequired,

  /**
   * Card's billing postal code text placeholder
   */
  postalCodePlaceholder: _propTypes.default.string,

  /**
   * The stripe object which provides methods for tokenizing data, it's
   * provided by the StripeProvider component.
   * See https://stripe.com/docs/stripe-js/reference#the-stripe-object for more details.
   */
  stripe: _propTypes.default.object,

  /**
   * Used to pass a reference of the stripe object to the containing component.
   * The containing component will handle tokenizing payment data and sending data to server.
   */
  stripeRef: _propTypes.default.func.isRequired
};
StripeForm.defaultProps = {
  cardNumberPlaceholder: "Card Number",
  cardExpiryPlaceholder: "Expiry Date MM/YY",
  cardCvcPlaceholder: "CVV",
  postalCodePlaceholder: "Postal Code",
  stripeRef: function stripeRef() {
    return true;
  }
};

var _default = (0, _componentsContext.withComponents)((0, _utils.withStripeElements)((0, _reactStripeElements.injectStripe)(StripeForm)));

exports.default = _default;