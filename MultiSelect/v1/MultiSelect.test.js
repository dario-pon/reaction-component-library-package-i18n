"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _MultiSelect = _interopRequireDefault(require("./MultiSelect"));

var OPTIONS = [{
  label: "A",
  value: "a"
}, {
  label: "B",
  value: "b"
}, {
  label: "C",
  value: "c"
}];
var PROPS = {
  className: "react-select",
  classNamePrefix: "react-select",
  menuIsOpen: true
};
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_MultiSelect.default, (0, _extends2.default)({}, PROPS, {
    options: OPTIONS
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("alphabetize option snapshot", function () {
  var UNORDERED_OPTIONS = [{
    label: "C",
    value: "c"
  }, {
    label: "A",
    value: "a"
  }, {
    label: "Z",
    value: "z"
  }, {
    label: "E",
    value: "e"
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_MultiSelect.default, (0, _extends2.default)({}, PROPS, {
    alphabetize: true,
    options: UNORDERED_OPTIONS
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});