"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.promise");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _reactStripeElements = require("react-stripe-elements");

var _componentsContext = require("@reactioncommerce/components-context");

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _realComponents = _interopRequireDefault(require("../../../tests/realComponents"));

var _StripePaymentInput = _interopRequireDefault(require("./StripePaymentInput"));

// Mock the Stripe instance
var elementMock = {
  mount: jest.fn(),
  destroy: jest.fn(),
  on: jest.fn(),
  update: jest.fn()
};
var elementsMock = {
  create: jest.fn().mockReturnValue(elementMock)
};
var stripeMock = {
  elements: jest.fn().mockReturnValue(elementsMock),
  createToken: jest.fn(),
  createSource: jest.fn()
};
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_StripePaymentInput.default, {
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onReadyForSaveChange on mount and change", function () {
  var onReadyForSaveChange = jest.fn();
  var formEl;
  (0, _enzyme.mount)(_react.default.createElement(_reactStripeElements.StripeProvider, {
    stripe: stripeMock
  }, _react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_StripePaymentInput.default, {
    ref: function ref(_ref) {
      formEl = _ref;
    },
    onReadyForSaveChange: onReadyForSaveChange
  }))));
  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(false);
  onReadyForSaveChange.mockClear();
  formEl.handleChangeReadyState(true);
  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(true);
});
test("calls onSubmit when submit method is called", function (done) {
  var onSubmit = jest.fn();
  stripeMock.createToken.mockReturnValueOnce(Promise.resolve({
    token: {
      card: {
        brand: "Visa",
        last4: "1234"
      },
      id: "abc123"
    }
  }));
  var formEl;
  (0, _enzyme.mount)(_react.default.createElement(_reactStripeElements.StripeProvider, {
    stripe: stripeMock
  }, _react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_StripePaymentInput.default, {
    ref: function ref(_ref2) {
      formEl = _ref2;
    },
    onSubmit: onSubmit
  }))));
  expect(onSubmit).not.toHaveBeenCalled();
  formEl.submit();
  setTimeout(function () {
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith({
      data: {
        stripeTokenId: "abc123"
      },
      displayName: "Visa ending in 1234"
    });
    done();
  }, 0);
});