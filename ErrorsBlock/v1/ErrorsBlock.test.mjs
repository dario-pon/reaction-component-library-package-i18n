import React from "react";
import renderer from "react-test-renderer";
import ErrorsBlock from "./ErrorsBlock";
test("has isFormErrors property set to true", function () {
  expect(ErrorsBlock.isFormErrors).toBe(true);
});
test("renders all error messages", function () {
  var errors = [{
    name: "a",
    message: "Message One"
  }, {
    name: "b",
    message: "Message Two"
  }];
  var component = renderer.create(React.createElement(ErrorsBlock, {
    errors: errors
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders nothing when there are no errors", function () {
  var component = renderer.create(React.createElement(ErrorsBlock, null));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});