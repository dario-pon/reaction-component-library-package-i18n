import _extends from "@babel/runtime/helpers/esm/extends";
import "core-js/modules/es6.array.find";
import "core-js/modules/es6.regexp.to-string";

/* eslint-disable require-jsdoc  */
import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { testInput } from "composable-form-tests";
import Select from "./Select";
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

testInput({
  component: Select,
  defaultValue: null,
  exampleValueOne: "a",
  exampleValueTwo: "b",
  mount: mount,
  options: OPTIONS,
  props: PROPS,
  simulateChanged: simulateChanged
});
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(Select, _extends({}, PROPS, {
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
  var component = renderer.create(React.createElement(Select, _extends({}, PROPS, {
    alphabetize: true,
    options: UNORDERED_OPTIONS
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("when value prop changes to `null`, selection is cleared", function () {
  var wrapper = mount(React.createElement(Select, {
    options: OPTIONS,
    value: "c"
  }));
  expect(wrapper.html().indexOf(">C</div>")).not.toBe(-1);
  wrapper.setProps({
    value: null
  });
  expect(wrapper.html().indexOf(">Select...</div>")).not.toBe(-1);
});