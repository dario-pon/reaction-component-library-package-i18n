"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _CartItemDetail = _interopRequireDefault(require("./CartItemDetail"));

// auto-add i18n 
test("basic snapshot without props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, null));

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

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, {
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

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, {
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

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, {
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

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, {
    title: "Mock Product Title",
    productURLPath: "product/",
    productSlug: "product-slug",
    attributes: attributes
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});