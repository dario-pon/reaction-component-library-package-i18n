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

var Span = _styledComponents.default.div.withConfig({
  displayName: "StockWarning__Span",
  componentId: "sc-17rkz97-0"
})(["", ""], (0, _utils.addTypographyStyles)("StockWarning", "labelText"));

var StockWarning =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(StockWarning, _Component);

  function StockWarning() {
    (0, _classCallCheck2.default)(this, StockWarning);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(StockWarning).apply(this, arguments));
  }

  (0, _createClass2.default)(StockWarning, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          inventoryQuantity = _this$props.inventoryQuantity,
          isLowInventoryQuantity = _this$props.isLowInventoryQuantity;
      if (!isLowInventoryQuantity) return null;
      return _react.default.createElement(Span, {
        className: className
      }, "Only ", inventoryQuantity, " in stock");
    }
  }]);
  return StockWarning;
}(_react.Component);

StockWarning.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * The product's current stock level
   */
  inventoryQuantity: _propTypes.default.number,

  /**
   * When true, indicates that a product's inventory level has reached
   * the low level threshold.
   */
  isLowInventoryQuantity: _propTypes.default.bool
};
var _default = StockWarning;
exports.default = _default;