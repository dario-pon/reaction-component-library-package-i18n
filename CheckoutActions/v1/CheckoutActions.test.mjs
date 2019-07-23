import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import CheckoutActions from "./CheckoutActions";

var mockCheckoutAction =
/*#__PURE__*/
function (_React$Component) {
  _inherits(mockCheckoutAction, _React$Component);

  function mockCheckoutAction() {
    _classCallCheck(this, mockCheckoutAction);

    return _possibleConstructorReturn(this, _getPrototypeOf(mockCheckoutAction).apply(this, arguments));
  }

  _createClass(mockCheckoutAction, [{
    key: "render",
    value: function render() {
      return React.createElement("span", null);
    }
  }]);

  return mockCheckoutAction;
}(React.Component);

mockCheckoutAction.renderComplete = function () {
  return React.createElement("span", null);
};

var mockActions = [{
  activeLabel: "mock active action one",
  completeLabel: "mock complete action one",
  component: mockCheckoutAction,
  id: "123",
  incompleteLabel: "mock inactive action one",
  onSubmit: function onSubmit() {
    return true;
  },
  status: "incomplete",
  props: {
    cartData: {
      data: null
    },
    cartMutation: function cartMutation() {}
  }
}];
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(CheckoutActions, {
    components: mockComponents,
    actions: mockActions
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});