import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import InlineAlert from "./InlineAlert";
test("basic snapshot no props", function () {
  var component = renderer.create(React.createElement(InlineAlert, null));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with some props", function () {
  var component = renderer.create(React.createElement(InlineAlert, {
    alertType: "warning",
    message: "Card ending in 0000 is expiring soon."
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic warning snapshot", function () {
  var component = renderer.create(React.createElement(InlineAlert, {
    alertType: "warning",
    title: "Warning",
    message: "Card ending in 0000 is expiring soon."
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic information snapshot", function () {
  var component = renderer.create(React.createElement(InlineAlert, {
    alertType: "information",
    title: "Information",
    message: "Card ending in 0000 is expiring soon."
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic error snapshot", function () {
  var component = renderer.create(React.createElement(InlineAlert, {
    alertType: "error",
    title: "Error",
    message: "Card ending in 0000 is expiring soon."
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic success snapshot", function () {
  var component = renderer.create(React.createElement(InlineAlert, {
    alertType: "success",
    title: "Success",
    message: "Card ending in 0000 is expiring soon."
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic autoclosing snapshot", function () {
  var component = renderer.create(React.createElement(InlineAlert, {
    isAutoClosing: true,
    alertType: "success",
    title: "Success",
    message: "Card ending in 0000 is expiring soon."
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic dismissable snapshot", function () {
  var component = renderer.create(React.createElement(InlineAlert, {
    isDismissable: true,
    components: mockComponents,
    alertType: "success",
    message: "Card."
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});