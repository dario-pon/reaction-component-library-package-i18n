"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.find");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _composableFormTests = require("composable-form-tests");

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _v = _interopRequireDefault(require("../../Select/v1"));

var _v2 = _interopRequireDefault(require("../../TextInput/v1"));

var _RegionInput = _interopRequireDefault(require("./RegionInput"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Must have the real Select and TextInput components passed in for all tests to pass
var components = _objectSpread({}, _mockComponents.default, {
  Select: _v.default,
  TextInput: _v2.default
});

var options = [{
  value: "AA",
  label: "A State"
}, {
  value: "BB",
  label: "B State"
}]; // Test when Input is rendered

(0, _composableFormTests.testInput)({
  component: _RegionInput.default,
  props: {
    components: components
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
}); // Test when Select is rendered

(0, _composableFormTests.testInput)({
  component: _RegionInput.default,
  props: {
    className: "react-select",
    classNamePrefix: "react-select",
    components: components,
    menuIsOpen: true,
    // This is necessary so that we can click an option to simulate changing
    options: options // This is what triggers it to be a Select

  },
  defaultValue: null,
  exampleValueOne: "AA",
  exampleValueTwo: "BB",
  mount: _enzyme.mount,
  simulateChanged: function simulateChanged(wrapper, value) {
    var optToSelect = options.find(function (option) {
      return option.value === value;
    });
    var labelToSelect = optToSelect ? optToSelect.label : null;
    var selectOption = wrapper.find('[id*="-option-"]').findWhere(function (opt) {
      return (opt.props().children || "").trim() === labelToSelect;
    });
    selectOption.simulate("click");
    wrapper.update();
  }
});
test("basic snapshot with only the components and required props should render a TextInput", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_RegionInput.default, {
    name: "region",
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with other form props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_RegionInput.default, {
    components: _mockComponents.default,
    value: "California",
    name: "region",
    isReadOnly: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with pre-filled value in TextInput", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_RegionInput.default, {
    name: "region",
    components: _mockComponents.default,
    value: "California"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with pre-filled value in Select", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_RegionInput.default, {
    name: "region",
    components: _mockComponents.default,
    options: options,
    value: "BB"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with options should render a Select", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_RegionInput.default, {
    name: "region",
    components: _mockComponents.default,
    options: options
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});