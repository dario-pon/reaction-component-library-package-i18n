import _extends from "@babel/runtime/helpers/esm/extends";
import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import MultiSelect from "./MultiSelect";
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
  var component = renderer.create(React.createElement(MultiSelect, _extends({}, PROPS, {
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
  var component = renderer.create(React.createElement(MultiSelect, _extends({}, PROPS, {
    alphabetize: true,
    options: UNORDERED_OPTIONS
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});