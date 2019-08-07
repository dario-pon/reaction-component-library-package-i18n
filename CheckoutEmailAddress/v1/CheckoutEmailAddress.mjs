import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../utils";
var StyledDiv = styled.div.withConfig({
  displayName: "CheckoutEmailAddress__StyledDiv",
  componentId: "sc-1vg3525-0"
})(["", " border-bottom-color:", ";border-bottom-style:solid;border-bottom-width:", ";border-left-color:", ";border-left-style:solid;border-left-width:", ";border-right-color:", ";border-right-style:solid;border-right-width:", ";border-top-color:", ";border-top-style:solid;border-top-width:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], addTypographyStyles("CheckoutEmailAddress", "labelText"), applyTheme("CheckoutEmailAddress.borderBottomColor"), applyTheme("CheckoutEmailAddress.borderBottomWidth"), applyTheme("CheckoutEmailAddress.borderLeftColor"), applyTheme("CheckoutEmailAddress.borderLeftWidth"), applyTheme("CheckoutEmailAddress.borderRightColor"), applyTheme("CheckoutEmailAddress.borderRightWidth"), applyTheme("CheckoutEmailAddress.borderTopColor"), applyTheme("CheckoutEmailAddress.borderTopWidth"), applyTheme("CheckoutEmailAddress.paddingBottom"), applyTheme("CheckoutEmailAddress.paddingLeft"), applyTheme("CheckoutEmailAddress.paddingRight"), applyTheme("CheckoutEmailAddress.paddingTop"));
var StyledSpan = styled.span.withConfig({
  displayName: "CheckoutEmailAddress__StyledSpan",
  componentId: "sc-1vg3525-1"
})(["", ""], addTypographyStyles("CheckoutEmailAddressEmphasis", "labelTextBold"));

var CheckoutEmailAddress =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckoutEmailAddress, _Component);

  function CheckoutEmailAddress() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckoutEmailAddress);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckoutEmailAddress)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderAccountEmail = function () {
      var isAccountEmail = _this.props.isAccountEmail;

      if (isAccountEmail) {
        return "Signed in as";
      }

      return null;
    };

    return _this;
  }

  _createClass(CheckoutEmailAddress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          emailAddress = _this$props.emailAddress;
      return React.createElement(StyledDiv, {
        className: className
      }, this.renderAccountEmail(), " ", React.createElement(StyledSpan, null, emailAddress));
    }
  }]);

  return CheckoutEmailAddress;
}(Component);

CheckoutEmailAddress.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,
  emailAddress: PropTypes.string.isRequired,
  isAccountEmail: PropTypes.bool.isRequired
};
export default i18n.withTranslation()(CheckoutEmailAddress); // auto-add i18n