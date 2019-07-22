import React from "react";
import renderer from "react-test-renderer";
import CheckoutTopHat from "./CheckoutTopHat";
test("render Top Hat with message", function () {
  var component = renderer.create(React.createElement(CheckoutTopHat, {
    checkoutMessage: "Free Shipping + Free Returns"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("render nothing when no message is present", function () {
  var component = renderer.create(React.createElement(CheckoutTopHat, null));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});