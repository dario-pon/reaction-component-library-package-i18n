"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _checkPropTypes = _interopRequireDefault(require("check-prop-types"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _InventoryStatus = _interopRequireDefault(require("./InventoryStatus"));

test("Displays error warning about required props", function () {
  var errorMessage = (0, _checkPropTypes.default)(_InventoryStatus.default.propTypes, {});
  expect(errorMessage).toMatchSnapshot();
});
test("Renders backorder notification when inventory is sold out and backorder is allowed", function () {
  var productData = {
    isBackorder: true,
    isLowQuantity: true,
    isSoldOut: true,
    inventoryAvailableToSell: 0
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_InventoryStatus.default, {
    components: _mockComponents.default,
    product: productData
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders low inventory notification when inventory is lower than threshold", function () {
  var productData = {
    isBackorder: false,
    isLowQuantity: true,
    isSoldOut: false,
    inventoryAvailableToSell: 6
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_InventoryStatus.default, {
    components: _mockComponents.default,
    product: productData
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders nothing when inventory is ready to be sold", function () {
  var productData = {
    isBackorder: false,
    isLowQuantity: false,
    isSoldOut: false,
    inventoryAvailableToSell: 4
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_InventoryStatus.default, {
    components: _mockComponents.default,
    product: productData
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders sold out notification when inventory is sold out and backorder is not allowed", function () {
  var productData = {
    isBackorder: false,
    isLowQuantity: true,
    isSoldOut: true,
    inventoryAvailableToSell: 0
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_InventoryStatus.default, {
    components: _mockComponents.default,
    product: productData
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});