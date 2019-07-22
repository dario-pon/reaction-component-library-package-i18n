import React from "react";
import renderer from "react-test-renderer";
import CartItemDetail from "./CartItemDetail";
test("basic snapshot without props", function () {
  var component = renderer.create(React.createElement(CartItemDetail, null));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with props", function () {
  var attributes = [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }];
  var component = renderer.create(React.createElement(CartItemDetail, {
    title: "Mock Product Title",
    productSlug: "product-slug",
    attributes: attributes
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with vendor attribute", function () {
  var attributes = [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }];
  var component = renderer.create(React.createElement(CartItemDetail, {
    title: "Mock Product Title",
    productSlug: "product-slug",
    productVendor: "Patagonia",
    attributes: attributes
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with quantity attribute", function () {
  var attributes = [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }];
  var component = renderer.create(React.createElement(CartItemDetail, {
    title: "Mock Product Title",
    productSlug: "product-slug",
    attributes: attributes,
    quantity: 3
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with product url path prop", function () {
  var attributes = [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }];
  var component = renderer.create(React.createElement(CartItemDetail, {
    title: "Mock Product Title",
    productURLPath: "product/",
    productSlug: "product-slug",
    attributes: attributes
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});