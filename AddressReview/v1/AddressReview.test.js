"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _AddressReview = _interopRequireDefault(require("./AddressReview"));

// auto-add i18n 
// import { shallow } from "enzyme";
var mockAddressEntered = {
  address1: "7742 Hwy 25",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70047",
  region: "LA",
  phone: "(504) 393-7303"
};
var mockAddressSuggestion = {
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};
test("basic snapshot with only required props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressReview.default, {
    addressEntered: mockAddressEntered,
    addressSuggestion: mockAddressSuggestion,
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with all props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressReview.default, {
    addressEntered: mockAddressEntered,
    addressSuggestion: mockAddressSuggestion,
    components: _mockComponents.default,
    value: "entered",
    warningTitle: "Warning",
    warningMessage: "Something is wrong"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});