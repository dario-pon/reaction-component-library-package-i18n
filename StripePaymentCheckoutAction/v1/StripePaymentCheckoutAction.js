"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.find");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentsContext = require("@reactioncommerce/components-context");

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

// auto-add i18n 
var Title = _styledComponents.default.h3.withConfig({
  displayName: "StripePaymentCheckoutAction__Title",
  componentId: "sc-4fjs9q-0"
})(["", ""], (0, _utils.addTypographyStyles)("StripePaymentCheckoutAction", "subheadingTextBold"));

var SecureCaption = _styledComponents.default.div.withConfig({
  displayName: "StripePaymentCheckoutAction__SecureCaption",
  componentId: "sc-4fjs9q-1"
})(["", ""], (0, _utils.addTypographyStyles)("StripePaymentCheckoutAction", "captionText"));

var IconLockSpan = _styledComponents.default.span.withConfig({
  displayName: "StripePaymentCheckoutAction__IconLockSpan",
  componentId: "sc-4fjs9q-2"
})(["display:inline-block;height:20px;width:20px;"]);

var Span = _styledComponents.default.span.withConfig({
  displayName: "StripePaymentCheckoutAction__Span",
  componentId: "sc-4fjs9q-3"
})(["vertical-align:super;"]);

var billingAddressOptions = [{
  id: "1",
  label: "Same as shipping address",
  value: "same_as_shipping"
}, {
  id: "2",
  label: "Use a different billing address",
  value: "use_different_billing_address"
}];

