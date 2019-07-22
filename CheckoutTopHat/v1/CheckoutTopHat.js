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

var TopHatContainer = _styledComponents.default.div.withConfig({
  displayName: "CheckoutTopHat__TopHatContainer",
  componentId: "a5n5fr-0"
})(["background-color:", ";display:flex;height:", ";justify-content:center;width:100%;"], (0, _utils.applyTheme)("CheckoutTopHat.backgroundColor"), (0, _utils.applyTheme)("CheckoutTopHat.height"));

var TopHatMessage = _styledComponents.default.div.withConfig({
  displayName: "CheckoutTopHat__TopHatMessage",
  componentId: "a5n5fr-1"
})(["", " align-items:center;display:flex;"], (0, _utils.addTypographyStyles)("CheckoutTopHatMessage", "labelTextBold"));

var CheckoutTopHat =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CheckoutTopHat, _Component);

  function CheckoutTopHat() {
    (0, _classCallCheck2.default)(this, CheckoutTopHat);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CheckoutTopHat).apply(this, arguments));
  }

  (0, _createClass2.default)(CheckoutTopHat, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          checkoutMessage = _this$props.checkoutMessage;

      if (checkoutMessage) {
        return _react.default.createElement(TopHatContainer, {
          className: className
        }, _react.default.createElement(TopHatMessage, null, checkoutMessage));
      }

      return null;
    }
  }]);
  return CheckoutTopHat;
}(_react.Component);

CheckoutTopHat.propTypes = {
  checkoutMessage: _propTypes.default.string,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string
};
var _default = CheckoutTopHat;
exports.default = _default;