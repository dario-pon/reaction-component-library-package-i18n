"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var ReactContainerQueryExports = _interopRequireWildcard(require("react-container-query"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _CatalogGrid = _interopRequireDefault(require("./CatalogGrid"));

var _products = _interopRequireDefault(require("./__mocks__/products"));

// auto-add i18n 
// ContainerQuery component causes errors inside `renderer.create` so we mock it
ReactContainerQueryExports.ContainerQuery = jest.fn().mockImplementation(function (props) {
  return props.children({});
});
test("CatalogGrid default responsive snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CatalogGrid.default, {
    components: _mockComponents.default,
    products: _products.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CatalogGrid 325px fixed-width snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement("div", {
    style: {
      width: 325,
      borderWidth: 1,
      borderColor: "black",
      borderStyle: "solid",
      margin: "0 auto"
    }
  }, _react.default.createElement(_CatalogGrid.default, {
    components: _mockComponents.default,
    products: _products.default
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CatalogGrid 450px fixed-width snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement("div", {
    style: {
      width: 450,
      borderWidth: 1,
      borderColor: "black",
      borderStyle: "solid",
      margin: "0 auto"
    }
  }, _react.default.createElement(_CatalogGrid.default, {
    components: _mockComponents.default,
    products: _products.default
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CatalogGrid 650px fixed-width snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement("div", {
    style: {
      width: 650,
      borderWidth: 1,
      borderColor: "black",
      borderStyle: "solid",
      margin: "0 auto"
    }
  }, _react.default.createElement(_CatalogGrid.default, {
    components: _mockComponents.default,
    products: _products.default
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CatalogGrid 960px fixed-width snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement("div", {
    style: {
      width: 960,
      borderWidth: 1,
      borderColor: "black",
      borderStyle: "solid",
      margin: "0 auto"
    }
  }, _react.default.createElement(_CatalogGrid.default, {
    components: _mockComponents.default,
    products: _products.default
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CatalogGrid custom placeholder image snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CatalogGrid.default, {
    components: _mockComponents.default,
    products: _products.default,
    placeholderImageURL: "/path/to/custom/placeholder.png"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CatalogGrid custom badge label snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CatalogGrid.default, {
    components: _mockComponents.default,
    products: _products.default,
    badgeLabels: {
      BACKORDER: "Back Order!",
      BESTSELLER: "Best-selling Product",
      LOW_QUANTITY: "Only few left!",
      SOLD_OUT: "None Left",
      SALE: "Limited-time Sale"
    }
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CatalogGrid contain vs fit snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CatalogGrid.default, {
    components: _mockComponents.default,
    products: [{
      title: "Landscape",
      slug: "landscape",
      vendor: "Reaction",
      primaryImage: {
        URLs: {
          large: "/images/landscape/large.jpg",
          medium: "/images/landscape/medium.jpg",
          small: "/images/landscape/small.png",
          thumbnail: "/images/landscape/thumbnail.png"
        }
      },
      pricing: [{
        currency: {
          code: "USD"
        },
        compareAtPrice: null,
        price: 15,
        displayPrice: "$15.00"
      }],
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: false
    }, {
      title: "Portrait",
      slug: "portrait",
      vendor: "Reaction",
      primaryImage: {
        URLs: {
          large: "/images/portrait/large.jpg",
          medium: "/images/portrait/medium.jpg",
          small: "/images/portrait/small.png",
          thumbnail: "/images/portrait/thumbnail.png"
        }
      },
      pricing: [{
        currency: {
          code: "USD"
        },
        compareAtPrice: null,
        price: 15,
        displayPrice: "$15.00"
      }],
      isSoldOut: false,
      isBackorder: false,
      isOnSale: false,
      isLowQuantity: false,
      isBestseller: false
    }]
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});