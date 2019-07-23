"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _checkPropTypes = _interopRequireDefault(require("check-prop-types"));

var _Price = _interopRequireDefault(require("./Price"));

// auto-add i18n 
test("Display error warning about required prop", function () {
  var errorMessage = (0, _checkPropTypes.default)(_Price.default.propTypes, {});
  expect(errorMessage).toMatchSnapshot();
});
test("Renders price without a compare at price", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Price.default, {
    displayPrice: "$300.00"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders price with a compare at price", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Price.default, {
    displayPrice: "$300.00",
    displayCompareAtPrice: "$400.00"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders price without a compare at price, due to the fact that the prices are equal.", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Price.default, {
    displayPrice: "$300.00",
    displayCompareAtPrice: "$300.00"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});