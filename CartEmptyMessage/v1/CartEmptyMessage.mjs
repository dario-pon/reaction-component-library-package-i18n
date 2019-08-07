import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../utils";
var EmptyButton = styled.div.withConfig({
  displayName: "CartEmptyMessage__EmptyButton",
  componentId: "e1n47h-0"
})(["display:flex;justify-content:center;"]);
var EmptyMessage = styled.div.withConfig({
  displayName: "CartEmptyMessage__EmptyMessage",
  componentId: "e1n47h-1"
})(["", " display:flex;justify-content:center;margin-bottom:", ";"], addTypographyStyles("CartEmptyMessage", "bodyText"), applyTheme("CartEmptyMessage.textToButtonSpacing"));

var CartEmptyMessage =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CartEmptyMessage, _Component);

    function CartEmptyMessage() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, CartEmptyMessage);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CartEmptyMessage)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.handleOnClick = function () {
        _this.props.onClick();
      };

      return _this;
    }

    _createClass(CartEmptyMessage, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
          buttonText = _this$props.buttonText,
          components = _this$props.components,
          messageText = _this$props.messageText;
        var Button = components.Button;
        return React.createElement(Fragment, null, React.createElement(EmptyMessage, null, t(messageText)), React.createElement(EmptyButton, null, React.createElement(Button, {
          actionType: "important",
          onClick: this.handleOnClick
        }, t(buttonText))));
      }
    }]);

    return CartEmptyMessage;
  }(Component);

CartEmptyMessage.propTypes = {
  /**
   * Text to display inside the button
   */
  buttonText: PropTypes.string,

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
   * Text to display inside the message area
   */
  messageText: PropTypes.string,

  /**
   * Onclick function to pass to the Button component. Not handled internally, directly passed
   */
  onClick: PropTypes.func.isRequired
};
CartEmptyMessage.defaultProps = {
  buttonText: "Continue shopping",
  messageText: "Your shopping cart is empty."
};
export default i18n.withTranslation()(withComponents(CartEmptyMessage)); // auto-add i18n