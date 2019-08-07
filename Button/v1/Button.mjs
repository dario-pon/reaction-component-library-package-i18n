import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, preventAccidentalDoubleClick } from "../../utils";
import applyThemeWithActionType from "./utils/applyThemeWithActionType";

var paddingFunc = function paddingFunc(props) {
  var isShortHeight = props.isShortHeight;
  if (isShortHeight) return applyTheme("Button.verticalPaddingShort");
  return applyTheme("Button.verticalPadding");
};

var ButtonDiv = styled.div.withConfig({
  displayName: "Button__ButtonDiv",
  componentId: "sc-1r73v88-0"
})(["-webkit-font-smoothing:antialiased;align-items:center;background-color:", ";border-color:", ";border-style:solid;border-width:1px;border-radius:", ";box-sizing:border-box;color:", ";cursor:", ";display:", ";font-family:\"Source Sans Pro\",\"Helvetica Neue\",Helvetica,sans-serif;justify-content:center;margin:0;min-width:", ";outline:none;padding-left:", ";padding-right:", ";padding-top:", ";padding-bottom:", ";position:relative;text-align:center;user-select:none;width:", ";&:hover{background-color:", ";border-color:", ";color:", ";}&:active{background-color:", ";border-color:", ";color:", ";}"], applyThemeWithActionType("Button.backgroundColor"), applyThemeWithActionType("Button.borderColor"), applyTheme("Button.borderRadius"), applyThemeWithActionType("Button.foregroundColor"), function (props) {
  var isDisabled = props.isDisabled;

  if (isDisabled) {
    return "default";
  }

  return "pointer";
}, function (props) {
  var isFullWidth = props.isFullWidth;

  if (isFullWidth) {
    return "flex";
  }

  return "inline-flex";
}, function (props) {
  return props.isTextOnlyNoPadding ? 0 : applyTheme("Button.minimumWidth")(props);
}, function (props) {
  var isTextOnlyNoPadding = props.isTextOnlyNoPadding;

  if (isTextOnlyNoPadding) {
    return "0px";
  }

  return applyTheme("Button.horizontalPadding")(props);
}, function (props) {
  var isTextOnlyNoPadding = props.isTextOnlyNoPadding;

  if (isTextOnlyNoPadding) {
    return "0px";
  }

  return applyTheme("Button.horizontalPadding")(props);
}, paddingFunc, paddingFunc, function (props) {
  return props.isFullWidth ? "100%" : "fit-content";
}, applyThemeWithActionType("Button.backgroundColor", "hover"), applyThemeWithActionType("Button.borderColor", "hover"), applyThemeWithActionType("Button.foregroundColor", "hover"), applyThemeWithActionType("Button.backgroundColor", "active"), applyThemeWithActionType("Button.borderColor", "active"), applyThemeWithActionType("Button.foregroundColor", "active"));
var SpinnerWrap = styled.div.withConfig({
  displayName: "Button__SpinnerWrap",
  componentId: "sc-1r73v88-1"
})(["display:flex;overflow:hidden;padding-left:", ";transition:width 0.2s ease-out 0s,padding-left 0.2s ease-out 0s,opacity 0.2s ease-out 0.2s;& svg path,& svg rect{fill:", ";}"], applyTheme("Button.horizontalPadding"), applyThemeWithActionType("Button.foregroundColor"));
var WaitingOverlay = styled.div.withConfig({
  displayName: "Button__WaitingOverlay",
  componentId: "sc-1r73v88-2"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,0.5);"]);

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.handleClick = preventAccidentalDoubleClick(function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          isDisabled = _this$props.isDisabled,
          isWaiting = _this$props.isWaiting,
          onClick = _this$props.onClick;
      if (!isDisabled && !isWaiting) onClick();
    });

    _this.handleKeyPress = function (event) {
      if (event.keyCode === 13) _this.handleClick(event);
    };

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          actionType = _this$props2.actionType,
          children = _this$props2.children,
          className = _this$props2.className,
          components = _this$props2.components,
          isDisabled = _this$props2.isDisabled,
          isFullWidth = _this$props2.isFullWidth,
          isShortHeight = _this$props2.isShortHeight,
          isTextOnly = _this$props2.isTextOnly,
          isTextOnlyNoPadding = _this$props2.isTextOnlyNoPadding,
          isWaiting = _this$props2.isWaiting,
          title = _this$props2.title;

      var _ref = components || {},
          spinner = _ref.spinner;

      var moreButtonDivProps = {};

      if (isDisabled) {
        moreButtonDivProps["aria-disabled"] = "true";
      } // wrap text children so that ButtonDiv flex styling applies correctly


      var kids;

      if (typeof children === "string") {
        kids = React.createElement("div", null, children);
      } else {
        kids = children;
      }

      var spinnerStyles = {};

      if (isWaiting) {
        spinnerStyles.width = "auto";
        spinnerStyles.opacity = 100;
      } else {
        spinnerStyles.width = 0;
        spinnerStyles.paddingLeft = 0;
        spinnerStyles.opacity = 0;
      }

      return React.createElement(ButtonDiv, _extends({
        actionType: actionType,
        className: className,
        isDisabled: isDisabled,
        isFullWidth: isFullWidth,
        isShortHeight: isShortHeight,
        isTextOnly: isTextOnly,
        isTextOnlyNoPadding: isTextOnlyNoPadding,
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress,
        role: "button",
        tabIndex: 0,
        title: title
      }, moreButtonDivProps), kids, React.createElement(SpinnerWrap, {
        actionType: actionType,
        isDisabled: isDisabled,
        isTextOnly: isTextOnly,
        isTextOnlyNoPadding: isTextOnlyNoPadding,
        style: spinnerStyles
      }, spinner), !!isWaiting && React.createElement(WaitingOverlay, null));
    }
  }]);

  return Button;
}(Component);

Button.propTypes = {
  /**
   * The type of action performed by the button
   */
  actionType: PropTypes.oneOf(["danger", "default", "important", "secondary", "secondaryDanger"]),

  /**
   * The contents of the button, such as text, icons, or any combination of React and HTML components
   */
  children: PropTypes.node,

  /**
   * Classes for the button element
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
     * A spinner element to show on the button when `isWaiting` is true. You can also
     * set this to `null` to prevent adding a spinner to the button while waiting.
     */
    spinner: PropTypes.node
  }),

  /**
   * Set to `true` to prevent the button from calling `onClick` when clicked
   */
  isDisabled: PropTypes.bool,

  /**
   * Button should take full width
   */
  isFullWidth: PropTypes.bool,

  /**
   * Enable this when you don’t have enough vertical space, such as in table headers
   */
  isShortHeight: PropTypes.bool,

  /**
   * Enable this in rare cases where having a solid or outline button for an action would be cluttered and visually confusing.
   */
  isTextOnly: PropTypes.bool,

  /**
   * Enable this in rare cases where left and right padding should be removed from a button to better align the button.
   */
  isTextOnlyNoPadding: PropTypes.bool,

  /**
   * Set to `true` to prevent clicks, use waiting styles, and show a spinner
   */
  isWaiting: PropTypes.bool,

  /**
   * Called with no arguments whenever the button is clicked. There is double-click protection,
   * so if the user double-clicks quickly, onClick is called only once.
   */
  onClick: PropTypes.func,

  /**
   * The string for the `title` attribute of the button element
   */
  title: PropTypes.string
};
Button.defaultProps = {
  actionType: "default",
  isDisabled: false,
  isFullWidth: false,
  isWaiting: false,
  onClick: function onClick() {}
};
export default i18n.withTranslation()(withComponents(Button)); // auto-add i18n