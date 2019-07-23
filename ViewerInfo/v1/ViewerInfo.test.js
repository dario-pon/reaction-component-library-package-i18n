"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _ViewerInfo = _interopRequireDefault(require("./ViewerInfo"));

// auto-add i18n 
test("Render with profile image", function () {
  var mockViewer = {
    primaryEmailAddress: "email@domain.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_ViewerInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with only required props", function () {
  var mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_ViewerInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with only email & first name props", function () {
  var mockViewer = {
    firstName: "Issac",
    primaryEmailAddress: "email@domain.com"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_ViewerInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with full name and email props", function () {
  var mockViewer = {
    firstName: "Issac",
    lastName: "Newton",
    primaryEmailAddress: "email@domain.com"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_ViewerInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with full prop", function () {
  var mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_ViewerInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer,
    full: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with compact prop", function () {
  var mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_ViewerInfo.default, {
    components: _mockComponents.default,
    viewer: mockViewer,
    compact: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});