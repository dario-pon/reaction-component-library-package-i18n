import "core-js/modules/es6.promise";
import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { StripeProvider } from "react-stripe-elements";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import mockComponents from "../../../tests/mockComponents";
import realComponents from "../../../tests/realComponents";
import StripePaymentInput from "./StripePaymentInput"; // Mock the Stripe instance

var elementMock = {
  mount: jest.fn(),
  destroy: jest.fn(),
  on: jest.fn(),
  update: jest.fn()
};
var elementsMock = {
  create: jest.fn().mockReturnValue(elementMock)
};
var stripeMock = {
  elements: jest.fn().mockReturnValue(elementsMock),
  createToken: jest.fn(),
  createSource: jest.fn()
};
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(StripePaymentInput, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onReadyForSaveChange on mount and change", function () {
  var onReadyForSaveChange = jest.fn();
  var formEl;
  mount(React.createElement(StripeProvider, {
    stripe: stripeMock
  }, React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(StripePaymentInput, {
    ref: function ref(_ref) {
      formEl = _ref;
    },
    onReadyForSaveChange: onReadyForSaveChange
  }))));
  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(false);
  onReadyForSaveChange.mockClear();
  formEl.handleChangeReadyState(true);
  expect(onReadyForSaveChange).toHaveBeenCalledTimes(1);
  expect(onReadyForSaveChange).toHaveBeenLastCalledWith(true);
});
test("calls onSubmit when submit method is called", function (done) {
  var onSubmit = jest.fn();
  stripeMock.createToken.mockReturnValueOnce(Promise.resolve({
    token: {
      card: {
        brand: "Visa",
        last4: "1234"
      },
      id: "abc123"
    }
  }));
  var formEl;
  mount(React.createElement(StripeProvider, {
    stripe: stripeMock
  }, React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(StripePaymentInput, {
    ref: function ref(_ref2) {
      formEl = _ref2;
    },
    onSubmit: onSubmit
  }))));
  expect(onSubmit).not.toHaveBeenCalled();
  formEl.submit();
  setTimeout(function () {
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith({
      data: {
        stripeTokenId: "abc123"
      },
      displayName: "Visa ending in 1234"
    });
    done();
  }, 0);
});