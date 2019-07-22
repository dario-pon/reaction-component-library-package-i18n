"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.array.find");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _componentsContext = require("@reactioncommerce/components-context");

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _realComponents = _interopRequireDefault(require("../../../tests/realComponents"));

var _ExampleIOUPaymentForm = _interopRequireDefault(require("./ExampleIOUPaymentForm"));

test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ExampleIOUPaymentForm.default, {
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onReadyForSaveChange on mount and change", function () {
  var onReadyForSaveChange = jest.fn();
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_ExampleIOUPaymentForm.default, {
    onReadyForSaveChange: onReadyForSaveChange
  })));
  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(false);
  onReadyForSaveChange.mockClear();
  wrapper.find('input[name="fullName"]').simulate("blur", {
    target: {
      value: "Bill"
    }
  });
  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(true);
});
test("calls onChange on mount and change", function () {
  var onChange = jest.fn();
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_ExampleIOUPaymentForm.default, {
    onChange: onChange
  })));
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith({
    amount: null,
    data: {
      fullName: null
    },
    displayName: null
  });
  onChange.mockClear();
  wrapper.find('input[name="fullName"]').simulate("blur", {
    target: {
      value: "Bill"
    }
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith({
    amount: null,
    data: {
      fullName: "Bill"
    },
    displayName: "IOU from Bill"
  });
  onChange.mockClear();
  wrapper.find('input[name="amount"]').simulate("blur", {
    target: {
      value: "5.95"
    }
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith({
    amount: 5.95,
    data: {
      fullName: "Bill"
    },
    displayName: "IOU from Bill"
  });
});
test("calls onSubmit when submit method is called", function (done) {
  var onSubmit = jest.fn();
  var formEl;
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_componentsContext.ComponentsProvider, {
    value: _realComponents.default
  }, _react.default.createElement(_ExampleIOUPaymentForm.default, {
    ref: function ref(_ref) {
      formEl = _ref;
    },
    onSubmit: onSubmit
  })));
  expect(onSubmit).not.toHaveBeenCalled();
  wrapper.find('input[name="fullName"]').simulate("blur", {
    target: {
      value: "Bill"
    }
  });
  formEl.submit();
  setTimeout(function () {
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith({
      amount: null,
      data: {
        fullName: "Bill"
      },
      displayName: "IOU from Bill"
    });
    done();
  }, 0);
});