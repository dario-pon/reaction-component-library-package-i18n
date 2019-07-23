import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import checkPropTypes from "check-prop-types";
import Price from "./Price";
test("Display error warning about required prop", function () {
  var errorMessage = checkPropTypes(Price.propTypes, {});
  expect(errorMessage).toMatchSnapshot();
});
test("Renders price without a compare at price", function () {
  var component = renderer.create(React.createElement(Price, {
    displayPrice: "$300.00"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders price with a compare at price", function () {
  var component = renderer.create(React.createElement(Price, {
    displayPrice: "$300.00",
    displayCompareAtPrice: "$400.00"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders price without a compare at price, due to the fact that the prices are equal.", function () {
  var component = renderer.create(React.createElement(Price, {
    displayPrice: "$300.00",
    displayCompareAtPrice: "$300.00"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});