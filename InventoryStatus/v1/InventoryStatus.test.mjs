import React from "react";
import renderer from "react-test-renderer";
import checkPropTypes from "check-prop-types";
import mockComponents from "../../../tests/mockComponents";
import InventoryStatus from "./InventoryStatus";
test("Displays error warning about required props", function () {
  var errorMessage = checkPropTypes(InventoryStatus.propTypes, {});
  expect(errorMessage).toMatchSnapshot();
});
test("Renders backorder notification when inventory is sold out and backorder is allowed", function () {
  var productData = {
    isBackorder: true,
    isLowQuantity: true,
    isSoldOut: true,
    inventoryAvailableToSell: 0
  };
  var component = renderer.create(React.createElement(InventoryStatus, {
    components: mockComponents,
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
  var component = renderer.create(React.createElement(InventoryStatus, {
    components: mockComponents,
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
  var component = renderer.create(React.createElement(InventoryStatus, {
    components: mockComponents,
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
  var component = renderer.create(React.createElement(InventoryStatus, {
    components: mockComponents,
    product: productData
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});