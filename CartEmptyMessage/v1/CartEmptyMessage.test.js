"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _v = _interopRequireDefault(require("../../Button/v1"));

var _CartEmptyMessage = _interopRequireDefault(require("./CartEmptyMessage"));

test("default cart empty button", function () {
  var onClick = function onClick() {};

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartEmptyMessage.default, {
    components: {
      Button: _v.default
    },
    onClick: onClick
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("custom cart empty button", function () {
  var onClick = function onClick() {};

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartEmptyMessage.default, {
    buttonText: "Custom button text",
    components: {
      Button: _v.default
    },
    messageText: "Custom message text",
    onClick: onClick
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});