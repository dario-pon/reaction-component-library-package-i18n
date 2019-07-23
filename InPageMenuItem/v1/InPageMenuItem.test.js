"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _InPageMenuItem = _interopRequireDefault(require("./InPageMenuItem"));

// auto-add i18n 
test("InPageMenuItem basic component", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InPageMenuItem.default, {
    href: "/test/url/",
    label: t('Test label'),
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("InPageMenuItem with onClick instead of href", function () {
  var onClick = function onClick() {};

  var component = _reactTestRenderer.default.create(_react.default.createElement(_InPageMenuItem.default, {
    label: t('Test label'),
    onClick: onClick,
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("InPageMenuItem selected", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_InPageMenuItem.default, {
    isSelected: true,
    href: "/test/url/",
    label: t('Test label'),
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});