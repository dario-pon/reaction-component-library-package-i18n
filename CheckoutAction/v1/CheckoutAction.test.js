"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _v = _interopRequireDefault(require("../../CheckoutActionComplete/v1"));

var _v2 = _interopRequireDefault(require("../../CheckoutActionIncomplete/v1"));

var _CheckoutAction = _interopRequireDefault(require("./CheckoutAction"));

var MockActiveCheckoutAction = function MockActiveCheckoutAction(_ref) {
  var activeLabel = _ref.activeLabel;
  return _react.default.createElement("span", null, activeLabel);
}; // eslint-disable-line react/prop-types


test("CheckoutAction with `active` status & label", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = _react.default.createElement("div", null, "Ms. Jane Doe", _react.default.createElement("br", null), "123 Main Street", _react.default.createElement("br", null), "Anytown, USA 01776");

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutAction.default, {
    activeLabel: "Mock active label",
    activeStepElement: _react.default.createElement(MockActiveCheckoutAction, null),
    completeStepElement: _react.default.createElement(_v.default, {
      components: _mockComponents.default,
      content: Address,
      onClickChangeButton: onClick
    }),
    incompleteStepElement: _react.default.createElement(_v2.default, null),
    cart: cart,
    isLoading: isLoading,
    status: "active",
    stepNumber: 2
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CheckoutAction with `complete` status & label", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = _react.default.createElement("div", null, "Ms. Jane Doe", _react.default.createElement("br", null), "123 Main Street", _react.default.createElement("br", null), "Anytown, USA 01776");

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutAction.default, {
    activeStepElement: "Placeholder: active step isn't yet available",
    completeStepElement: _react.default.createElement(_v.default, {
      components: _mockComponents.default,
      content: Address,
      onClickChangeButton: onClick
    }),
    incompleteStepElement: _react.default.createElement(_v2.default, null),
    cart: cart,
    completeLabel: "Mock complete label",
    isLoading: isLoading,
    status: "complete",
    stepNumber: 2
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CheckoutAction with `incomplete` status & label", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = _react.default.createElement("div", null, "Ms. Jane Doe", _react.default.createElement("br", null), "123 Main Street", _react.default.createElement("br", null), "Anytown, USA 01776");

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutAction.default, {
    activeStepElement: "Placeholder: active step isn't yet available",
    completeStepElement: _react.default.createElement(_v.default, {
      components: _mockComponents.default,
      content: Address,
      onClickChangeButton: onClick
    }),
    incompleteLabel: "Mock incomplete label",
    incompleteStepElement: _react.default.createElement(_v2.default, null),
    cart: cart,
    isLoading: isLoading,
    status: "incomplete",
    stepNumber: 2
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CheckoutAction with `complete` status and label override via props", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = _react.default.createElement("div", null, "Ms. Jane Doe", _react.default.createElement("br", null), "123 Main Street", _react.default.createElement("br", null), "Anytown, USA 01776");

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutAction.default, {
    activeStepElement: "Placeholder: active step isn't yet available",
    completeStepElement: _react.default.createElement(_v.default, {
      components: _mockComponents.default,
      content: Address,
      label: t('Label override'),
      onClickChangeButton: onClick
    }),
    incompleteStepElement: _react.default.createElement(_v2.default, null),
    cart: cart,
    isLoading: isLoading,
    status: "complete",
    stepNumber: 2
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CheckoutAction with `complete` status and stepNumber override via props", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = _react.default.createElement("div", null, "Ms. Jane Doe", _react.default.createElement("br", null), "123 Main Street", _react.default.createElement("br", null), "Anytown, USA 01776");

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutAction.default, {
    activeStepElement: "Placeholder: active step isn't yet available",
    completeStepElement: _react.default.createElement(_v.default, {
      components: _mockComponents.default,
      content: Address,
      onClickChangeButton: onClick,
      stepNumber: 500
    }),
    incompleteStepElement: _react.default.createElement(_v2.default, null),
    cart: cart,
    isLoading: isLoading,
    status: "complete",
    stepNumber: 2
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});