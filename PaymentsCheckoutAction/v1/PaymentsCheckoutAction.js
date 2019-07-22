"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.find");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentsContext = require("@reactioncommerce/components-context");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var Title = _styledComponents.default.h3.withConfig({
  displayName: "PaymentsCheckoutAction__Title",
  componentId: "sc-6nornv-0"
})(["", ""], (0, _utils.addTypographyStyles)("PaymentsCheckoutActionTitle", "subheadingTextBold"));

var ActionCompleteDiv = _styledComponents.default.div.withConfig({
  displayName: "PaymentsCheckoutAction__ActionCompleteDiv",
  componentId: "sc-6nornv-1"
})(["", ";"], (0, _utils.addTypographyStyles)("PaymentsCheckoutActionComplete", "bodyText"));

var PaymentsCheckoutAction =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PaymentsCheckoutAction, _Component);
  (0, _createClass2.default)(PaymentsCheckoutAction, null, [{
    key: "renderComplete",
    value: function renderComplete(_ref) {
      var payments = _ref.payments;
      if (!Array.isArray(payments) || payments.length === 0) return null;
      var paymentLines = payments.map(function (_ref2, index) {
        var displayName = _ref2.displayName,
            payment = _ref2.payment;
        return _react.default.createElement("div", {
          key: "".concat(index)
        }, displayName, payment.amount ? " (".concat((0, _utils.formatMoney)(payment.amount), ")") : null);
      });
      return _react.default.createElement(ActionCompleteDiv, null, paymentLines);
    }
  }]);

  function PaymentsCheckoutAction(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PaymentsCheckoutAction);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PaymentsCheckoutAction).call(this, props));
    _this._inputComponent = null;
    _this.submit =
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this._inputComponent) {
                _this._inputComponent.submit();
              } else {
                _this.handleInputComponentSubmit();
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.handleInputComponentSubmit =
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var _ref5,
          _ref5$amount,
          amount,
          data,
          displayName,
          _this$props,
          onSubmit,
          paymentMethods,
          remainingAmountDue,
          _this$state,
          billingAddress,
          selectedPaymentMethodName,
          selectedPaymentMethod,
          cappedPaymentAmount,
          _args2 = arguments;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref5 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref5$amount = _ref5.amount, amount = _ref5$amount === void 0 ? null : _ref5$amount, data = _ref5.data, displayName = _ref5.displayName;
              _this$props = _this.props, onSubmit = _this$props.onSubmit, paymentMethods = _this$props.paymentMethods, remainingAmountDue = _this$props.remainingAmountDue;
              _this$state = _this.state, billingAddress = _this$state.billingAddress, selectedPaymentMethodName = _this$state.selectedPaymentMethodName;
              selectedPaymentMethod = paymentMethods.find(function (method) {
                return method.name === selectedPaymentMethodName;
              });
              cappedPaymentAmount = amount;

              if (cappedPaymentAmount && typeof remainingAmountDue === "number") {
                cappedPaymentAmount = Math.min(cappedPaymentAmount, remainingAmountDue);
              }

              _context2.next = 8;
              return onSubmit({
                displayName: displayName || selectedPaymentMethod.displayName,
                payment: {
                  amount: cappedPaymentAmount,
                  billingAddress: billingAddress,
                  data: data,
                  method: selectedPaymentMethodName
                }
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    _this.handleAddressChange = function () {
      var billingAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.setState({
        billingAddress: billingAddress
      }, function () {
        _this.checkIfReadyForSaveChange();
      });
    };

    _this.handleInputReadyForSaveChange = function (inputIsComplete) {
      _this.setState({
        inputIsComplete: inputIsComplete
      }, function () {
        _this.checkIfReadyForSaveChange();
      });
    };

    _this.handleSelectedPaymentMethodChange = function (selectedPaymentMethodName) {
      _this.setState({
        selectedPaymentMethodName: selectedPaymentMethodName
      }, function () {
        _this.checkIfReadyForSaveChange();
      });
    };

    var addresses = props.addresses,
        _paymentMethods = props.paymentMethods;
    var _selectedPaymentMethodName = null;

    if (Array.isArray(_paymentMethods)) {
      var _paymentMethods2 = (0, _slicedToArray2.default)(_paymentMethods, 1),
          method = _paymentMethods2[0];

      if (method) {
        _selectedPaymentMethodName = method.name;
      }
    }

    _this.state = {
      billingAddress: addresses && addresses[0] ? addresses[0] : null,
      inputIsComplete: false,
      selectedPaymentMethodName: _selectedPaymentMethodName
    };
    return _this;
  }

  (0, _createClass2.default)(PaymentsCheckoutAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkIfReadyForSaveChange();
      this.props.onReset();
    }
  }, {
    key: "checkIfReadyForSaveChange",
    value: function checkIfReadyForSaveChange() {
      var _this$props2 = this.props,
          onReadyForSaveChange = _this$props2.onReadyForSaveChange,
          paymentMethods = _this$props2.paymentMethods;
      var _this$state2 = this.state,
          billingAddress = _this$state2.billingAddress,
          inputIsComplete = _this$state2.inputIsComplete,
          selectedPaymentMethodName = _this$state2.selectedPaymentMethodName;
      var isFilled = billingAddress && Object.keys(billingAddress).every(function (key) {
        return ["address2", "company"].indexOf(key) > -1 ? true : billingAddress[key] !== null;
      });
      var selectedPaymentMethod = paymentMethods.find(function (method) {
        return method.name === selectedPaymentMethodName;
      });
      var isInputReady = !selectedPaymentMethod || !selectedPaymentMethod.InputComponent || inputIsComplete;
      onReadyForSaveChange(!!(isInputReady && isFilled));
    }
  }, {
    key: "renderBillingAddressForm",
    value: function renderBillingAddressForm() {
      var _this$props3 = this.props,
          addresses = _this$props3.addresses,
          AddressChoice = _this$props3.components.AddressChoice,
          isSaving = _this$props3.isSaving;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Title, null, "Billing Address"), _react.default.createElement(AddressChoice, {
        addresses: addresses,
        isReadOnly: isSaving,
        onChange: this.handleAddressChange
      }));
    }
  }, {
    key: "renderPartialPayments",
    value: function renderPartialPayments() {
      var _this$props4 = this.props,
          InlineAlert = _this$props4.components.InlineAlert,
          payments = _this$props4.payments;
      if (!Array.isArray(payments) || payments.length === 0) return null;
      var message = payments.map(function (_ref6) {
        var displayName = _ref6.displayName,
            payment = _ref6.payment;
        return "".concat(displayName, " - ").concat((0, _utils.formatMoney)(payment.amount));
      }).join(", ");
      return _react.default.createElement(InlineAlert, {
        alertType: "success",
        message: message,
        title: "Partial Payments"
      });
    }
  }, {
    key: "renderPaymentMethodList",
    value: function renderPaymentMethodList() {
      var _this$props5 = this.props,
          SelectableList = _this$props5.components.SelectableList,
          isSaving = _this$props5.isSaving,
          paymentMethods = _this$props5.paymentMethods;
      if (paymentMethods.length < 2) return null;
      var selectedPaymentMethodName = this.state.selectedPaymentMethodName;
      var options = paymentMethods.map(function (method) {
        return {
          id: method.name,
          label: method.displayName,
          value: method.name
        };
      });
      return _react.default.createElement(SelectableList, {
        name: "paymentMethodList",
        isReadOnly: isSaving,
        onChange: this.handleSelectedPaymentMethodChange,
        options: options,
        value: selectedPaymentMethodName
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props6 = this.props,
          alert = _this$props6.alert,
          className = _this$props6.className,
          InlineAlert = _this$props6.components.InlineAlert,
          isSaving = _this$props6.isSaving,
          label = _this$props6.label,
          paymentMethods = _this$props6.paymentMethods,
          stepNumber = _this$props6.stepNumber;
      var selectedPaymentMethodName = this.state.selectedPaymentMethodName;
      var selectedPaymentMethod = paymentMethods.find(function (method) {
        return method.name === selectedPaymentMethodName;
      });
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(Title, null, stepNumber, ". ", label), alert ? _react.default.createElement(InlineAlert, alert) : "", this.renderPartialPayments(), this.renderPaymentMethodList(), !!selectedPaymentMethod && !!selectedPaymentMethod.InputComponent && _react.default.createElement(selectedPaymentMethod.InputComponent, {
        isSaving: isSaving,
        onReadyForSaveChange: this.handleInputReadyForSaveChange,
        onSubmit: this.handleInputComponentSubmit,
        ref: function ref(instance) {
          _this2._inputComponent = instance;
        }
      }), !!selectedPaymentMethod && !!selectedPaymentMethod.shouldCollectBillingAddress && this.renderBillingAddressForm());
    }
  }]);
  return PaymentsCheckoutAction;
}(_react.Component);

