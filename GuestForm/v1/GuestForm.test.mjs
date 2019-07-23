import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import GuestForm from "./GuestForm";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(GuestForm, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});