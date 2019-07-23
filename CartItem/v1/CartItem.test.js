"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _CartItem = _interopRequireDefault(require("./CartItem"));

// auto-add i18n 
var mockItem = {
  attributes: [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }],
  compareAtPrice: {
    displayAmount: "$45.00"
  },
  currentQuantity: 3,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  price: {
    displayAmount: "$20.00"
  },
  productSlug: "product-slug",
  productVendor: "Patagonia",
  subtotal: {
    displayAmount: "$40.00"
  },
  title: "A Great Product",
  quantity: 2
};
test("basic snapshot with empty props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItem.default, {
    components: _mockComponents.default,
    item: {
      price: {
        displayAmount: "$9.99"
      }
    }
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItem.default, {
    components: _mockComponents.default,
    item: mockItem
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with isReadOnly prop", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItem.default, {
    components: _mockComponents.default,
    item: mockItem,
    isReadOnly: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with productURLPath prop", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItem.default, {
    components: _mockComponents.default,
    item: mockItem,
    productURLPath: "product/",
    isReadOnly: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});