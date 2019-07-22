import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../utils";
var ActionContainer = styled.div.withConfig({
  displayName: "CheckoutActionComplete__ActionContainer",
  componentId: "sc-115d6h5-0"
})(["align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:space-between;width:100%;"]);
var ActionTitle = styled.div.withConfig({
  displayName: "CheckoutActionComplete__ActionTitle",
  componentId: "sc-115d6h5-1"
})(["", " display:flex;flex:1 0 auto;justify-content:flex-start;order:1;@media (max-width:", "px){flex:0 0 50%;margin-bottom:", ";}"], addTypographyStyles("CheckoutActionCompleteTitle", "labelText"), applyTheme("md", "breakpoints"), applyTheme("CheckoutActionComplete.mobileMargin"));
var ActionDetail = styled.div.withConfig({
  displayName: "CheckoutActionComplete__ActionDetail",
  componentId: "sc-115d6h5-2"
})(["", " display:flex;flex:2 0 auto;justify-content:flex-start;order:2;@media (max-width:959px){flex:0 0 100%;order:3;}"], addTypographyStyles("CheckoutActionCompleteDetail", "labelText"));
var ActionButton = styled.div.withConfig({
  displayName: "CheckoutActionComplete__ActionButton",
  componentId: "sc-115d6h5-3"
})(["display:flex;flex:1 0 auto;justify-content:flex-end;order:3;@media (max-width:959px){flex:0 0 50%;margin-bottom:", ";order:2;}"], applyTheme("CheckoutActionComplete.mobileMargin"));

var CheckoutActionComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckoutActionComplete, _Component);

  function CheckoutActionComplete() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckoutActionComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckoutActionComplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleOnChange = function () {
      return _this.props.onClickChangeButton();
    };

    return _this;
  }

  _createClass(CheckoutActionComplete, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Button = _this$props.components.Button,
          content = _this$props.content,
          label = _this$props.label,
          stepNumber = _this$props.stepNumber;
      var step = stepNumber ? React.createElement(Fragment, null, stepNumber, ".\xA0") : null;
      return React.createElement(ActionContainer, {
        className: className
      }, React.createElement(ActionTitle, null, step, label), React.createElement(ActionDetail, null, content), React.createElement(ActionButton, null, React.createElement(Button, {
        actionType: "important",
        onClick: this.handleOnChange,
        isShortHeight: true,
        isTextOnly: true
      }, "Change")));
    }
  }]);

  return CheckoutActionComplete;
}(Component);

CheckoutActionComplete.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction Button component or your own component that
     * accepts compatible props.
     */
    Button: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Component to pass down to show as content
   */
  content: PropTypes.node,

  /**
   * Label of Action
   */
  label: PropTypes.string.isRequired,

  /**
   * Onclick function to pass to the Button component. Not handled internally, directly passed
   */
  onClickChangeButton: PropTypes.func.isRequired,

  /**
   * Checkout process step number
   */
  stepNumber: PropTypes.number
};
export default withComponents(CheckoutActionComplete);