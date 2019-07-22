import React from "react";
import renderer from "react-test-renderer";
import BadgeOverlay from "./BadgeOverlay";
test("BadgeOverlay with sold out primary badge", function () {
  var component = renderer.create(React.createElement(BadgeOverlay, {
    product: {
      isSoldOut: true,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: false
    }
  }, React.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with backorder primary badge", function () {
  var component = renderer.create(React.createElement(BadgeOverlay, {
    product: {
      isSoldOut: true,
      isBackorder: true,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: false
    }
  }, React.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with on sale primary badge", function () {
  var component = renderer.create(React.createElement(BadgeOverlay, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: true,
      isLowQuantity: false,
      isBestseller: false
    }
  }, React.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with on sale primary badge and low quantity secondary badge", function () {
  var component = renderer.create(React.createElement(BadgeOverlay, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: true,
      isLowQuantity: true,
      isBestseller: false
    }
  }, React.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with on sale primary badge and best seller secondary badge", function () {
  var component = renderer.create(React.createElement(BadgeOverlay, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: true,
      isLowQuantity: false,
      isBestseller: true
    }
  }, React.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with low quantity primary badge", function () {
  var component = renderer.create(React.createElement(BadgeOverlay, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: true,
      isBestseller: false
    }
  }, React.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with low quantity primary badge and best seller secondary badge", function () {
  var component = renderer.create(React.createElement(BadgeOverlay, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: true,
      isBestseller: true
    }
  }, React.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with best seller primary badge", function () {
  var component = renderer.create(React.createElement(BadgeOverlay, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: true
    }
  }, React.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});