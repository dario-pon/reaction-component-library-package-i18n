"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Link = _interopRequireDefault(require("./Link"));

// auto-add i18n 
test("Link component with image snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Link.default, {
    href: "http://google.com"
  }, _react.default.createElement("img", {
    src: "/reaction-design-system-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Design System Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Link component with text snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Link.default, {
    href: "http://google.com"
  }, "Click here"));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Link component with onClick hander", function () {
  var testClickHandler = jest.fn();
  var component = (0, _enzyme.shallow)(_react.default.createElement(_Link.default, {
    href: "http://google.com",
    onClick: testClickHandler
  }, "Click here"));
  component.simulate("click");
  expect(testClickHandler).toHaveBeenCalled();
});
test("Link component with onClick hander and no href", function () {
  var testClickHandler = jest.fn();
  var component = (0, _enzyme.shallow)(_react.default.createElement(_Link.default, {
    onClick: testClickHandler
  }, "Click here"));
  component.simulate("click");
  expect(testClickHandler).toHaveBeenCalled();
});