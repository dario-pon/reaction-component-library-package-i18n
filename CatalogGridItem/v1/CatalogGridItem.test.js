"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _CatalogGridItem = _interopRequireDefault(require("./CatalogGridItem"));

// auto-add i18n 
test("CatalogGridItem basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CatalogGridItem.default, {
    components: _mockComponents.default,
    placeholderImageURL: "/resources/placeholder.gif",
    product: {
      title: "Basic Reaction Product",
      slug: "basic-reaction-product",
      vendor: "Example Manufacturer",
      primaryImage: {
        URLs: {
          large: "/images/sticker/large.jpg",
          medium: "/images/sticker/medium.jpg",
          small: "/images/sticker/small.png",
          thumbnail: "/images/sticker/thumbnail.png"
        }
      },
      pricing: [{
        currency: {
          code: "USD"
        },
        displayPrice: "$12.99 - $19.99"
      }],
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: true
    },
    currencyCode: "USD"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CatalogGridItem with placeholder image", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CatalogGridItem.default, {
    components: _mockComponents.default,
    placeholderImageURL: "/resources/placeholder.gif",
    product: {
      title: "Basic Reaction Product",
      slug: "basic-reaction-product",
      vendor: "Example Manufacturer",
      primaryImage: null,
      pricing: [{
        currency: {
          code: "USD"
        },
        displayPrice: "$12.99 - $19.99"
      }],
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: true
    },
    currencyCode: "USD"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});