import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import QuantityInput from "./QuantityInput";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(QuantityInput, null));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});