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

var Table = _styledComponents.default.table.withConfig({
  displayName: "CartSummary__Table",
  componentId: "sc-1s88t8e-0"
})(["width:100%;border-spacing:0;background-color:", ";padding-left:", ";padding-right:", ";padding-top:", ";padding-bottom:", ";"], function (props) {
  return props.isDense ? (0, _utils.applyTheme)("CartSummary.denseBackgroundColor")(props) : (0, _utils.applyTheme)("CartSummary.backgroundColor")(props);
}, function (props) {
  return props.isDense ? "0" : (0, _utils.applyTheme)("CartSummary.paddingLeft")(props);
}, function (props) {
  return props.isDense ? "0" : (0, _utils.applyTheme)("CartSummary.paddingRight")(props);
}, function (props) {
  return props.isDense ? "0" : (0, _utils.applyTheme)("CartSummary.paddingTop")(props);
}, function (props) {
  return props.isDense ? "0" : (0, _utils.applyTheme)("CartSummary.paddingBottom")(props);
});

var Th = _styledComponents.default.th.withConfig({
  displayName: "CartSummary__Th",
  componentId: "sc-1s88t8e-1"
})(["", " text-align:left;"], (0, _utils.addTypographyStyles)("CartSummaryLeftColumnHeader", "bodyText"));

var Thr = _styledComponents.default.th.withConfig({
  displayName: "CartSummary__Thr",
  componentId: "sc-1s88t8e-2"
})(["", " text-align:right;"], (0, _utils.addTypographyStyles)("CartSummaryRightColumnHeader", "bodyText"));

var Td = _styledComponents.default.td.withConfig({
  displayName: "CartSummary__Td",
  componentId: "sc-1s88t8e-3"
})(["", " border-top-color:", ";border-top-style:solid;border-top-width:", ";padding-bottom:", ";padding-left:0;padding-right:0;padding-top:", ";text-align:left;"], (0, _utils.addTypographyStyles)("CartSummaryLeftColumn", "labelText"), (0, _utils.applyTheme)("CartSummary.borderColor"), function (props) {
  return props.isBordered ? (0, _utils.applyTheme)("CartSummary.borderWidth")(props) : "0";
}, function (props) {
  return props.isDense ? (0, _utils.applyTheme)("CartSummary.rowDensePaddingBottom")(props) : (0, _utils.applyTheme)("CartSummary.rowPaddingBottom")(props);
}, function (props) {
  return props.isDense ? (0, _utils.applyTheme)("CartSummary.rowDensePaddingTop")(props) : (0, _utils.applyTheme)("CartSummary.rowPaddingTop")(props);
});

var TdValue = (0, _styledComponents.default)(Td).withConfig({
  displayName: "CartSummary__TdValue",
  componentId: "sc-1s88t8e-4"
})(["", " text-align:right;"], (0, _utils.addTypographyStyles)("CartSummaryRightColumn", "labelText"));

var Title = _styledComponents.default.span.withConfig({
  displayName: "CartSummary__Title",
  componentId: "sc-1s88t8e-5"
})(["", ""], (0, _utils.addTypographyStyles)("CartSummaryTitle", "bodyTextBold"));

var Discount = _styledComponents.default.span.withConfig({
  displayName: "CartSummary__Discount",
  componentId: "sc-1s88t8e-6"
})(["", ""], (0, _utils.addTypographyStyles)("CartSummaryDiscount", "labelTextBold"));

var TdTax = _styledComponents.default.td.withConfig({
  displayName: "CartSummary__TdTax",
  componentId: "sc-1s88t8e-7"
})(["", " border-top-color:", ";border-top-style:solid;border-top-width:", ";padding-bottom:", ";padding-left:0;padding-right:0;padding-top:", ";text-align:left;"], (0, _utils.addTypographyStyles)("CartSummaryLeftColumn", "labelText"), (0, _utils.applyTheme)("CartSummary.borderColor"), function (props) {
  return props.isBordered ? (0, _utils.applyTheme)("CartSummary.borderWidth")(props) : "0";
}, (0, _utils.applyTheme)("CartSummary.rowPaddingBottom"), function (props) {
  return props.isDense ? (0, _utils.applyTheme)("CartSummary.rowDensePaddingTop")(props) : (0, _utils.applyTheme)("CartSummary.rowPaddingTop")(props);
});

var TdTaxValue = (0, _styledComponents.default)(Td).withConfig({
  displayName: "CartSummary__TdTaxValue",
  componentId: "sc-1s88t8e-8"
})(["", " padding-bottom:", ";text-align:right;"], (0, _utils.addTypographyStyles)("CartSummaryRightColumn", "labelText"), (0, _utils.applyTheme)("CartSummary.rowPaddingBottom"));

