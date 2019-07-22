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

var Container = _styledComponents.default.div.withConfig({
  displayName: "ShopLogo__Container",
  componentId: "mz43d0-0"
})(["", ""], (0, _utils.addTypographyStyles)("ShopLogo", "titleTextBold"));

var Logo = _styledComponents.default.img.withConfig({
  displayName: "ShopLogo__Logo",
  componentId: "mz43d0-1"
})(["height:", ";"], (0, _utils.applyTheme)("ShopLogo.height"));

var ShopLogo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ShopLogo, _Component);

  function ShopLogo() {
    (0, _classCallCheck2.default)(this, ShopLogo);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ShopLogo).apply(this, arguments));
  }

  (0, _createClass2.default)(ShopLogo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          shopLogoUrl = _this$props.shopLogoUrl,
          shopName = _this$props.shopName;
      return _react.default.createElement(Container, {
        className: className
      }, shopLogoUrl ? _react.default.createElement(Logo, {
        src: shopLogoUrl,
        alt: shopName
      }) : shopName);
    }
  }]);
  return ShopLogo;
}(_react.Component);

exports.default = ShopLogo;
ShopLogo.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * The primary shop's logo url
   */
  shopLogoUrl: _propTypes.default.string,

  /**
   * The primary shop's name
   */
  shopName: _propTypes.default.string.isRequired
};