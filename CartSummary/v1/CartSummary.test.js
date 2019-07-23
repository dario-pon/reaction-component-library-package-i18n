"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _CartSummary = _interopRequireDefault(require("./CartSummary"));

// auto-add i18n 
test("Displays a summary of the current items in the cart", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartSummary.default, {
    displayShipping: "3-5 Days",
    displaySubtotal: "$246.22",
    displayTotal: "$300.424",
    itemsQuantity: 3
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Displays a summary with FREE shipping", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartSummary.default, {
    displayShipping: "3-5 Days",
    displaySubtotal: "$246.22",
    displayTotal: "$300.424",
    isFreeShipping: true,
    itemsQuantity: 3
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Displays a summary with calculated taxes", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartSummary.default, {
    displayShipping: "3-5 Days",
    displaySubtotal: "$246.22",
    displayTotal: "$300.424",
    displayTax: "$24.88",
    itemsQuantity: 3
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Displays a summary with applied discount", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartSummary.default, {
    displayDiscount: "-$80.42",
    displayShipping: "3-5 Days",
    displaySubtotal: "$246.22",
    displayTotal: "$300.424",
    itemsQuantity: 3
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});