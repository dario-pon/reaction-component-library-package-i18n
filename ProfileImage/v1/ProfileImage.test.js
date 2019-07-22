"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ProfileImage = _interopRequireDefault(require("./ProfileImage"));

var viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};
var viewerInitials = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
};
test("ProfileImage component with image snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProfileImage.default, {
    viewer: viewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("ProfileImage component with custom size", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProfileImage.default, {
    size: 30,
    viewer: viewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("ProfileImage component with initials snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProfileImage.default, {
    viewer: viewerInitials
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});