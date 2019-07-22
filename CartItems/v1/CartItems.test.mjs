import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CartItems from "./CartItems";
test("basic snapshot with empty props", function () {
  var component = renderer.create(React.createElement(CartItems, {
    components: mockComponents,
    items: []
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with required props", function () {
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
    productVendor: "Nike",
    productSlug: "product-slug",
    title: "Another Great Product",
    quantity: 1
  }];
  var component = renderer.create(React.createElement(CartItems, {
    items: mockItems,
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with required props and optional prop", function () {
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
    productVendor: "Nike",
    productSlug: "product-slug",
    title: "Another Great Product",
    quantity: 1
  }];
  var component = renderer.create(React.createElement(CartItems, {
    items: mockItems,
    components: mockComponents,
    productURLPath: "product/"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});