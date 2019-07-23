import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import checkPropTypes from "check-prop-types";
import StockWarning from "./StockWarning";
test("Displays error warning about required props", function () {
  var errorMessage = checkPropTypes(StockWarning.propTypes, {});
  expect(errorMessage).toMatchSnapshot();
});
test("Renders stock warning when inventory is low", function () {
  var component = renderer.create(React.createElement(StockWarning, {
    inventoryQuantity: 10,
    isLowInventoryQuantity: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders nothing when stock level is normal", function () {
  var component = renderer.create(React.createElement(StockWarning, {
    inventoryQuantity: 10,
    isLowInventoryQuantity: false
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});