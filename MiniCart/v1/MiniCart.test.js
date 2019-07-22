"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _MiniCart = _interopRequireDefault(require("./MiniCart"));

var mockCheckout = {
  summary: {
    itemTotal: {
      displayAmount: "$25.00"
    },
    taxTotal: {
      displayAmount: "$2.50"
    }
  }
};
var mockItems = [{
  _id: "123",
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
  isLowQuantity: true,
  price: {
    displayAmount: "$20.00"
  },
  productSlug: "product-slug",
  productVendor: "Patagonia",
  title: "A Great Product",
  quantity: 2
}, {
  _id: "456",
  attributes: [{
    label: "Color",
    value: "Black"
  }, {
    label: "Size",
    value: "10"
  }],
  currentQuantity: 500,
  imageURLs: {
    small: "//placehold.it/150",
    thumbnail: "//placehold.it/100"
  },
  isLowQuantity: false,
  price: {
    displayAmount: "$78.00"
  },
  productSlug: "product-slug",
  productVendor: "Nike",
  title: "Another Great Product",
  quantity: 1
}];
test("basic snapshot with props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_MiniCart.default, {
    cart: {
      checkout: mockCheckout,
      items: mockItems
    },
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});