var StripePaymentCheckoutAction =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(StripePaymentCheckoutAction, _Component);

  function StripePaymentCheckoutAction() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, StripePaymentCheckoutAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(StripePaymentCheckoutAction)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      activeCountry: "US",
      status: "active",
      billingAddress: "same_as_shipping",
      isStripeFormComplete: false,
      countries: [{
        value: "US",
        label: "United States"
      }, {
        value: "DE",
        label: "Germany"
      }, {
        value: "NU",
        label: "Nigeria"
      }],
      regions: [{
        value: "LA",
        label: "Louisiana"
      }, {
        value: "CA",
        label: "California"
      }]
    };
    _this._addressForm = null;
    _this.submit =
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var billingAddress;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              billingAddress = _this.state.billingAddress; // If user chooses to use billing address to be the same as shipping, then
              // don't submit the billing address form

              if (!(billingAddress === "same_as_shipping")) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", _this.handleSubmit());

            case 3:
              _this._addressForm.submit();

              return _context.abrupt("return", null);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value) {
        var onSubmit, _ref3, token;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onSubmit = _this.props.onSubmit;
                _context2.next = 3;
                return _this._stripe.createToken();

              case 3:
                _ref3 = _context2.sent;
                token = _ref3.token;
                _context2.next = 7;
                return onSubmit({
                  billingAddress: value,
                  token: token
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleChange = function (values) {
      var onReadyForSaveChange = _this.props.onReadyForSaveChange;
      var isFilled = Object.keys(values).every(function (key) {
        return key === "address2" ? true : values[key] !== null;
      });
      onReadyForSaveChange(isFilled);
    };

    _this.handleUseNewBillingAddress = function (billingAddress) {
      var isStripeFormComplete = _this.state.isStripeFormComplete;

      if (billingAddress === "use_different_billing_address") {
        _this.setState({
          billingAddress: billingAddress
        });
      } else if (billingAddress === "same_as_shipping") {
        // If a user decides to use the same address
        _this.setState({
          billingAddress: billingAddress
        }); // Confirm if Stripe Form is filled out


        if (isStripeFormComplete) {
          // Trigger onReadyForSaveChange()
          _this.handleStripeFormIsComplete(true);
        }
      }
    };

    _this.handleStripeFormIsComplete = function (isComplete) {
      var onReadyForSaveChange = _this.props.onReadyForSaveChange;
      onReadyForSaveChange(isComplete);

      _this.setState({
        isStripeFormComplete: true
      });
    };

    _this.renderBillingAddressForm = function () {
      var AddressForm = _this.props.components.AddressForm;
      var billingAddress = _this.state.billingAddress; // Only render billing address when user chooses to use
      // a different billing address

      if (billingAddress === "same_as_shipping") {
        return null;
      }

      return _react.default.createElement(_Fade.default, {
        in: true
      }, _react.default.createElement(AddressForm, {
        ref: function ref(formEl) {
          _this._addressForm = formEl;
        },
        countries: _this.state.countries,
        regions: _this.state.regions[_this.state.activeCountry],
        onCountryChange: function onCountryChange(value) {
          return _this.handleCountryChange(value);
        },
        onSubmit: _this.handleSubmit,
        onChange: _this.handleChange
      }));
    };

    return _this;
  }

  (0, _createClass2.default)(StripePaymentCheckoutAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onReadyForSaveChange = this.props.onReadyForSaveChange;
      onReadyForSaveChange(false);
    }
  }, {
    key: "handleCountryChange",
    value: function handleCountryChange(country) {
      var activeCountry = this.state.countries.find(function (_country) {
        return _country.value === country;
      });

      if (activeCountry) {
        this.setState({
          activeCountry: activeCountry.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          alert = _this$props.alert,
          _this$props$component = _this$props.components,
          iconLock = _this$props$component.iconLock,
          InlineAlert = _this$props$component.InlineAlert,
          SelectableList = _this$props$component.SelectableList,
          StripeForm = _this$props$component.StripeForm,
          label = _this$props.label,
          stepNumber = _this$props.stepNumber;
      var billingAddress = this.state.billingAddress;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Title, null, stepNumber, ". ", label), alert ? _react.default.createElement(InlineAlert, alert) : "", _react.default.createElement(StripeForm, {
        isComplete: this.handleStripeFormIsComplete,
        stripeRef: function stripeRef(stripe) {
          _this2._stripe = stripe;
        }
      }), _react.default.createElement(SecureCaption, null, _react.default.createElement(IconLockSpan, null, iconLock), " ", _react.default.createElement(Span, null, "Your Information is private and secure.")), _react.default.createElement(Title, null, "Billing Address"), _react.default.createElement(SelectableList, {
        onChanging: this.handleUseNewBillingAddress,
        options: billingAddressOptions,
        name: "billingAddressForm",
        value: billingAddress
      }), this.renderBillingAddressForm());
    }
  }], [{
    key: "renderComplete",
    value: function renderComplete(_ref4) {
      var displayName = _ref4.payment.data.displayName;
      return _react.default.createElement("div", null, displayName);
    }
  }]);
  return StripePaymentCheckoutAction;
}(_react.Component);

StripePaymentCheckoutAction.propTypes = {
  /**
   * Alert object provides alert into to InlineAlert.
   */
  alert: _utils.CustomPropTypes.alert,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction AddressForm component or your own component that
     * accepts compatible props.
     */
    AddressForm: _utils.CustomPropTypes.component.isRequired,

    /**
     * Secured lock icon
     */
    iconLock: _propTypes.default.node,

    /**
     * A reaction SelectableList component or compatible component.
     */
    SelectableList: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction StripeForm component or your own component that
     * accepts compatible props.
     */
    StripeForm: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction InlineAlert component or your own component that
     * accepts compatible props.
     */
    InlineAlert: _utils.CustomPropTypes.component.isRequired
  }),

  /**
   * Is the payment method being saved?
   */
  isSaving: _propTypes.default.bool,

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
   * Checkout process step number
   */
  stepNumber: _propTypes.default.number.isRequired
};
StripePaymentCheckoutAction.defaultProps = {
  onReadyForSaveChange: function onReadyForSaveChange() {}
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(StripePaymentCheckoutAction)); // auto-add i18n


exports.default = _default;