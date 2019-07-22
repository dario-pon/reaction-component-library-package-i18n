"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var CompleteActionWrapper = _styledComponents.default.div.withConfig({
  displayName: "CheckoutAction__CompleteActionWrapper",
  componentId: "sc-1ye3yw9-0"
})(["padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.applyTheme)("CheckoutActionComplete.paddingBottom"), (0, _utils.applyTheme)("CheckoutActionComplete.paddingLeft"), (0, _utils.applyTheme)("CheckoutActionComplete.paddingRight"), (0, _utils.applyTheme)("CheckoutActionComplete.paddingTop"));

var CheckoutAction =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CheckoutAction, _Component);

  function CheckoutAction() {
    (0, _classCallCheck2.default)(this, CheckoutAction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CheckoutAction).apply(this, arguments));
  }

  (0, _createClass2.default)(CheckoutAction, [{
    key: "renderActiveAction",
    value: function renderActiveAction() {
      var _this$props = this.props,
          activeStepElement = _this$props.activeStepElement,
          activeLabel = _this$props.activeLabel,
          status = _this$props.status,
          stepNumber = _this$props.stepNumber;
      if (status !== "active") return null;
      return _react.default.cloneElement(activeStepElement, {
        label: activeStepElement.props && activeStepElement.props.label || activeLabel,
        stepNumber: activeStepElement.props && activeStepElement.props.stepNumber || stepNumber
      });
    }
  }, {
    key: "renderCompleteAction",
    value: function renderCompleteAction() {
      var _this$props2 = this.props,
          completeStepElement = _this$props2.completeStepElement,
          completeLabel = _this$props2.completeLabel,
          status = _this$props2.status,
          stepNumber = _this$props2.stepNumber;
      if (status !== "complete") return null;

      var component = _react.default.cloneElement(completeStepElement, {
        label: completeStepElement.props && completeStepElement.props.label || completeLabel,
        stepNumber: completeStepElement.props && completeStepElement.props.stepNumber || stepNumber
      });

      return _react.default.createElement(CompleteActionWrapper, null, component);
    }
  }, {
    key: "renderIncompleteAction",
    value: function renderIncompleteAction() {
      var _this$props3 = this.props,
          incompleteStepElement = _this$props3.incompleteStepElement,
          incompleteLabel = _this$props3.incompleteLabel,
          status = _this$props3.status,
          stepNumber = _this$props3.stepNumber;
      if (status !== "incomplete") return null;
      return _react.default.cloneElement(incompleteStepElement, {
        label: incompleteStepElement.props && incompleteStepElement.props.label || incompleteLabel,
        stepNumber: incompleteStepElement.props && incompleteStepElement.props.stepNumber || stepNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.className
      }, this.renderActiveAction(), this.renderCompleteAction(), this.renderIncompleteAction());
    }
  }]);
  return CheckoutAction;
}(_react.Component);

CheckoutAction.propTypes = {
  /**
   * Action label when active
   */
  activeLabel: _propTypes.default.string,

  /**
   * The component to display if workflow status is `active`
   */
  activeStepElement: _propTypes.default.node.isRequired,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Action label when completed
   */
  completeLabel: _propTypes.default.string,

  /**
   * The component to display if workflow status is `complete`
   */
  completeStepElement: _propTypes.default.node.isRequired,

  /**
   * Action label when incomplete
   */
  incompleteLabel: _propTypes.default.string,

  /**
   * The component to display if workflow status is `incomplete`
   */
  incompleteStepElement: _propTypes.default.node.isRequired,

  /**
   * Status of current checkout step
   */
  status: _propTypes.default.oneOf(["active", "complete", "incomplete"]).isRequired,

  /**
   * Checkout process step number
   */
  stepNumber: _propTypes.default.number.isRequired
};
CheckoutAction.defaultProps = {
  activeLabel: "Active Step",
  completeLabel: "Completed Step",
  incompleteLabel: "Incomplete Step"
};
var _default = CheckoutAction;
exports.default = _default;