PaymentsCheckoutAction.propTypes = {
  /**
   * Provide the shipping address and any other previously saved addresses.
   * The user will be able to choose from these rather than entering
   * the billing address if they want.
   */
  addresses: _utils.CustomPropTypes.addressBook,

  /**
   * Alert object provides alert into to InlineAlert.
   */
  alert: _utils.CustomPropTypes.alert,

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
     * Pass either the Reaction AddressChoice component or your own component that
     * accepts compatible props.
     */
    AddressChoice: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction InlineAlert component or your own component that
     * accepts compatible props.
     */
    InlineAlert: _utils.CustomPropTypes.component.isRequired,

    /**
     * A reaction SelectableList component or compatible component.
     */
    SelectableList: _utils.CustomPropTypes.component.isRequired
  }),

  /**
   * Pass true while the input data is in the process of being saved.
   * This is passed down as the `isSaving` prop of each payment method's
   * InputComponent, and typically will result in the form fields being disabled.
   */
  isSaving: _propTypes.default.bool,

  /**
   * Label of workflow step
   */
  label: _propTypes.default.string.isRequired,

  /**
   * When this action's input data switches between being
   * ready for saving and not ready for saving, this will
   * be called with `true` (ready) or `false`
   */
  onReadyForSaveChange: _propTypes.default.func,

  /**
   * When called, the parent should clear all previously submitted
   * payments from state. Currently this is called only on mount.
   */
  onReset: _propTypes.default.func,

  /**
   * Called with an object value when this component's `submit`
   * method is called. The object has a `payment` property, where
   * `payment` is the Payment that should be passed to the `placeOrder`
   * mutation, and a `displayName` property.
   */
  onSubmit: _propTypes.default.func,

  /**
   * List of all payment methods available for this shop / checkout
   */
  paymentMethods: _propTypes.default.arrayOf(_propTypes.default.shape({
    displayName: _propTypes.default.string.isRequired,
    InputComponent: _utils.CustomPropTypes.component,
    name: _propTypes.default.string.isRequired,
    shouldCollectBillingAddress: _propTypes.default.bool.isRequired
  })).isRequired,

  /**
   * Pass in payment objects previously passed to onSubmit
   */
  payments: _propTypes.default.arrayOf(_propTypes.default.object),

  /**
   * If provided, this component will ensure that no new
   * payment is added with an `amount` greater than this.
   */
  remainingAmountDue: _propTypes.default.number,

  /**
   * Checkout process step number
   */
  stepNumber: _propTypes.default.number.isRequired
};
PaymentsCheckoutAction.defaultProps = {
  onReadyForSaveChange: function onReadyForSaveChange() {},
  onReset: function onReset() {},
  onSubmit: function onSubmit() {}
};

var _default = (0, _componentsContext.withComponents)(PaymentsCheckoutAction);

exports.default = _default;