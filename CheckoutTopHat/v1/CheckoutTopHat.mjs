import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../utils";
var TopHatContainer = styled.div.withConfig({
  displayName: "CheckoutTopHat__TopHatContainer",
  componentId: "a5n5fr-0"
})(["background-color:", ";display:flex;height:", ";justify-content:center;width:100%;"], applyTheme("CheckoutTopHat.backgroundColor"), applyTheme("CheckoutTopHat.height"));
var TopHatMessage = styled.div.withConfig({
  displayName: "CheckoutTopHat__TopHatMessage",
  componentId: "a5n5fr-1"
})(["", " align-items:center;display:flex;"], addTypographyStyles("CheckoutTopHatMessage", "labelTextBold"));

var CheckoutTopHat =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckoutTopHat, _Component);

  function CheckoutTopHat() {
    _classCallCheck(this, CheckoutTopHat);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckoutTopHat).apply(this, arguments));
  }

  _createClass(CheckoutTopHat, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          checkoutMessage = _this$props.checkoutMessage;

      if (checkoutMessage) {
        return React.createElement(TopHatContainer, {
          className: className
        }, React.createElement(TopHatMessage, null, checkoutMessage));
      }

      return null;
    }
  }]);

  return CheckoutTopHat;
}(Component);

CheckoutTopHat.propTypes = {
  checkoutMessage: PropTypes.string,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string
};
export default CheckoutTopHat;