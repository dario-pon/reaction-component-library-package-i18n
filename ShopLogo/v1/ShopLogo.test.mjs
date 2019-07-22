import React from "react";
import renderer from "react-test-renderer";
import ShopLogo from "./ShopLogo";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(ShopLogo, {
    shopLogoUrl: "//placehold.it/60",
    shopName: "Reaction"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});