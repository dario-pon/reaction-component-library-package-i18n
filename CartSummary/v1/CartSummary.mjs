import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../utils";
var Table = styled.table.withConfig({
  displayName: "CartSummary__Table",
  componentId: "sc-1s88t8e-0"
})(["width:100%;border-spacing:0;background-color:", ";padding-left:", ";padding-right:", ";padding-top:", ";padding-bottom:", ";"], function (props) {
  return props.isDense ? applyTheme("CartSummary.denseBackgroundColor")(props) : applyTheme("CartSummary.backgroundColor")(props);
}, function (props) {
  return props.isDense ? "0" : applyTheme("CartSummary.paddingLeft")(props);
}, function (props) {
  return props.isDense ? "0" : applyTheme("CartSummary.paddingRight")(props);
}, function (props) {
  return props.isDense ? "0" : applyTheme("CartSummary.paddingTop")(props);
}, function (props) {
  return props.isDense ? "0" : applyTheme("CartSummary.paddingBottom")(props);
});
var Th = styled.th.withConfig({
  displayName: "CartSummary__Th",
  componentId: "sc-1s88t8e-1"
})(["", " text-align:left;"], addTypographyStyles("CartSummaryLeftColumnHeader", "bodyText"));
var Thr = styled.th.withConfig({
  displayName: "CartSummary__Thr",
  componentId: "sc-1s88t8e-2"
})(["", " text-align:right;"], addTypographyStyles("CartSummaryRightColumnHeader", "bodyText"));
var Td = styled.td.withConfig({
  displayName: "CartSummary__Td",
  componentId: "sc-1s88t8e-3"
})(["", " border-top-color:", ";border-top-style:solid;border-top-width:", ";padding-bottom:", ";padding-left:0;padding-right:0;padding-top:", ";text-align:left;"], addTypographyStyles("CartSummaryLeftColumn", "labelText"), applyTheme("CartSummary.borderColor"), function (props) {
  return props.isBordered ? applyTheme("CartSummary.borderWidth")(props) : "0";
}, function (props) {
  return props.isDense ? applyTheme("CartSummary.rowDensePaddingBottom")(props) : applyTheme("CartSummary.rowPaddingBottom")(props);
}, function (props) {
  return props.isDense ? applyTheme("CartSummary.rowDensePaddingTop")(props) : applyTheme("CartSummary.rowPaddingTop")(props);
});
var TdValue = styled(Td).withConfig({
  displayName: "CartSummary__TdValue",
  componentId: "sc-1s88t8e-4"
})(["", " text-align:right;"], addTypographyStyles("CartSummaryRightColumn", "labelText"));
var Title = styled.span.withConfig({
  displayName: "CartSummary__Title",
  componentId: "sc-1s88t8e-5"
})(["", ""], addTypographyStyles("CartSummaryTitle", "bodyTextBold"));
var Discount = styled.span.withConfig({
  displayName: "CartSummary__Discount",
  componentId: "sc-1s88t8e-6"
})(["", ""], addTypographyStyles("CartSummaryDiscount", "labelTextBold"));
var TdTax = styled.td.withConfig({
  displayName: "CartSummary__TdTax",
  componentId: "sc-1s88t8e-7"
})(["", " border-top-color:", ";border-top-style:solid;border-top-width:", ";padding-bottom:", ";padding-left:0;padding-right:0;padding-top:", ";text-align:left;"], addTypographyStyles("CartSummaryLeftColumn", "labelText"), applyTheme("CartSummary.borderColor"), function (props) {
  return props.isBordered ? applyTheme("CartSummary.borderWidth")(props) : "0";
}, applyTheme("CartSummary.rowPaddingBottom"), function (props) {
  return props.isDense ? applyTheme("CartSummary.rowDensePaddingTop")(props) : applyTheme("CartSummary.rowPaddingTop")(props);
});
var TdTaxValue = styled(Td).withConfig({
  displayName: "CartSummary__TdTaxValue",
  componentId: "sc-1s88t8e-8"
})(["", " padding-bottom:", ";text-align:right;"], addTypographyStyles("CartSummaryRightColumn", "labelText"), applyTheme("CartSummary.rowPaddingBottom"));
var TdTotal = styled.td.withConfig({
  displayName: "CartSummary__TdTotal",
  componentId: "sc-1s88t8e-9"
})(["", " border-top-color:", ";border-top-style:solid;border-top-width:", ";padding-bottom:", ";padding-left:0;padding-right:0;padding-top:", ";text-align:left;"], addTypographyStyles("CartSummaryLeftColumn", "labelText"), applyTheme("CartSummary.borderColor"), function (props) {
  return props.isBordered ? applyTheme("CartSummary.borderWidth")(props) : "0";
}, applyTheme("CartSummary.rowPaddingBottom"), applyTheme("CartSummary.rowPaddingTop"));
var TdTotalValue = styled(Td).withConfig({
  displayName: "CartSummary__TdTotalValue",
  componentId: "sc-1s88t8e-10"
})(["text-align:right;padding-bottom:", ";padding-top:", ";"], applyTheme("CartSummary.rowPaddingBottom"), applyTheme("CartSummary.rowPaddingTop"));
var Total = styled.span.withConfig({
  displayName: "CartSummary__Total",
  componentId: "sc-1s88t8e-11"
})(["", ""], addTypographyStyles("CartSummaryTotal", "subheadingTextBold"));

