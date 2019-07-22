"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _SelectableItem = _interopRequireDefault(require("./SelectableItem"));

test("basic snapshot with empty props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_SelectableItem.default, {
    label: t('Label" detail="Detail" value="detail')
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});