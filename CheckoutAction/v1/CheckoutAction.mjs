import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyTheme } from "../../utils";
var CompleteActionWrapper = styled.div.withConfig({
  displayName: "CheckoutAction__CompleteActionWrapper",
  componentId: "sc-1ye3yw9-0"
})(["padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], applyTheme("CheckoutActionComplete.paddingBottom"), applyTheme("CheckoutActionComplete.paddingLeft"), applyTheme("CheckoutActionComplete.paddingRight"), applyTheme("CheckoutActionComplete.paddingTop"));

var CheckoutAction =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckoutAction, _Component);

  function CheckoutAction() {
    _classCallCheck(this, CheckoutAction);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckoutAction).apply(this, arguments));
  }

  _createClass(CheckoutAction, [{
    key: "renderActiveAction",
    value: function renderActiveAction() {
      var _this$props = this.props,
          activeStepElement = _this$props.activeStepElement,
          activeLabel = _this$props.activeLabel,
          status = _this$props.status,
          stepNumber = _this$props.stepNumber;
      if (status !== "active") return null;
      return React.cloneElement(activeStepElement, {
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
      var component = React.cloneElement(completeStepElement, {
        label: completeStepElement.props && completeStepElement.props.label || completeLabel,
        stepNumber: completeStepElement.props && completeStepElement.props.stepNumber || stepNumber
      });
      return React.createElement(CompleteActionWrapper, null, component);
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
      return React.cloneElement(incompleteStepElement, {
        label: incompleteStepElement.props && incompleteStepElement.props.label || incompleteLabel,
        stepNumber: incompleteStepElement.props && incompleteStepElement.props.stepNumber || stepNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: this.props.className
      }, this.renderActiveAction(), this.renderCompleteAction(), this.renderIncompleteAction());
    }
  }]);

  return CheckoutAction;
}(Component);

CheckoutAction.propTypes = {
  /**
   * Action label when active
   */
  activeLabel: PropTypes.string,

  /**
   * The component to display if workflow status is `active`
   */
  activeStepElement: PropTypes.node.isRequired,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Action label when completed
   */
  completeLabel: PropTypes.string,

  /**
   * The component to display if workflow status is `complete`
   */
  completeStepElement: PropTypes.node.isRequired,

  /**
   * Action label when incomplete
   */
  incompleteLabel: PropTypes.string,

  /**
   * The component to display if workflow status is `incomplete`
   */
  incompleteStepElement: PropTypes.node.isRequired,

  /**
   * Status of current checkout step
   */
  status: PropTypes.oneOf(["active", "complete", "incomplete"]).isRequired,

  /**
   * Checkout process step number
   */
  stepNumber: PropTypes.number.isRequired
};
CheckoutAction.defaultProps = {
  activeLabel: "Active Step",
  completeLabel: "Completed Step",
  incompleteLabel: "Incomplete Step"
};
export default CheckoutAction;