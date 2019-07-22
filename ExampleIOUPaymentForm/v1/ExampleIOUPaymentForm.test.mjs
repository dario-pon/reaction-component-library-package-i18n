import "core-js/modules/es6.array.find";
import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import mockComponents from "../../../tests/mockComponents";
import realComponents from "../../../tests/realComponents";
import ExampleIOUPaymentForm from "./ExampleIOUPaymentForm";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(ExampleIOUPaymentForm, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onReadyForSaveChange on mount and change", function () {
  var onReadyForSaveChange = jest.fn();
  var wrapper = mount(React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(ExampleIOUPaymentForm, {
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
  var wrapper = mount(React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(ExampleIOUPaymentForm, {
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
  var wrapper = mount(React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(ExampleIOUPaymentForm, {
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