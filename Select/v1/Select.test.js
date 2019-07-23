"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.regexp.to-string");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _composableFormTests = require("composable-form-tests");

var _Select = _interopRequireDefault(require("./Select"));

/* eslint-disable require-jsdoc  */
// auto-add i18n 
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

function simulateChanged(wrapper, value) {
  var labelToSelect = value.toString().toUpperCase();
  var selectOption = wrapper.find('[id*="-option-"]').findWhere(function (option) {
    return (option.props().children || "").trim() === labelToSelect;
  });
  wrapper.setState({
    focusedOption: undefined
  });
  selectOption.simulate("click");
  wrapper.update();
}

(0, _composableFormTests.testInput)({
  component: _Select.default,
  defaultValue: null,
  exampleValueOne: "a",
  exampleValueTwo: "b",
  mount: _enzyme.mount,
  options: OPTIONS,
  props: PROPS,
  simulateChanged: simulateChanged
});
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Select.default, (0, _extends2.default)({}, PROPS, {
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

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Select.default, (0, _extends2.default)({}, PROPS, {
    alphabetize: true,
    options: UNORDERED_OPTIONS
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("when value prop changes to `null`, selection is cleared", function () {
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Select.default, {
    options: OPTIONS,
    value: "c"
  }));
  expect(wrapper.html().indexOf(">C</div>")).not.toBe(-1);
  wrapper.setProps({
    value: null
  });
  expect(wrapper.html().indexOf(">Select...</div>")).not.toBe(-1);
});