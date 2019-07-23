"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ErrorsBlock = _interopRequireDefault(require("./ErrorsBlock"));

// auto-add i18n 
test("has isFormErrors property set to true", function () {
  expect(_ErrorsBlock.default.isFormErrors).toBe(true);
});
test("renders all error messages", function () {
  var errors = [{
    name: "a",
    message: "Message One"
  }, {
    name: "b",
    message: "Message Two"
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_ErrorsBlock.default, {
    errors: errors
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders nothing when there are no errors", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ErrorsBlock.default, null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});