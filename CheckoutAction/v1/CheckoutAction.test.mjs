import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CheckoutActionComplete from "../../CheckoutActionComplete/v1";
import CheckoutActionIncomplete from "../../CheckoutActionIncomplete/v1";
import CheckoutAction from "./CheckoutAction";

var MockActiveCheckoutAction = function MockActiveCheckoutAction(_ref) {
  var activeLabel = _ref.activeLabel;
  return React.createElement("span", null, activeLabel);
}; // eslint-disable-line react/prop-types


test("CheckoutAction with `active` status & label", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = React.createElement("div", null, "Ms. Jane Doe", React.createElement("br", null), "123 Main Street", React.createElement("br", null), "Anytown, USA 01776");
  var component = renderer.create(React.createElement(CheckoutAction, {
    activeLabel: "Mock active label",
    activeStepElement: React.createElement(MockActiveCheckoutAction, null),
    completeStepElement: React.createElement(CheckoutActionComplete, {
      components: mockComponents,
      content: Address,
      onClickChangeButton: onClick
    }),
    incompleteStepElement: React.createElement(CheckoutActionIncomplete, null),
    cart: cart,
    isLoading: isLoading,
    status: "active",
    stepNumber: 2
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CheckoutAction with `complete` status & label", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = React.createElement("div", null, "Ms. Jane Doe", React.createElement("br", null), "123 Main Street", React.createElement("br", null), "Anytown, USA 01776");
  var component = renderer.create(React.createElement(CheckoutAction, {
    activeStepElement: "Placeholder: active step isn't yet available",
    completeStepElement: React.createElement(CheckoutActionComplete, {
      components: mockComponents,
      content: Address,
      onClickChangeButton: onClick
    }),
    incompleteStepElement: React.createElement(CheckoutActionIncomplete, null),
    cart: cart,
    completeLabel: "Mock complete label",
    isLoading: isLoading,
    status: "complete",
    stepNumber: 2
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CheckoutAction with `incomplete` status & label", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = React.createElement("div", null, "Ms. Jane Doe", React.createElement("br", null), "123 Main Street", React.createElement("br", null), "Anytown, USA 01776");
  var component = renderer.create(React.createElement(CheckoutAction, {
    activeStepElement: "Placeholder: active step isn't yet available",
    completeStepElement: React.createElement(CheckoutActionComplete, {
      components: mockComponents,
      content: Address,
      onClickChangeButton: onClick
    }),
    incompleteLabel: "Mock incomplete label",
    incompleteStepElement: React.createElement(CheckoutActionIncomplete, null),
    cart: cart,
    isLoading: isLoading,
    status: "incomplete",
    stepNumber: 2
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CheckoutAction with `complete` status and label override via props", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = React.createElement("div", null, "Ms. Jane Doe", React.createElement("br", null), "123 Main Street", React.createElement("br", null), "Anytown, USA 01776");
  var component = renderer.create(React.createElement(CheckoutAction, {
    activeStepElement: "Placeholder: active step isn't yet available",
    completeStepElement: React.createElement(CheckoutActionComplete, {
      components: mockComponents,
      content: Address,
      label: t('Label override'),
      onClickChangeButton: onClick
    }),
    incompleteStepElement: React.createElement(CheckoutActionIncomplete, null),
    cart: cart,
    isLoading: isLoading,
    status: "complete",
    stepNumber: 2
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("CheckoutAction with `complete` status and stepNumber override via props", function () {
  var cart = {};
  var isLoading = false;

  var onClick = function onClick() {};

  var Address = React.createElement("div", null, "Ms. Jane Doe", React.createElement("br", null), "123 Main Street", React.createElement("br", null), "Anytown, USA 01776");
  var component = renderer.create(React.createElement(CheckoutAction, {
    activeStepElement: "Placeholder: active step isn't yet available",
    completeStepElement: React.createElement(CheckoutActionComplete, {
      components: mockComponents,
      content: Address,
      onClickChangeButton: onClick,
      stepNumber: 500
    }),
    incompleteStepElement: React.createElement(CheckoutActionIncomplete, null),
    cart: cart,
    isLoading: isLoading,
    status: "complete",
    stepNumber: 2
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});