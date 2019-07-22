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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var CheckoutActionIncompleteContainer = _styledComponents.default.div.withConfig({
  displayName: "CheckoutActionIncomplete__CheckoutActionIncompleteContainer",
  componentId: "sc-1vgphsw-0"
})(["", ""], (0, _utils.addTypographyStyles)("CheckoutActionIncomplete", "captionText"));

var CheckoutActionIncomplete =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CheckoutActionIncomplete, _Component);

  function CheckoutActionIncomplete() {
    (0, _classCallCheck2.default)(this, CheckoutActionIncomplete);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CheckoutActionIncomplete).apply(this, arguments));
  }

  (0, _createClass2.default)(CheckoutActionIncomplete, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          label = _this$props.label,
          stepNumber = _this$props.stepNumber;
      var stepAndLabel = stepNumber ? "".concat(stepNumber, ". ").concat(label || "") : label;
      return _react.default.createElement(CheckoutActionIncompleteContainer, {
        className: className
      }, stepAndLabel);
    }
  }]);
  return CheckoutActionIncomplete;
}(_react.Component);

CheckoutActionIncomplete.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * The incomplete action name
   */
  label: _propTypes.default.string,

  /**
   * Checkout process step number
   */
  stepNumber: _propTypes.default.number
};
var _default = CheckoutActionIncomplete;
exports.default = _default;