"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _CheckoutTopHat = _interopRequireDefault(require("./CheckoutTopHat"));

test("render Top Hat with message", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutTopHat.default, {
    checkoutMessage: "Free Shipping + Free Returns"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("render nothing when no message is present", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutTopHat.default, null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});