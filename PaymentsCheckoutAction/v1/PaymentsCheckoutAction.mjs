import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.array.find";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import styled from "styled-components";
import { addTypographyStyles, CustomPropTypes, formatMoney } from "../../utils";
var Title = styled.h3.withConfig({
  displayName: "PaymentsCheckoutAction__Title",
  componentId: "sc-6nornv-0"
})(["", ""], addTypographyStyles("PaymentsCheckoutActionTitle", "subheadingTextBold"));
var ActionCompleteDiv = styled.div.withConfig({
  displayName: "PaymentsCheckoutAction__ActionCompleteDiv",
  componentId: "sc-6nornv-1"
})(["", ";"], addTypographyStyles("PaymentsCheckoutActionComplete", "bodyText"));

var PaymentsCheckoutAction =
/*#__PURE__*/
function (_Component) {
  _inherits(PaymentsCheckoutAction, _Component);

  _createClass(PaymentsCheckoutAction, null, [{
    key: "renderComplete",
    value: function renderComplete(_ref) {
      var payments = _ref.payments;
      if (!Array.isArray(payments) || payments.length === 0) return null;
      var paymentLines = payments.map(function (_ref2, index) {
        var displayName = _ref2.displayName,
            payment = _ref2.payment;
        return React.createElement("div", {
          key: "".concat(index)
        }, displayName, payment.amount ? " (".concat(formatMoney(payment.amount), ")") : null);
      });
      return React.createElement(ActionCompleteDiv, null, paymentLines);
    }
  }]);

  function PaymentsCheckoutAction(props) {
    var _this;

    _classCallCheck(this, PaymentsCheckoutAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaymentsCheckoutAction).call(this, props));
    _this._inputComponent = null;
    _this.submit =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
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

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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
      var _paymentMethods2 = _slicedToArray(_paymentMethods, 1),
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

  _createClass(PaymentsCheckoutAction, [{
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
      return React.createElement(Fragment, null, React.createElement(Title, null, "Billing Address"), React.createElement(AddressChoice, {
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
        return "".concat(displayName, " - ").concat(formatMoney(payment.amount));
      }).join(", ");
      return React.createElement(InlineAlert, {
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
      return React.createElement(SelectableList, {
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
      return React.createElement("div", {
        className: className
      }, React.createElement(Title, null, stepNumber, ". ", label), alert ? React.createElement(InlineAlert, alert) : "", this.renderPartialPayments(), this.renderPaymentMethodList(), !!selectedPaymentMethod && !!selectedPaymentMethod.InputComponent && React.createElement(selectedPaymentMethod.InputComponent, {
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
}(Component);

PaymentsCheckoutAction.propTypes = {
  /**
   * Provide the shipping address and any other previously saved addresses.
   * The user will be able to choose from these rather than entering
   * the billing address if they want.
   */
  addresses: CustomPropTypes.addressBook,

  /**
   * Alert object provides alert into to InlineAlert.
   */
  alert: CustomPropTypes.alert,

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
     * Pass either the Reaction AddressChoice component or your own component that
     * accepts compatible props.
     */
    AddressChoice: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction InlineAlert component or your own component that
     * accepts compatible props.
     */
    InlineAlert: CustomPropTypes.component.isRequired,

    /**
     * A reaction SelectableList component or compatible component.
     */
    SelectableList: CustomPropTypes.component.isRequired
  }),

  /**
   * Pass true while the input data is in the process of being saved.
   * This is passed down as the `isSaving` prop of each payment method's
   * InputComponent, and typically will result in the form fields being disabled.
   */
  isSaving: PropTypes.bool,

  /**
   * Label of workflow step
   */
  label: PropTypes.string.isRequired,

  /**
   * When this action's input data switches between being
   * ready for saving and not ready for saving, this will
   * be called with `true` (ready) or `false`
   */
  onReadyForSaveChange: PropTypes.func,

  /**
   * When called, the parent should clear all previously submitted
   * payments from state. Currently this is called only on mount.
   */
  onReset: PropTypes.func,

  /**
   * Called with an object value when this component's `submit`
   * method is called. The object has a `payment` property, where
   * `payment` is the Payment that should be passed to the `placeOrder`
   * mutation, and a `displayName` property.
   */
  onSubmit: PropTypes.func,

  /**
   * List of all payment methods available for this shop / checkout
   */
  paymentMethods: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    InputComponent: CustomPropTypes.component,
    name: PropTypes.string.isRequired,
    shouldCollectBillingAddress: PropTypes.bool.isRequired
  })).isRequired,

  /**
   * Pass in payment objects previously passed to onSubmit
   */
  payments: PropTypes.arrayOf(PropTypes.object),

  /**
   * If provided, this component will ensure that no new
   * payment is added with an `amount` greater than this.
   */
  remainingAmountDue: PropTypes.number,

  /**
   * Checkout process step number
   */
  stepNumber: PropTypes.number.isRequired
};
PaymentsCheckoutAction.defaultProps = {
  onReadyForSaveChange: function onReadyForSaveChange() {},
  onReset: function onReset() {},
  onSubmit: function onSubmit() {}
};
export default withComponents(PaymentsCheckoutAction);