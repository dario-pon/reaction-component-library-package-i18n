import React from "react";
import renderer from "react-test-renderer";
import CheckoutEmailAddress from "./CheckoutEmailAddress";
test("render email address of a user with an account", function () {
  var component = renderer.create(React.createElement(CheckoutEmailAddress, {
    emailAddress: "account.email@example.com",
    isAccountEmail: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("render email address of a guest", function () {
  var component = renderer.create(React.createElement(CheckoutEmailAddress, {
    emailAddress: "guest.email@example.com",
    isAccountEmail: false
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});