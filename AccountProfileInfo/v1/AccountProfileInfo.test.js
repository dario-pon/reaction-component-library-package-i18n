"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _AccountProfileInfo = _interopRequireDefault(require("./AccountProfileInfo"));

// auto-add i18n 
test("Render default display, with profile image and no edit link", function () {
  var mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_AccountProfileInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with first name only", function () {
  var mockViewer = {
    firstName: "John",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_AccountProfileInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with initials instead of profile image", function () {
  var mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_AccountProfileInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with edit link", function () {
  var mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };
  var clickSpy = jest.fn();

  var component = _reactTestRenderer.default.create(_react.default.createElement(_AccountProfileInfo.default, {
    components: _mockComponents.default,
    onClickEdit: clickSpy,
    shouldShowEditButton: true,
    viewer: mockViewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});