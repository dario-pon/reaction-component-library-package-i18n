import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import StripePaymentCheckoutAction from "./StripePaymentCheckoutAction";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(StripePaymentCheckoutAction, {
    label: t('Payment Information'),
    stepNumber: 2,
    onReadyForSaveChange: function onReadyForSaveChange() {
      return true;
    },
    onSubmit: function onSubmit() {
      return true;
    },
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});