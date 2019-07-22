import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import FulfillmentOptionsCheckoutAction from "./FulfillmentOptionsCheckoutAction";
test("basic snapshot", function () {
  var fulfillmentGroup = {
    availableFulfillmentOptions: [{
      fulfillmentMethod: {
        _id: "1121",
        name: "Standard",
        displayName: "Standard (5-9 Days)"
      },
      price: {
        amount: 0,
        displayAmount: "Free"
      }
    }, {
      fulfillmentMethod: {
        _id: "2322",
        name: "Priority",
        displayName: "Priority (3-5 Days)"
      },
      price: {
        amount: 5.99,
        displayAmount: "$5.99"
      }
    }, {
      fulfillmentMethod: {
        _id: "3343",
        name: "Express",
        displayName: "Express 2 Day"
      },
      price: {
        amount: 12.99,
        displayAmount: "$12.99"
      }
    }, {
      fulfillmentMethod: {
        _id: "4544",
        name: "Overnight",
        displayName: "Overnight Expedited"
      },
      price: {
        amount: 24.99,
        displayAmount: "$24.99"
      }
    }]
  };
  /* eslint-disable */

  var component = renderer.create(React.createElement(FulfillmentOptionsCheckoutAction, {
    components: mockComponents,
    stepNumber: 2,
    label: t('Choose a shipping method'),
    fulfillmentGroup: fulfillmentGroup
  }));
  /* eslint-enable */

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot - empty fulfillment options", function () {
  var fulfillmentGroup = {
    availableFulfillmentOptions: []
  };
  /* eslint-disable */

  var component = renderer.create(React.createElement(FulfillmentOptionsCheckoutAction, {
    components: mockComponents,
    stepNumber: 2,
    label: t('Choose a shipping method'),
    fulfillmentGroup: fulfillmentGroup
  }));
  /* eslint-enable */

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});