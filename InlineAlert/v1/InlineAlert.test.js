"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _InlineAlert = _interopRequireDefault(require("./InlineAlert"));

// auto-add i18n 
test("basic snapshot no props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InlineAlert.default, null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with some props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InlineAlert.default, {
    alertType: "warning",
    message: "Card ending in 0000 is expiring soon."
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic warning snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InlineAlert.default, {
    alertType: "warning",
    title: "Warning",
    message: "Card ending in 0000 is expiring soon."
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic information snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InlineAlert.default, {
    alertType: "information",
    title: "Information",
    message: "Card ending in 0000 is expiring soon."
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic error snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InlineAlert.default, {
    alertType: "error",
    title: "Error",
    message: "Card ending in 0000 is expiring soon."
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic success snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InlineAlert.default, {
    alertType: "success",
    title: "Success",
    message: "Card ending in 0000 is expiring soon."
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic autoclosing snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InlineAlert.default, {
    isAutoClosing: true,
    alertType: "success",
    title: "Success",
    message: "Card ending in 0000 is expiring soon."
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic dismissable snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InlineAlert.default, {
    isDismissable: true,
    components: _mockComponents.default,
    alertType: "success",
    message: "Card."
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});