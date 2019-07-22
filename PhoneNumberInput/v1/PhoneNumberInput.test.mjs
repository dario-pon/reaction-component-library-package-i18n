import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import PhoneNumberInput from "./PhoneNumberInput";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(PhoneNumberInput, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});