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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var ActionContainer = _styledComponents.default.div.withConfig({
  displayName: "CheckoutActionComplete__ActionContainer",
  componentId: "sc-115d6h5-0"
})(["align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:space-between;width:100%;"]);

var ActionTitle = _styledComponents.default.div.withConfig({
  displayName: "CheckoutActionComplete__ActionTitle",
  componentId: "sc-115d6h5-1"
})(["", " display:flex;flex:1 0 auto;justify-content:flex-start;order:1;@media (max-width:", "px){flex:0 0 50%;margin-bottom:", ";}"], (0, _utils.addTypographyStyles)("CheckoutActionCompleteTitle", "labelText"), (0, _utils.applyTheme)("md", "breakpoints"), (0, _utils.applyTheme)("CheckoutActionComplete.mobileMargin"));

var ActionDetail = _styledComponents.default.div.withConfig({
  displayName: "CheckoutActionComplete__ActionDetail",
  componentId: "sc-115d6h5-2"
})(["", " display:flex;flex:2 0 auto;justify-content:flex-start;order:2;@media (max-width:959px){flex:0 0 100%;order:3;}"], (0, _utils.addTypographyStyles)("CheckoutActionCompleteDetail", "labelText"));

var ActionButton = _styledComponents.default.div.withConfig({
  displayName: "CheckoutActionComplete__ActionButton",
  componentId: "sc-115d6h5-3"
})(["display:flex;flex:1 0 auto;justify-content:flex-end;order:3;@media (max-width:959px){flex:0 0 50%;margin-bottom:", ";order:2;}"], (0, _utils.applyTheme)("CheckoutActionComplete.mobileMargin"));

var CheckoutActionComplete =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CheckoutActionComplete, _Component);

  function CheckoutActionComplete() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CheckoutActionComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CheckoutActionComplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleOnChange = function () {
      return _this.props.onClickChangeButton();
    };

    return _this;
  }

  (0, _createClass2.default)(CheckoutActionComplete, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Button = _this$props.components.Button,
          content = _this$props.content,
          label = _this$props.label,
          stepNumber = _this$props.stepNumber;
      var step = stepNumber ? _react.default.createElement(_react.Fragment, null, stepNumber, ".\xA0") : null;
      return _react.default.createElement(ActionContainer, {
        className: className
      }, _react.default.createElement(ActionTitle, null, step, label), _react.default.createElement(ActionDetail, null, content), _react.default.createElement(ActionButton, null, _react.default.createElement(Button, {
        actionType: "important",
        onClick: this.handleOnChange,
        isShortHeight: true,
        isTextOnly: true
      }, "Change")));
    }
  }]);
  return CheckoutActionComplete;
}(_react.Component);

CheckoutActionComplete.propTypes = {
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
     * Pass either the Reaction Button component or your own component that
     * accepts compatible props.
     */
    Button: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Component to pass down to show as content
   */
  content: _propTypes.default.node,

  /**
   * Label of Action
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Onclick function to pass to the Button component. Not handled internally, directly passed
   */
  onClickChangeButton: _propTypes.default.func.isRequired,

  /**
   * Checkout process step number
   */
  stepNumber: _propTypes.default.number
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(CheckoutActionComplete)); // auto-add i18n


exports.default = _default;