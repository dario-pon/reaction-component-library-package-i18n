"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _AddressForm = _interopRequireDefault(require("./AddressForm"));

test("Render with only the components on props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressForm.default, {
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with a US address value", function () {
  var mockAddress = {
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressForm.default, {
    components: _mockComponents.default,
    value: mockAddress
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with a NG address value", function () {
  var mockAddress = {
    address1: "35 Akin Adesola St",
    address2: "",
    country: "NG",
    city: "Lagos",
    fullName: "Ocean Basket Victoria Island",
    postal: "101241",
    region: "Victoria Island",
    phone: "234 816 059 1821"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressForm.default, {
    components: _mockComponents.default,
    value: mockAddress
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with a partial address value", function () {
  var mockAddress = {
    country: "US",
    city: "Belle Chasse",
    postal: "70037",
    region: "LA"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressForm.default, {
    components: _mockComponents.default,
    value: mockAddress
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with locales", function () {
  var mockLocales = {
    ES: {
      name: "Essos",
      states: {
        BV: {
          name: "Brovos"
        },
        MN: {
          name: "Mareen"
        },
        PT: {
          name: "Pentos"
        },
        VD: {
          name: "Vaes Dothrak"
        },
        VO: {
          name: "Volantis"
        },
        QA: {
          name: "Qarth"
        }
      }
    },
    SY: {
      name: "Sothoryos"
    },
    UT: {
      name: "Ulthos"
    },
    WS: {
      name: "Westeros",
      capital: "Kings Landing",
      states: {
        DN: {
          name: "Dorne"
        },
        II: {
          name: "Iron Islands"
        },
        KL: {
          name: "The King's Lands"
        },
        SL: {
          name: "The Stormlands"
        },
        TN: {
          name: "The North"
        },
        TV: {
          name: "The Vale"
        }
      }
    }
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressForm.default, {
    components: _mockComponents.default,
    locales: mockLocales
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});