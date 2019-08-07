import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles } from "../../utils";
var StyledDiv = styled.div.withConfig({
  displayName: "InlineAlert__StyledDiv",
  componentId: "jeunyl-0"
})(["", ";border-radius:", ";border-style:", ";border-width:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";position:relative;white-space:pre-wrap;overflow:hidden;max-height:", ";opacity:", ";transition:", ";", ";"], addTypographyStyles("InlineAlert", "bodyText"), applyTheme("InlineAlert.borderRadius"), applyTheme("InlineAlert.borderStyle"), function (_ref) {
  var isClosed = _ref.isClosed;
  return isClosed ? "0px" : applyTheme("InlineAlert.borderWidth");
}, function (_ref2) {
  var isClosed = _ref2.isClosed;
  return isClosed ? "0px" : applyTheme("InlineAlert.paddingBottom");
}, function (_ref3) {
  var isClosed = _ref3.isClosed;
  return isClosed ? "0px" : applyTheme("InlineAlert.paddingLeft");
}, function (_ref4) {
  var isClosed = _ref4.isClosed;
  return isClosed ? "0px" : applyTheme("InlineAlert.paddingRight");
}, function (_ref5) {
  var isClosed = _ref5.isClosed;
  return isClosed ? "0px" : applyTheme("InlineAlert.paddingTop");
}, function (_ref6) {
  var isClosed = _ref6.isClosed;
  return isClosed ? "0px" : "3000vh";
}, function (_ref7) {
  var isClosed = _ref7.isClosed;
  return isClosed ? 0 : 1;
}, applyTheme("InlineAlert.transition"), function (props) {
  var alertType = props.alertType;

  switch (alertType) {
    case "error":
      return css(["color:", ";background-color:", ";border-color:", ";"], applyTheme("InlineAlert.color_error"), applyTheme("InlineAlert.backgroundColor_error"), applyTheme("InlineAlert.borderColor_error"));

    case "information":
      return css(["color:", ";background-color:", ";border-color:", ";"], applyTheme("InlineAlert.color_information"), applyTheme("InlineAlert.backgroundColor_information"), applyTheme("InlineAlert.borderColor_information"));

    case "success":
      return css(["color:", ";background-color:", ";border-color:", ";"], applyTheme("InlineAlert.color_success"), applyTheme("InlineAlert.backgroundColor_success"), applyTheme("InlineAlert.borderColor_success"));

    case "warning":
      return css(["color:", ";background-color:", ";border-color:", ";"], applyTheme("InlineAlert.color_warning"), applyTheme("InlineAlert.backgroundColor_warning"), applyTheme("InlineAlert.borderColor_warning"));

    default:
      return css(["display:none;"]);
  }
});
var StyledTitle = styled.div.withConfig({
  displayName: "InlineAlert__StyledTitle",
  componentId: "jeunyl-1"
})(["", ";padding-bottom:", ";"], addTypographyStyles("InlineAlert", "bodyTextSemiBold"), applyTheme("InlineAlert.titlePaddingBottom"));
var StyledDismissButton = styled.button.withConfig({
  displayName: "InlineAlert__StyledDismissButton",
  componentId: "jeunyl-2"
})(["background-color:transparent;border:none;cursor:pointer;height:", ";padding:0;position:absolute;right:", ";top:", ";width:", ";"], applyTheme("InlineAlert.buttonHeight"), applyTheme("InlineAlert.buttonPositionRight"), applyTheme("InlineAlert.buttonPositionTop"), applyTheme("InlineAlert.buttonWidth"));

var InlineAlert =
  /*#__PURE__*/
  function (_Component) {
    _inherits(InlineAlert, _Component);

    function InlineAlert() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, InlineAlert);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InlineAlert)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        isClosed: _this.props.isClosed
      };

      _this.handleDismissClick = function (event) {
        event.preventDefault();

        _this.setState({
          isClosed: true
        });
      };

      _this.handleDismissKeyPress = function (event) {
        if (event.keyCode === 13) _this.handleDismissClick(_this.setState({
          isClosed: true
        }));
      };

      _this.autoClose = function () {
        window.setTimeout(10000, _this.setState({
          isClosed: true
        }));
      };

      return _this;
    }

    _createClass(InlineAlert, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        if (this.props.isAutoClosing === true) {
          setTimeout(function () {
            _this2.setState({
              isClosed: true
            });
          }, 10000);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          alertType = _this$props.alertType,
          className = _this$props.className,
          components = _this$props.components,
          isDismissable = _this$props.isDismissable,
          message = _this$props.message,
          title = _this$props.title;

        var _ref8 = components || {},
          iconDismiss = _ref8.iconDismiss;

        var isClosed = this.state.isClosed;
        return React.createElement(StyledDiv, {
          className: className,
          alertType: alertType,
          isClosed: isClosed
        }, title ? React.createElement(StyledTitle, null, title) : null, isDismissable ? React.createElement(StyledDismissButton, {
          type: "button",
          "aria-label": t('close'),
          onClick: this.handleDismissClick,
          onKeyPress: this.handleDismissKeyPress
        }, iconDismiss) : null, message);
      }
    }]);

    return InlineAlert;
  }(Component);

InlineAlert.propTypes = {
  /**
   * The type of alert: Error, Information, Success or Warning
   * An empty alertType will not render an alert
   */
  alertType: PropTypes.oneOf(["error", "information", "success", "warning"]),

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
     * Pass an element (e.g., rendered SVG) to use as the Dismiss/Close icon
     */
    iconDismiss: PropTypes.node
  }),

  /**
   * isAutoClosing: Closes automatically in 10 seconds
   */
  isAutoClosing: PropTypes.bool,

  /**
   * isClosed: Whether the alert is closed or open
   */
  isClosed: PropTypes.bool,

  /**
   * isDismissable: Display a Close/Dismiss button
   */
  isDismissable: PropTypes.bool,

  /**
   * Alert message
   */
  message: PropTypes.string,

  /**
   * Alert title, optional
   */
  title: PropTypes.string
};
InlineAlert.defaultProps = {
  actionType: "",
  message: "",
  isAutoClosing: false,
  isClosed: false,
  isDismissable: false
};
export default i18n.withTranslation()(withComponents(InlineAlert)); // auto-add i18n