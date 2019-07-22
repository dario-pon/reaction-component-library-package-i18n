import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CheckoutActionComplete from "./CheckoutActionComplete";
test("basic snapshot", function () {
  var onClick = function onClick() {};

  var Address = "<div><p>123 Main Street</p><p>Anytown, USA 01776</p></div>";
  var component = renderer.create(React.createElement(CheckoutActionComplete, {
    components: mockComponents,
    label: t('Shipping address'),
    content: Address,
    onClickChangeButton: onClick,
    stepNumber: 2
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});