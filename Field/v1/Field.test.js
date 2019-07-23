"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _enzyme = require("enzyme");

var _Field = _interopRequireDefault(require("./Field"));

var _v = _interopRequireDefault(require("./../../TextInput/v1"));

// auto-add i18n 
var FontIcon = _styledComponents.default.i.withConfig({
  displayName: "Fieldtest__FontIcon",
  componentId: "kqjl7x-0"
})(["font-size:1em;vertical-align:middle;"]);

var iconClear = _react.default.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 14",
  style: {
    height: "100%",
    maxHeight: "100%",
    verticalAlign: "middle"
  }
}, _react.default.createElement("path", {
  d: "M9.926 9.105l-2.105-2.105 2.105-2.105-0.82-0.82-2.105 2.105-2.105-2.105-0.82 0.82 2.105 2.105-2.105 2.105 0.82 0.82 2.105-2.105 2.105 2.105zM7 1.176c3.227 0 5.824 2.598 5.824 5.824s-2.598 5.824-5.824 5.824-5.824-2.598-5.824-5.824 2.598-5.824 5.824-5.824z"
}));

var iconComponents = {
  iconClear: iconClear,
  iconError: _react.default.createElement(FontIcon, {
    className: "fas fa-exclamation-triangle"
  }),
  iconValid: _react.default.createElement(FontIcon, {
    className: "far fa-check-circle"
  })
};
test("has isFormField property set to true", function () {
  expect(_Field.default.isFormField).toBe(true);
});
test("renders with no label", function () {
  var component = _reactTestRenderer.default.create( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, null, _react.default.createElement("p", null, "Text above"), _react.default.createElement(_v.default, {
    components: iconComponents,
    name: "test"
  }), _react.default.createElement("p", null, "Text below"))); // eslint-disable-line function-paren-newline


  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with label", function () {
  var component = _reactTestRenderer.default.create( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, {
    label: t('Foo')
  }, _react.default.createElement("p", null, "Text above"), _react.default.createElement(_v.default, {
    components: iconComponents,
    name: "test"
  }), _react.default.createElement("p", null, "Text below"))); // eslint-disable-line function-paren-newline


  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with no help text", function () {
  var component = _reactTestRenderer.default.create( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, null, _react.default.createElement("p", null, "Text above"), _react.default.createElement(_v.default, {
    components: iconComponents,
    name: "test"
  }), _react.default.createElement("p", null, "Text below"))); // eslint-disable-line function-paren-newline


  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with help text", function () {
  var component = _reactTestRenderer.default.create( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, {
    helpText: "Foo"
  }, _react.default.createElement("p", null, "Text above"), _react.default.createElement(_v.default, {
    components: iconComponents,
    name: "test"
  }), _react.default.createElement("p", null, "Text below"))); // eslint-disable-line function-paren-newline


  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders with other props", function () {
  var component = _reactTestRenderer.default.create( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, {
    label: t('Foo" className="className" labelClassName="labelClassName" labelFor="labelFor')
  }, _react.default.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline


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
  var component = (0, _enzyme.shallow)( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, {
    label: t('Foo'),
    errors: errors
  }, _react.default.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("has-error");
});
test("adds 'required' class when it is required", function () {
  var component = (0, _enzyme.shallow)( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, {
    label: t('Foo'),
    isRequired: true
  }, _react.default.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

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
  var component = (0, _enzyme.shallow)( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, {
    label: t('Foo'),
    isRequired: true,
    errors: errors
  }, _react.default.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

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
  var component = (0, _enzyme.shallow)( // eslint-disable-line function-paren-newline
  _react.default.createElement(_Field.default, {
    label: t('Foo" isRequired errors={errors} className="customClass')
  }, _react.default.createElement("p", null, "Blah"))); // eslint-disable-line function-paren-newline

  expect(component.prop("className")).toBe("customClass has-error required");
});