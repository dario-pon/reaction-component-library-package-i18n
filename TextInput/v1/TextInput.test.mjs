import "core-js/modules/es6.array.find";

/* eslint-disable require-jsdoc  */
import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { testInput } from "composable-form-tests";
import mockComponents from "../../../tests/mockComponents";
import TextInput from "./TextInput";
testInput({
  component: TextInput,
  props: {
    components: mockComponents
  },
  defaultValue: null,
  exampleValueOne: "ONE",
  exampleValueTwo: "TWO",
  mount: mount,
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
  var component = renderer.create(React.createElement(TextInput, {
    components: mockComponents,
    name: "test"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with props", function () {
  var component = renderer.create(React.createElement(TextInput, {
    className: "CLASSNAME",
    components: mockComponents,
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
  var component = renderer.create(React.createElement(TextInput, {
    name: "test",
    components: mockComponents,
    allowLineBreak: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders textarea with props", function () {
  var component = renderer.create(React.createElement(TextInput, {
    className: "CLASSNAME",
    components: mockComponents,
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

  mount(React.createElement(TextInput, {
    components: mockComponents,
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

  mount(React.createElement(TextInput, {
    components: mockComponents,
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

  mount(React.createElement(TextInput, {
    components: mockComponents,
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

  mount(React.createElement(TextInput, {
    components: mockComponents,
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

  mount(React.createElement(TextInput, {
    components: mockComponents,
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

  var wrapper = mount(React.createElement(TextInput, {
    components: mockComponents,
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

  var wrapper = mount(React.createElement(TextInput, {
    components: mockComponents,
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