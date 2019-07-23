import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import styled from "styled-components";
import { shallow } from "enzyme";
import Field from "./Field";
import TextInput from "./../../TextInput/v1";
var FontIcon = styled.i.withConfig({
  displayName: "Fieldtest__FontIcon",
  componentId: "kqjl7x-0"
})(["font-size:1em;vertical-align:middle;"]);
var iconClear = React.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 14",
  style: {
    height: "100%",
    maxHeight: "100%",
    verticalAlign: "middle"
  }
}, React.createElement("path", {
  d: "M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z"
}));
var iconComponents = {
  iconClear: iconClear,
  iconError: React.createElement(FontIcon, {
    className: "fas fa-exclamation-triangle"
  }),
  iconValid: React.createElement(FontIcon, {
    className: "far fa-check-circle"
  })
};
test("has isFormField property set to true", function () {
  expect(Field.isFormField).toBe(true);
});
test("renders with no label", function () {
  var component = renderer.create( // eslint-disable-line function-paren-newline
  React.createElement(Field, null, React.createElement("p", null, "Text above"), React.createElement(TextInput, {
    components: iconComponents,
    name: "test"
  }), React.createElement("p", null, "Text below"))); // eslint-disable-line function-paren-newline

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with label", function () {
  var component = renderer.create( // eslint-disable-line function-paren-newline
  React.createElement(Field, {
    label: t('Foo')
  }, React.createElement("p", null, "Text above"), React.createElement(TextInput, {
    components: iconComponents,
    name: "test"
  }), React.createElement("p", null, "Text below"))); // eslint-disable-line function-paren-newline

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with no help text", function () {
  var component = renderer.create( // eslint-disable-line function-paren-newline
  React.createElement(Field, null, React.createElement("p", null, "Text above"), React.createElement(TextInput, {
    components: iconComponents,
    name: "test"
  }), React.createElement("p", null, "Text below"))); // eslint-disable-line function-paren-newline

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with help text", function () {
  var component = renderer.create( // eslint-disable-line function-paren-newline
  React.createElement(Field, {
    helpText: "Foo"
  }, React.createElement("p", null, "Text above"), React.createElement(TextInput, {
    components: iconComponents,
    name: "test"
  }), React.createElement("p", null, "Text below"))); // eslint-disable-line function-paren-newline

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with other props", function () {
  var component = renderer.create( // eslint-disable-line function-paren-newline
  React.createElement(Field, {
    label: t('Foo" className="className" labelClassName="labelClassName" labelFor="labelFor')
  }, React.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("adds 'has-error' class when there are errors", function () {
  var errors = [{
    name: "a",
    message: "Message One"
  }, {
    name: "b",
    message: "Message Two"
  }];
  var component = shallow( // eslint-disable-line function-paren-newline
  React.createElement(Field, {
    label: t('Foo'),
    errors: errors
  }, React.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("has-error");
});
test("adds 'required' class when it is required", function () {
  var component = shallow( // eslint-disable-line function-paren-newline
  React.createElement(Field, {
    label: t('Foo'),
    isRequired: true
  }, React.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("required");
});
test("adds 'required' and 'has-error' classes when there should be both", function () {
  var errors = [{
    name: "a",
    message: "Message One"
  }, {
    name: "b",
    message: "Message Two"
  }];
  var component = shallow( // eslint-disable-line function-paren-newline
  React.createElement(Field, {
    label: t('Foo'),
    isRequired: true,
    errors: errors
  }, React.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("has-error required");
});
test("adds 'required' and 'has-error' classes and keeps additional", function () {
  var errors = [{
    name: "a",
    message: "Message One"
  }, {
    name: "b",
    message: "Message Two"
  }];
  var component = shallow( // eslint-disable-line function-paren-newline
  React.createElement(Field, {
    label: t('Foo" isRequired errors={errors} className="customClass')
  }, React.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("customClass has-error required");
});