var CartSummary =
/*#__PURE__*/
function (_Component) {
  _inherits(CartSummary, _Component);

  function CartSummary() {
    _classCallCheck(this, CartSummary);

    return _possibleConstructorReturn(this, _getPrototypeOf(CartSummary).apply(this, arguments));
  }

  _createClass(CartSummary, [{
    key: "renderHeader",
    value: function renderHeader() {
      var itemsQuantity = this.props.itemsQuantity;
      var itemsLabel = itemsQuantity >= 0 ? "".concat(itemsQuantity, " items") : null;
      return React.createElement("thead", null, React.createElement("tr", null, React.createElement(Th, null, React.createElement(Title, null, "Cart Summary")), React.createElement(Thr, null, itemsLabel)));
    }
  }, {
    key: "renderDiscount",
    value: function renderDiscount() {
      var _this$props = this.props,
          displayDiscount = _this$props.displayDiscount,
          isDense = _this$props.isDense;
      return React.createElement("tr", null, React.createElement(Td, {
        isDense: isDense
      }, "Promo code applied:"), React.createElement(TdValue, {
        isDense: isDense
      }, React.createElement(Discount, null, displayDiscount)));
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
      return React.createElement(Table, {
        className: className,
        isDense: isDense
      }, header, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(Td, {
        isDense: isDense
      }, "Items:"), React.createElement(TdValue, {
        isDense: isDense
      }, displaySubtotal)), React.createElement("tr", null, React.createElement(Td, {
        isDense: isDense
      }, "Shipping:"), React.createElement(TdValue, {
        isDense: isDense
      }, shipping)), discount, React.createElement("tr", null, React.createElement(Td, {
        isDense: isDense
      }, "Surcharges:"), React.createElement(TdValue, {
        isDense: isDense
      }, surcharge)), React.createElement("tr", null, React.createElement(TdTax, {
        isDense: isDense
      }, "Tax:"), React.createElement(TdTaxValue, {
        isDense: isDense
      }, tax)), React.createElement("tr", null, React.createElement(TdTotal, {
        isDense: isDense,
        isBordered: true
      }, "Order total:"), React.createElement(TdTotalValue, {
        isDense: isDense,
        isBordered: true
      }, React.createElement(Total, null, displayTotal)))));
    }
  }]);

  return CartSummary;
}(Component);

CartSummary.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Discount amount associated with promo code
   */
  displayDiscount: PropTypes.string,

  /**
   * Shipping cost
   */
  displayShipping: PropTypes.string,

  /**
   * Subtotal amount
   */
  displaySubtotal: PropTypes.string.isRequired,

  /**
   * Surcharge amount
   */
  displaySurcharge: PropTypes.string,

  /**
   * Calculated tax amount
   */
  displayTax: PropTypes.string,

  /**
   * Total amount
   */
  displayTotal: PropTypes.string.isRequired,

  /**
   * Dense layout with a transparent background color
   */
  isDense: PropTypes.bool,

  /**
   * If a product qualifies for free shipping, display "FREE" for shipping method
   */
  isFreeShipping: PropTypes.bool,

  /**
   * Quantity of products in shopping cart
   */
  itemsQuantity: PropTypes.number
};
export default CartSummary;