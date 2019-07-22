"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _SelectableList = _interopRequireDefault(require("./SelectableList"));

test("basic snapshot", function () {
  var items = [{
    id: "1",
    label: "Priority shipping",
    detail: "$12.00",
    value: "123",
    checked: true
  }, {
    id: "2",
    label: "Expedited shipping",
    detail: "$5.00",
    value: "333"
  }, {
    id: "3",
    label: "Free shipping",
    detail: "$0.00",
    value: "2455"
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_SelectableList.default, {
    options: items,
    components: _mockComponents.default,
    name: "Form"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});