import React from "react";
import renderer from "react-test-renderer";
import CartSummary from "./CartSummary";
test("Displays a summary of the current items in the cart", function () {
  var component = renderer.create(React.createElement(CartSummary, {
    displayShipping: "3-5 Days",
    displaySubtotal: "$246.22",
    displayTotal: "$300.424",
    itemsQuantity: 3
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Displays a summary with FREE shipping", function () {
  var component = renderer.create(React.createElement(CartSummary, {
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
  var component = renderer.create(React.createElement(CartSummary, {
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
  var component = renderer.create(React.createElement(CartSummary, {
    displayDiscount: "-$80.42",
    displayShipping: "3-5 Days",
    displaySubtotal: "$246.22",
    displayTotal: "$300.424",
    itemsQuantity: 3
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});