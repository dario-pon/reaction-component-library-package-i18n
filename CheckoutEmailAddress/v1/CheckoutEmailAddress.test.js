"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _CheckoutEmailAddress = _interopRequireDefault(require("./CheckoutEmailAddress"));

// auto-add i18n 
test("render email address of a user with an account", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutEmailAddress.default, {
    emailAddress: "account.email@example.com",
    isAccountEmail: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("render email address of a guest", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutEmailAddress.default, {
    emailAddress: "guest.email@example.com",
    isAccountEmail: false
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});