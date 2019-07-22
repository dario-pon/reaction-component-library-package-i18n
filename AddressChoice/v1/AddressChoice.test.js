"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.array.find");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _componentsContext = require("@reactioncommerce/components-context");

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _realComponents = _interopRequireDefault(require("../../../tests/realComponents"));

var _AddressChoice = _interopRequireDefault(require("./AddressChoice"));

var addresses = [{
  _id: "20",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
}, {
  _id: "21",
  address1: "35 Akin Adesola St",
  address2: "",
  country: "NG",
  city: "Lagos",
  fullName: "Ocean Basket Victoria Island",
  postal: "101241",
  region: "Victoria Island",
  phone: "234 816 059 1821"
}];
test("simple snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressChoice.default, {
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("simple snapshot read only", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressChoice.default, {
    components: _mockComponents.default,
    isReadOnly: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onChange when a field changes", function () {
  var onChange = jest.fn();
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_AddressChoice.default, {
    onChange: onChange
  })));
  onChange.mockClear();
  wrapper.find('input[name="address1"]').simulate("blur", {
    target: {
      value: "FOO"
    }
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith({
    address1: "FOO",
    address2: null,
    addressName: "",
    city: null,
    country: null,
    fullName: null,
    isCommercial: false,
    phone: null,
    postal: null,
    region: null
  });
});
test("snapshot with addresses", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_AddressChoice.default, {
    components: _mockComponents.default,
    addresses: addresses
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onChange on mount and when a different provided address is selected", function () {
  var onChange = jest.fn();
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_AddressChoice.default, {
    addresses: addresses,
    onChange: onChange
  })));
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(addresses[0]);
  onChange.mockClear();
  wrapper.find('input[value="1"]').simulate("change", {
    target: {
      checked: true
    }
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(addresses[1]);
});