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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var PriceDiv = _styledComponents.default.div.withConfig({
  displayName: "Price__PriceDiv",
  componentId: "pq9jnq-0"
})(["", ""], (0, _utils.addTypographyStyles)("Price", "labelText"));

var Del = _styledComponents.default.del.withConfig({
  displayName: "Price__Del",
  componentId: "pq9jnq-1"
})(["", " display:block;"], (0, _utils.addTypographyStyles)("PriceCompare", "labelText"));

var Price =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Price, _Component);

  function Price() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Price);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Price)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderCompareAtPrice = function () {
      var _this$props = _this.props,
          displayCompareAtPrice = _this$props.displayCompareAtPrice,
          displayPrice = _this$props.displayPrice; // If there is no price difference, don't render compare at price.

      if (displayPrice === displayCompareAtPrice) return null;
      return _react.default.createElement(Del, null, displayCompareAtPrice);
    };

    return _this;
  }

  (0, _createClass2.default)(Price, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          displayCompareAtPrice = _this$props2.displayCompareAtPrice,
          displayPrice = _this$props2.displayPrice,
          hasPriceBottom = _this$props2.hasPriceBottom;
      return _react.default.createElement("div", {
        className: className
      }, hasPriceBottom ? "" : _react.default.createElement(PriceDiv, null, displayPrice), displayCompareAtPrice ? this.renderCompareAtPrice() : null, hasPriceBottom ? _react.default.createElement(PriceDiv, null, displayPrice) : "");
    }
  }]);
  return Price;
}(_react.Component);

Price.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * A comparison price value, usually MSRP.
   * This value is expected to have the currency symbol, i.e. $300.00
   */
  displayCompareAtPrice: _propTypes.default.string,

  /**
   * The product's price.
   * This value is expected to have the currency symbol, i.e. $300.00
   */
  displayPrice: _propTypes.default.string.isRequired,

  /**
   * Renders price below the compare at price
   */
  hasPriceBottom: _propTypes.default.bool
};
var _default = Price;
exports.default = _default;