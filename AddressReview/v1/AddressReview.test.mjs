import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer"; // import { shallow } from "enzyme";

import mockComponents from "../../../tests/mockComponents";
import AddressReview from "./AddressReview";
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
  var component = renderer.create(React.createElement(AddressReview, {
    addressEntered: mockAddressEntered,
    addressSuggestion: mockAddressSuggestion,
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with all props", function () {
  var component = renderer.create(React.createElement(AddressReview, {
    addressEntered: mockAddressEntered,
    addressSuggestion: mockAddressSuggestion,
    components: mockComponents,
    value: "entered",
    warningTitle: "Warning",
    warningMessage: "Something is wrong"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});