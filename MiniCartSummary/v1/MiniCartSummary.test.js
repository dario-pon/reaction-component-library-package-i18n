"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _MiniCartSummary = _interopRequireDefault(require("./MiniCartSummary"));

test("Renders only subtotal", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_MiniCartSummary.default, {
    displaySubtotal: "$24.42"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders only subtotal + computed taxes", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_MiniCartSummary.default, {
    displaySubtotal: "$24.42",
    displayTax: "$4.44"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});