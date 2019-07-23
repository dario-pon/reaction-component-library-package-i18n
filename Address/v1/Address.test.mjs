import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer"; // import { shallow } from "enzyme";

import Address from "./Address";
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
  var component = renderer.create(React.createElement(Address, {
    address: mockAddress
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with is flat prop", function () {
  var component = renderer.create(React.createElement(Address, {
    address: mockAddress,
    isFlat: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with address order prop", function () {
  var addressOrder = ["fullName", "phone"];
  var address = mockAddress;
  var component = renderer.create(React.createElement(Address, {
    address: address,
    addressOrder: addressOrder
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with invalid address properties prop", function () {
  var invalidAddressProperties = ["country", "address1"];
  var address = mockAddress;
  var component = renderer.create(React.createElement(Address, {
    address: address,
    invalidAddressProperties: invalidAddressProperties
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});