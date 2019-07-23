import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import CheckoutActionIncomplete from "./CheckoutActionIncomplete";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(CheckoutActionIncomplete, {
    label: t('Shipping information'),
    stepNumber: 2
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});