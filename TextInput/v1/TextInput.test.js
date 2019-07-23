"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.array.find");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _composableFormTests = require("composable-form-tests");

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

/* eslint-disable require-jsdoc  */
// auto-add i18n 
(0, _composableFormTests.testInput)({
  component: _TextInput.default,
  props: {
    components: _mockComponents.default
  },
  defaultValue: null,
  exampleValueOne: "ONE",
  exampleValueTwo: "TWO",
  mount: _enzyme.mount,
  simulateChanging: function simulateChanging(wrapper, value) {
    wrapper.find("input").simulate("change", {
      target: {
        value: value
      }
    });
  },
  simulateChanged: function simulateChanged(wrapper, value) {
    wrapper.find("input").simulate("blur", {
      target: {
        value: value
      }
    });
  },
  simulateSubmit: function simulateSubmit(wrapper) {
    wrapper.find("input").simulate("keypress", {
      which: 13
    });
  }
});
test("renders", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_TextInput.default, {
    components: _mockComponents.default,
    name: "test"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_TextInput.default, {
    className: "CLASSNAME",
    components: _mockComponents.default,
    isReadOnly: true,
    maxLength: 20,
    name: "test",
    placeholder: t('PLACEHOLDER'),
    value: "VALUE"
  })); // eslint-disable-line react/jsx-closing-bracket-location


  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders textarea", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_TextInput.default, {
    name: "test",
    components: _mockComponents.default,
    allowLineBreak: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders textarea with props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_TextInput.default, {
    className: "CLASSNAME",
    components: _mockComponents.default,
    isReadOnly: true,
    maxLength: 20,
    name: "test",
    placeholder: t('PLACEHOLDER'),
    shouldAllowLineBreak: true,
    value: "VALUE"
  })); // eslint-disable-line react/jsx-closing-bracket-location


  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("value default trimming and null", function () {
  var initialValue;

  function onChange(value) {
    initialValue = value;
  }

  (0, _enzyme.mount)(_react.default.createElement(_TextInput.default, {
    components: _mockComponents.default,
    name: "test",
    onChange: onChange,
    value: " "
  }));
  expect(initialValue).toBeNull();
});
test("value with shouldConvertEmptyStringToNull false", function () {
  var initialValue;

  function onChange(value) {
    initialValue = value;
  }

  (0, _enzyme.mount)(_react.default.createElement(_TextInput.default, {
    components: _mockComponents.default,
    name: "test",
    onChange: onChange,
    shouldConvertEmptyStringToNull: false
  }));
  expect(initialValue).toBe("");
});
test("value with shouldTrimValue false", function () {
  var initialValue;

  function onChange(value) {
    initialValue = value;
  }

  (0, _enzyme.mount)(_react.default.createElement(_TextInput.default, {
    components: _mockComponents.default,
    name: "test",
    onChange: onChange,
    shouldTrimValue: false,
    value: " "
  }));
  expect(initialValue).toBe(" ");
});
test("value with null value", function () {
  var initialValue;

  function onChange(value) {
    initialValue = value;
  }

  (0, _enzyme.mount)(_react.default.createElement(_TextInput.default, {
    components: _mockComponents.default,
    name: "test",
    onChange: onChange,
    shouldConvertEmptyStringToNull: false,
    value: null
  }));
  expect(initialValue).toBe("");
});
test("value with undefined value", function () {
  var initialValue;

  function onChange(value) {
    initialValue = value;
  }

  (0, _enzyme.mount)(_react.default.createElement(_TextInput.default, {
    components: _mockComponents.default,
    name: "test",
    onChange: onChange,
    shouldConvertEmptyStringToNull: false,
    value: undefined
  }));
  expect(initialValue).toBe("");
});
test("value with null value after changed prop", function () {
  var currentValue;

  function onChange(value) {
    currentValue = value;
  }

  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_TextInput.default, {
    components: _mockComponents.default,
    name: "test",
    onChange: onChange,
    shouldConvertEmptyStringToNull: false,
    value: "123"
  }));
  wrapper.setProps({
    value: null
  });
  expect(currentValue).toBe("");
});
test("value with undefined value after changed prop", function () {
  var currentValue;

  function onChange(value) {
    currentValue = value;
  }

  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_TextInput.default, {
    components: _mockComponents.default,
    name: "test",
    onChange: onChange,
    shouldConvertEmptyStringToNull: false,
    value: "123"
  }));
  wrapper.setProps({
    value: undefined
  });
  expect(currentValue).toBe("");
});