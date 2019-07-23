"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _BadgeOverlay = _interopRequireDefault(require("./BadgeOverlay"));

// auto-add i18n 
test("BadgeOverlay with sold out primary badge", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_BadgeOverlay.default, {
    product: {
      isSoldOut: true,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: false
    }
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with backorder primary badge", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_BadgeOverlay.default, {
    product: {
      isSoldOut: true,
      isBackorder: true,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: false
    }
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with on sale primary badge", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_BadgeOverlay.default, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: true,
      isLowQuantity: false,
      isBestseller: false
    }
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with on sale primary badge and low quantity secondary badge", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_BadgeOverlay.default, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: true,
      isLowQuantity: true,
      isBestseller: false
    }
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with on sale primary badge and best seller secondary badge", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_BadgeOverlay.default, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: true,
      isLowQuantity: false,
      isBestseller: true
    }
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with low quantity primary badge", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_BadgeOverlay.default, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: true,
      isBestseller: false
    }
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with low quantity primary badge and best seller secondary badge", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_BadgeOverlay.default, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: true,
      isBestseller: true
    }
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("BadgeOverlay with best seller primary badge", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_BadgeOverlay.default, {
    product: {
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: true
    }
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});