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

// auto-add i18n 
var Table = _styledComponents.default.table.withConfig({
  displayName: "MiniCartSummary__Table",
  componentId: "sc-1pnkmz7-0"
})(["width:100%;padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";"], (0, _utils.applyTheme)("MiniCartSummary.paddingTop"), (0, _utils.applyTheme)("MiniCartSummary.paddingBottom"), (0, _utils.applyTheme)("MiniCartSummary.paddingLeft"), (0, _utils.applyTheme)("MiniCartSummary.paddingRight"));

var Td = _styledComponents.default.td.withConfig({
  displayName: "MiniCartSummary__Td",
  componentId: "sc-1pnkmz7-1"
})(["", " padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";text-align:right;"], (0, _utils.addTypographyStyles)("MiniCartSummaryLeft", "bodyText"), (0, _utils.applyTheme)("MiniCartSummaryLeft.cellPaddingTop"), (0, _utils.applyTheme)("MiniCartSummaryLeft.cellPaddingBottom"), (0, _utils.applyTheme)("MiniCartSummaryLeft.cellPaddingLeft"), (0, _utils.applyTheme)("MiniCartSummaryLeft.cellPaddingRight"));

var TdValue = _styledComponents.default.td.withConfig({
  displayName: "MiniCartSummary__TdValue",
  componentId: "sc-1pnkmz7-2"
})(["", " padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";text-align:left;"], (0, _utils.addTypographyStyles)("MiniCartSummaryRight", "bodyTextBold"), (0, _utils.applyTheme)("MiniCartSummaryRight.cellPaddingTop"), (0, _utils.applyTheme)("MiniCartSummaryRight.cellPaddingBottom"), (0, _utils.applyTheme)("MiniCartSummaryRight.cellPaddingLeft"), (0, _utils.applyTheme)("MiniCartSummaryRight.cellPaddingRight"));

var MiniCartSummary =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MiniCartSummary, _Component);

  function MiniCartSummary() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, MiniCartSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MiniCartSummary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderTax = function () {
      var displayTax = _this.props.displayTax;
      return _react.default.createElement("tr", null, _react.default.createElement(Td, null, "Tax"), _react.default.createElement(TdValue, null, displayTax));
    };

    return _this;
  }

  (0, _createClass2.default)(MiniCartSummary, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          displaySubtotal = _this$props.displaySubtotal,
          displayTax = _this$props.displayTax;
      var taxes = displayTax && this.renderTax();
      return _react.default.createElement(Table, {
        className: className
      }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement(Td, null, "Subtotal"), _react.default.createElement(TdValue, null, displaySubtotal)), taxes));
    }
  }]);
  return MiniCartSummary;
}(_react.Component);

MiniCartSummary.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * The subtotal for the items in the cart.
   */
  displaySubtotal: _propTypes.default.string.isRequired,

  /**
   * The computed taxes for items in the cart.
   */
  displayTax: _propTypes.default.string
};

var _default = _utils.default.withTranslation()(MiniCartSummary); // auto-add i18n


exports.default = _default;