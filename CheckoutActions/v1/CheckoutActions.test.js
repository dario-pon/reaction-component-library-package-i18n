"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _CheckoutActions = _interopRequireDefault(require("./CheckoutActions"));

// auto-add i18n 
var mockCheckoutAction =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(mockCheckoutAction, _React$Component);

  function mockCheckoutAction() {
    (0, _classCallCheck2.default)(this, mockCheckoutAction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(mockCheckoutAction).apply(this, arguments));
  }

  (0, _createClass2.default)(mockCheckoutAction, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("span", null);
    }
  }]);
  return mockCheckoutAction;
}(_react.default.Component);

mockCheckoutAction.renderComplete = function () {
  return _react.default.createElement("span", null);
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
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutActions.default, {
    components: _mockComponents.default,
    actions: mockActions
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});