var TdTotal = _styledComponents.default.td.withConfig({
  displayName: "CartSummary__TdTotal",
  componentId: "sc-1s88t8e-9"
})(["", " border-top-color:", ";border-top-style:solid;border-top-width:", ";padding-bottom:", ";padding-left:0;padding-right:0;padding-top:", ";text-align:left;"], (0, _utils.addTypographyStyles)("CartSummaryLeftColumn", "labelText"), (0, _utils.applyTheme)("CartSummary.borderColor"), function (props) {
  return props.isBordered ? (0, _utils.applyTheme)("CartSummary.borderWidth")(props) : "0";
}, (0, _utils.applyTheme)("CartSummary.rowPaddingBottom"), (0, _utils.applyTheme)("CartSummary.rowPaddingTop"));

var TdTotalValue = (0, _styledComponents.default)(Td).withConfig({
  displayName: "CartSummary__TdTotalValue",
  componentId: "sc-1s88t8e-10"
})(["text-align:right;padding-bottom:", ";padding-top:", ";"], (0, _utils.applyTheme)("CartSummary.rowPaddingBottom"), (0, _utils.applyTheme)("CartSummary.rowPaddingTop"));

var Total = _styledComponents.default.span.withConfig({
  displayName: "CartSummary__Total",
  componentId: "sc-1s88t8e-11"
})(["", ""], (0, _utils.addTypographyStyles)("CartSummaryTotal", "subheadingTextBold"));

var CartSummary =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CartSummary, _Component);

  function CartSummary() {
    (0, _classCallCheck2.default)(this, CartSummary);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CartSummary).apply(this, arguments));
  }

  (0, _createClass2.default)(CartSummary, [{
    key: "renderHeader",
    value: function renderHeader() {
      var itemsQuantity = this.props.itemsQuantity;
      var itemsLabel = itemsQuantity >= 0 ? "".concat(itemsQuantity, " items") : null;
      return _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement(Th, null, _react.default.createElement(Title, null, "Cart Summary")), _react.default.createElement(Thr, null, itemsLabel)));
    }
  }, {
    key: "renderDiscount",
    value: function renderDiscount() {
      var _this$props = this.props,
          displayDiscount = _this$props.displayDiscount,
          isDense = _this$props.isDense;
      return _react.default.createElement("tr", null, _react.default.createElement(Td, {
        isDense: isDense
      }, "Promo code applied:"), _react.default.createElement(TdValue, {
        isDense: isDense
      }, _react.default.createElement(Discount, null, displayDiscount)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          displayDiscount = _this$props2.displayDiscount,
          displayShipping = _this$props2.displayShipping,
          displaySubtotal = _this$props2.displaySubtotal,
          displaySurcharge = _this$props2.displaySurcharge,
          displayTax = _this$props2.displayTax,
          displayTotal = _this$props2.displayTotal,
          isDense = _this$props2.isDense,
          isFreeShipping = _this$props2.isFreeShipping; // Use "-" to indicate we are still calculating this field.

      var shipping = (isFreeShipping ? "FREE" : displayShipping) || "-";
      var tax = displayTax || "-";
      var header = !isDense && this.renderHeader();
      var discount = displayDiscount && this.renderDiscount();
      var surcharge = displaySurcharge || "-";
      return _react.default.createElement(Table, {
        className: className,
        isDense: isDense
      }, header, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement(Td, {
        isDense: isDense
      }, "Items:"), _react.default.createElement(TdValue, {
        isDense: isDense
      }, displaySubtotal)), _react.default.createElement("tr", null, _react.default.createElement(Td, {
        isDense: isDense
      }, "Shipping:"), _react.default.createElement(TdValue, {
        isDense: isDense
      }, shipping)), discount, _react.default.createElement("tr", null, _react.default.createElement(Td, {
        isDense: isDense
      }, "Surcharges:"), _react.default.createElement(TdValue, {
        isDense: isDense
      }, surcharge)), _react.default.createElement("tr", null, _react.default.createElement(TdTax, {
        isDense: isDense
      }, "Tax:"), _react.default.createElement(TdTaxValue, {
        isDense: isDense
      }, tax)), _react.default.createElement("tr", null, _react.default.createElement(TdTotal, {
        isDense: isDense,
        isBordered: true
      }, "Order total:"), _react.default.createElement(TdTotalValue, {
        isDense: isDense,
        isBordered: true
      }, _react.default.createElement(Total, null, displayTotal)))));
    }
  }]);
  return CartSummary;
}(_react.Component);

CartSummary.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Discount amount associated with promo code
   */
  displayDiscount: _propTypes.default.string,

  /**
   * Shipping cost
   */
  displayShipping: _propTypes.default.string,

  /**
   * Subtotal amount
   */
  displaySubtotal: _propTypes.default.string.isRequired,

  /**
   * Surcharge amount
   */
  displaySurcharge: _propTypes.default.string,

  /**
   * Calculated tax amount
   */
  displayTax: _propTypes.default.string,

  /**
   * Total amount
   */
  displayTotal: _propTypes.default.string.isRequired,

  /**
   * Dense layout with a transparent background color
   */
  isDense: _propTypes.default.bool,

  /**
   * If a product qualifies for free shipping, display "FREE" for shipping method
   */
  isFreeShipping: _propTypes.default.bool,

  /**
   * Quantity of products in shopping cart
   */
  itemsQuantity: _propTypes.default.number
};
var _default = CartSummary;
exports.default = _default;