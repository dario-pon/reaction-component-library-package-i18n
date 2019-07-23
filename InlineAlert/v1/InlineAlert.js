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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var StyledDiv = _styledComponents.default.div.withConfig({
  displayName: "InlineAlert__StyledDiv",
  componentId: "jeunyl-0"
})(["", ";border-radius:", ";border-style:", ";border-width:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";position:relative;white-space:pre-wrap;overflow:hidden;max-height:", ";opacity:", ";transition:", ";", ";"], (0, _utils.addTypographyStyles)("InlineAlert", "bodyText"), (0, _utils.applyTheme)("InlineAlert.borderRadius"), (0, _utils.applyTheme)("InlineAlert.borderStyle"), function (_ref) {
  var isClosed = _ref.isClosed;
  return isClosed ? "0px" : (0, _utils.applyTheme)("InlineAlert.borderWidth");
}, function (_ref2) {
  var isClosed = _ref2.isClosed;
  return isClosed ? "0px" : (0, _utils.applyTheme)("InlineAlert.paddingBottom");
}, function (_ref3) {
  var isClosed = _ref3.isClosed;
  return isClosed ? "0px" : (0, _utils.applyTheme)("InlineAlert.paddingLeft");
}, function (_ref4) {
  var isClosed = _ref4.isClosed;
  return isClosed ? "0px" : (0, _utils.applyTheme)("InlineAlert.paddingRight");
}, function (_ref5) {
  var isClosed = _ref5.isClosed;
  return isClosed ? "0px" : (0, _utils.applyTheme)("InlineAlert.paddingTop");
}, function (_ref6) {
  var isClosed = _ref6.isClosed;
  return isClosed ? "0px" : "3000vh";
}, function (_ref7) {
  var isClosed = _ref7.isClosed;
  return isClosed ? 0 : 1;
}, (0, _utils.applyTheme)("InlineAlert.transition"), function (props) {
  var alertType = props.alertType;

  switch (alertType) {
    case "error":
      return (0, _styledComponents.css)(["color:", ";background-color:", ";border-color:", ";"], (0, _utils.applyTheme)("InlineAlert.color_error"), (0, _utils.applyTheme)("InlineAlert.backgroundColor_error"), (0, _utils.applyTheme)("InlineAlert.borderColor_error"));

    case "information":
      return (0, _styledComponents.css)(["color:", ";background-color:", ";border-color:", ";"], (0, _utils.applyTheme)("InlineAlert.color_information"), (0, _utils.applyTheme)("InlineAlert.backgroundColor_information"), (0, _utils.applyTheme)("InlineAlert.borderColor_information"));

    case "success":
      return (0, _styledComponents.css)(["color:", ";background-color:", ";border-color:", ";"], (0, _utils.applyTheme)("InlineAlert.color_success"), (0, _utils.applyTheme)("InlineAlert.backgroundColor_success"), (0, _utils.applyTheme)("InlineAlert.borderColor_success"));

    case "warning":
      return (0, _styledComponents.css)(["color:", ";background-color:", ";border-color:", ";"], (0, _utils.applyTheme)("InlineAlert.color_warning"), (0, _utils.applyTheme)("InlineAlert.backgroundColor_warning"), (0, _utils.applyTheme)("InlineAlert.borderColor_warning"));

    default:
      return (0, _styledComponents.css)(["display:none;"]);
  }
});

var StyledTitle = _styledComponents.default.div.withConfig({
  displayName: "InlineAlert__StyledTitle",
  componentId: "jeunyl-1"
})(["", ";padding-bottom:", ";"], (0, _utils.addTypographyStyles)("InlineAlert", "bodyTextSemiBold"), (0, _utils.applyTheme)("InlineAlert.titlePaddingBottom"));

var StyledDismissButton = _styledComponents.default.button.withConfig({
  displayName: "InlineAlert__StyledDismissButton",
  componentId: "jeunyl-2"
})(["background-color:transparent;border:none;cursor:pointer;height:", ";padding:0;position:absolute;right:", ";top:", ";width:", ";"], (0, _utils.applyTheme)("InlineAlert.buttonHeight"), (0, _utils.applyTheme)("InlineAlert.buttonPositionRight"), (0, _utils.applyTheme)("InlineAlert.buttonPositionTop"), (0, _utils.applyTheme)("InlineAlert.buttonWidth"));

var InlineAlert =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InlineAlert, _Component);

  function InlineAlert() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InlineAlert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InlineAlert)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  (0, _createClass2.default)(InlineAlert, [{
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
      return _react.default.createElement(StyledDiv, {
        className: className,
        alertType: alertType,
        isClosed: isClosed
      }, title ? _react.default.createElement(StyledTitle, null, title) : null, isDismissable ? _react.default.createElement(StyledDismissButton, {
        type: "button",
        "aria-label": t('close'),
        onClick: this.handleDismissClick,
        onKeyPress: this.handleDismissKeyPress
      }, iconDismiss) : null, message);
    }
  }]);
  return InlineAlert;
}(_react.Component);

InlineAlert.propTypes = {
  /**
   * The type of alert: Error, Information, Success or Warning
   * An empty alertType will not render an alert
   */
  alertType: _propTypes.default.oneOf(["error", "information", "success", "warning"]),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
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
     * Pass an element (e.g., rendered SVG) to use as the Dismiss/Close icon
     */
    iconDismiss: _propTypes.default.node
  }),

  /**
   * isAutoClosing: Closes automatically in 10 seconds
   */
  isAutoClosing: _propTypes.default.bool,

  /**
   * isClosed: Whether the alert is closed or open
   */
  isClosed: _propTypes.default.bool,

  /**
   * isDismissable: Display a Close/Dismiss button
   */
  isDismissable: _propTypes.default.bool,

  /**
   * Alert message
   */
  message: _propTypes.default.string,

  /**
   * Alert title, optional
   */
  title: _propTypes.default.string
};
InlineAlert.defaultProps = {
  actionType: "",
  message: "",
  isAutoClosing: false,
  isClosed: false,
  isDismissable: false
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(InlineAlert)); // auto-add i18n


exports.default = _default;