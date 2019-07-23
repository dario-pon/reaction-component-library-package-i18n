import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles } from "../../utils";
var CheckoutActionIncompleteContainer = styled.div.withConfig({
  displayName: "CheckoutActionIncomplete__CheckoutActionIncompleteContainer",
  componentId: "sc-1vgphsw-0"
})(["", ""], addTypographyStyles("CheckoutActionIncomplete", "captionText"));

var CheckoutActionIncomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckoutActionIncomplete, _Component);

  function CheckoutActionIncomplete() {
    _classCallCheck(this, CheckoutActionIncomplete);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckoutActionIncomplete).apply(this, arguments));
  }

  _createClass(CheckoutActionIncomplete, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          label = _this$props.label,
          stepNumber = _this$props.stepNumber;
      var stepAndLabel = stepNumber ? "".concat(stepNumber, ". ").concat(label || "") : label;
      return React.createElement(CheckoutActionIncompleteContainer, {
        className: className
      }, stepAndLabel);
    }
  }]);

  return CheckoutActionIncomplete;
}(Component);

CheckoutActionIncomplete.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * The incomplete action name
   */
  label: PropTypes.string,

  /**
   * Checkout process step number
   */
  stepNumber: PropTypes.number
};
export default i18n.withTranslation()(CheckoutActionIncomplete); // auto-add i18n