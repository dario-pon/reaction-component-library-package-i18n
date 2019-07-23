"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _applyThemeWithActionType = _interopRequireDefault(require("./utils/applyThemeWithActionType"));

// auto-add i18n 
var paddingFunc = function paddingFunc(props) {
  var isShortHeight = props.isShortHeight;
  if (isShortHeight) return (0, _utils.applyTheme)("Button.verticalPaddingShort");
  return (0, _utils.applyTheme)("Button.verticalPadding");
};

var ButtonDiv = _styledComponents.default.div.withConfig({
  displayName: "Button__ButtonDiv",
  componentId: "sc-1r73v88-0"
})(["-webkit-font-smoothing:antialiased;align-items:center;background-color:", ";border-color:", ";border-style:solid;border-width:1px;border-radius:", ";box-sizing:border-box;color:", ";cursor:", ";display:", ";font-family:\"Source Sans Pro\",\"Helvetica Neue\",Helvetica,sans-serif;justify-content:center;margin:0;min-width:", ";outline:none;padding-left:", ";padding-right:", ";padding-top:", ";padding-bottom:", ";position:relative;text-align:center;user-select:none;width:", ";&:hover{background-color:", ";border-color:", ";color:", ";}&:active{background-color:", ";border-color:", ";color:", ";}"], (0, _applyThemeWithActionType.default)("Button.backgroundColor"), (0, _applyThemeWithActionType.default)("Button.borderColor"), (0, _utils.applyTheme)("Button.borderRadius"), (0, _applyThemeWithActionType.default)("Button.foregroundColor"), function (props) {
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
  return props.isTextOnlyNoPadding ? 0 : (0, _utils.applyTheme)("Button.minimumWidth")(props);
}, function (props) {
  var isTextOnlyNoPadding = props.isTextOnlyNoPadding;

  if (isTextOnlyNoPadding) {
    return "0px";
  }

  return (0, _utils.applyTheme)("Button.horizontalPadding")(props);
}, function (props) {
  var isTextOnlyNoPadding = props.isTextOnlyNoPadding;

  if (isTextOnlyNoPadding) {
    return "0px";
  }

  return (0, _utils.applyTheme)("Button.horizontalPadding")(props);
}, paddingFunc, paddingFunc, function (props) {
  return props.isFullWidth ? "100%" : "fit-content";
}, (0, _applyThemeWithActionType.default)("Button.backgroundColor", "hover"), (0, _applyThemeWithActionType.default)("Button.borderColor", "hover"), (0, _applyThemeWithActionType.default)("Button.foregroundColor", "hover"), (0, _applyThemeWithActionType.default)("Button.backgroundColor", "active"), (0, _applyThemeWithActionType.default)("Button.borderColor", "active"), (0, _applyThemeWithActionType.default)("Button.foregroundColor", "active"));

var SpinnerWrap = _styledComponents.default.div.withConfig({
  displayName: "Button__SpinnerWrap",
  componentId: "sc-1r73v88-1"
})(["display:flex;overflow:hidden;padding-left:", ";transition:width 0.2s ease-out 0s,padding-left 0.2s ease-out 0s,opacity 0.2s ease-out 0.2s;& svg path,& svg rect{fill:", ";}"], (0, _utils.applyTheme)("Button.horizontalPadding"), (0, _applyThemeWithActionType.default)("Button.foregroundColor"));

var WaitingOverlay = _styledComponents.default.div.withConfig({
  displayName: "Button__WaitingOverlay",
  componentId: "sc-1r73v88-2"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,0.5);"]);

var Button =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.handleClick = (0, _utils.preventAccidentalDoubleClick)(function (event) {
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

  (0, _createClass2.default)(Button, [{
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
        kids = _react.default.createElement("div", null, children);
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

      return _react.default.createElement(ButtonDiv, (0, _extends2.default)({
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
      }, moreButtonDivProps), kids, _react.default.createElement(SpinnerWrap, {
        actionType: actionType,
        isDisabled: isDisabled,
        isTextOnly: isTextOnly,
        isTextOnlyNoPadding: isTextOnlyNoPadding,
        style: spinnerStyles
      }, spinner), !!isWaiting && _react.default.createElement(WaitingOverlay, null));
    }
  }]);
  return Button;
}(_react.Component);

Button.propTypes = {
  /**
   * The type of action performed by the button
   */
  actionType: _propTypes.default.oneOf(["danger", "default", "important", "secondary", "secondaryDanger"]),

  /**
   * The contents of the button, such as text, icons, or any combination of React and HTML components
   */
  children: _propTypes.default.node,

  /**
   * Classes for the button element
   */
  className: _propTypes.default.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * A spinner element to show on the button when `isWaiting` is true. You can also
     * set this to `null` to prevent adding a spinner to the button while waiting.
     */
    spinner: _propTypes.default.node
  }),

  /**
   * Set to `true` to prevent the button from calling `onClick` when clicked
   */
  isDisabled: _propTypes.default.bool,

  /**
   * Button should take full width
   */
  isFullWidth: _propTypes.default.bool,

  /**
   * Enable this when you don’t have enough vertical space, such as in table headers
   */
  isShortHeight: _propTypes.default.bool,

  /**
   * Enable this in rare cases where having a solid or outline button for an action would be cluttered and visually confusing.
   */
  isTextOnly: _propTypes.default.bool,

  /**
   * Enable this in rare cases where left and right padding should be removed from a button to better align the button.
   */
  isTextOnlyNoPadding: _propTypes.default.bool,

  /**
   * Set to `true` to prevent clicks, use waiting styles, and show a spinner
   */
  isWaiting: _propTypes.default.bool,

  /**
   * Called with no arguments whenever the button is clicked. There is double-click protection,
   * so if the user double-clicks quickly, onClick is called only once.
   */
  onClick: _propTypes.default.func,

  /**
   * The string for the `title` attribute of the button element
   */
  title: _propTypes.default.string
};
Button.defaultProps = {
  actionType: "default",
  isDisabled: false,
  isFullWidth: false,
  isWaiting: false,
  onClick: function onClick() {}
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(Button)); // auto-add i18n


exports.default = _default;