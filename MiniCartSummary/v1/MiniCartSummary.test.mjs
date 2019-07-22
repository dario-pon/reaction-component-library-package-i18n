import React from "react";
import renderer from "react-test-renderer";
import MiniCartSummary from "./MiniCartSummary";
test("Renders only subtotal", function () {
  var component = renderer.create(React.createElement(MiniCartSummary, {
    displaySubtotal: "$24.42"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Renders only subtotal + computed taxes", function () {
  var component = renderer.create(React.createElement(MiniCartSummary, {
    displaySubtotal: "$24.42",
    displayTax: "$4.44"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});