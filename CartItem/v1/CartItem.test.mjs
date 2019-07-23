import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CartItem from "./CartItem";
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
  var component = renderer.create(React.createElement(CartItem, {
    components: mockComponents,
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
  var component = renderer.create(React.createElement(CartItem, {
    components: mockComponents,
    item: mockItem
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with isReadOnly prop", function () {
  var component = renderer.create(React.createElement(CartItem, {
    components: mockComponents,
    item: mockItem,
    isReadOnly: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with productURLPath prop", function () {
  var component = renderer.create(React.createElement(CartItem, {
    components: mockComponents,
    item: mockItem,
    productURLPath: "product/",
    isReadOnly: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});