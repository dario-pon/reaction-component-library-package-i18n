"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _AddressBook = _interopRequireDefault(require("./AddressBook"));

// import { shallow } from "enzyme";
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressBook.default, {
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});