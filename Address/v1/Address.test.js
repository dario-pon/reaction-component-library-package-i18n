"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Address = _interopRequireDefault(require("./Address"));

// auto-add i18n 
// import { shallow } from "enzyme";
var mockAddress = {
  _id: "1",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
};
test("basic snapshot with required props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Address.default, {
    address: mockAddress
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with is flat prop", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Address.default, {
    address: mockAddress,
    isFlat: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with address order prop", function () {
  var addressOrder = ["fullName", "phone"];
  var address = mockAddress;

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Address.default, {
    address: address,
    addressOrder: addressOrder
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with invalid address properties prop", function () {
  var invalidAddressProperties = ["country", "address1"];
  var address = mockAddress;

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Address.default, {
    address: address,
    invalidAddressProperties: invalidAddressProperties
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});