"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _checkPropTypes = _interopRequireDefault(require("check-prop-types"));

var _StockWarning = _interopRequireDefault(require("./StockWarning"));

// auto-add i18n 
test("Displays error warning about required props", function () {
  var errorMessage = (0, _checkPropTypes.default)(_StockWarning.default.propTypes, {});
  expect(errorMessage).toMatchSnapshot();
});
test("Renders stock warning when inventory is low", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_StockWarning.default, {
    inventoryQuantity: 10,
    isLowInventoryQuantity: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders nothing when stock level is normal", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_StockWarning.default, {
    inventoryQuantity: 10,
    isLowInventoryQuantity: false
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});