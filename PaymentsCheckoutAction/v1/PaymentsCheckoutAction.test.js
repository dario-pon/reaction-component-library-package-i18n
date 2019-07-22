"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/es6.array.find");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _componentsContext = require("@reactioncommerce/components-context");

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _realComponents = _interopRequireDefault(require("../../../tests/realComponents"));

var _PaymentsCheckoutAction = _interopRequireDefault(require("./PaymentsCheckoutAction"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var paymentMethods = [{
  displayName: "Credit Card",
  InputComponent: _mockComponents.default.StripePaymentInput,
  name: "stripe_card",
  shouldCollectBillingAddress: true
}, {
  displayName: "IOU",
  InputComponent: _mockComponents.default.ExampleIOUPaymentForm,
  name: "iou_example",
  shouldCollectBillingAddress: true
}];
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_PaymentsCheckoutAction.default, {
    components: _mockComponents.default,
    label: t('Payment'),
    paymentMethods: paymentMethods,
    stepNumber: 3
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("snapshot with a partial payment", function () {
  var payments = [{
    displayName: "IOU from Fats Domino",
    payment: {
      amount: 15,
      data: {
        fullName: "Fats Domino"
      },
      method: "iou_example"
    }
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_PaymentsCheckoutAction.default, {
    components: _mockComponents.default,
    label: t('Payment'),
    paymentMethods: paymentMethods,
    payments: payments,
    stepNumber: 3
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("snapshot with an alert", function () {
  var alert = {
    alertType: "error",
    title: "The payment information you entered may be incorrect.",
    message: "Please review our error."
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_PaymentsCheckoutAction.default, {
    alert: alert,
    components: _mockComponents.default,
    label: t('Payment'),
    paymentMethods: paymentMethods,
    stepNumber: 3
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders a selectable list and the first method's input component", function () {
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_PaymentsCheckoutAction.default, {
    label: t('Payment'),
    paymentMethods: paymentMethods,
    stepNumber: 3
  })));
  expect(wrapper.find('input[value="stripe_card"]').length).toBe(1);
  expect(wrapper.find(_mockComponents.default.StripePaymentInput).length).toBe(1);
});
test("does not render the SelectableList if there's only one method", function () {
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_PaymentsCheckoutAction.default, {
    label: t('Payment'),
    paymentMethods: [paymentMethods[0]],
    stepNumber: 3
  })));
  expect(wrapper.find('input[value="stripe_card"]').length).toBe(0);
});
test("does not render the AddressForm if the method doesn't need it", function () {
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_PaymentsCheckoutAction.default, {
    label: t('Payment'),
    paymentMethods: [_objectSpread({}, paymentMethods[0], {
      shouldCollectBillingAddress: false
    })],
    stepNumber: 3
  })));
  expect(wrapper.find('input[name="address1"]').length).toBe(0);
});