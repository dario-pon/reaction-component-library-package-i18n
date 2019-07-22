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
  displayName: "MiniCartSummary__Table",
  componentId: "sc-1pnkmz7-0"
})(["width:100%;padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";"], applyTheme("MiniCartSummary.paddingTop"), applyTheme("MiniCartSummary.paddingBottom"), applyTheme("MiniCartSummary.paddingLeft"), applyTheme("MiniCartSummary.paddingRight"));
var Td = styled.td.withConfig({
  displayName: "MiniCartSummary__Td",
  componentId: "sc-1pnkmz7-1"
})(["", " padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";text-align:right;"], addTypographyStyles("MiniCartSummaryLeft", "bodyText"), applyTheme("MiniCartSummaryLeft.cellPaddingTop"), applyTheme("MiniCartSummaryLeft.cellPaddingBottom"), applyTheme("MiniCartSummaryLeft.cellPaddingLeft"), applyTheme("MiniCartSummaryLeft.cellPaddingRight"));
var TdValue = styled.td.withConfig({
  displayName: "MiniCartSummary__TdValue",
  componentId: "sc-1pnkmz7-2"
})(["", " padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";text-align:left;"], addTypographyStyles("MiniCartSummaryRight", "bodyTextBold"), applyTheme("MiniCartSummaryRight.cellPaddingTop"), applyTheme("MiniCartSummaryRight.cellPaddingBottom"), applyTheme("MiniCartSummaryRight.cellPaddingLeft"), applyTheme("MiniCartSummaryRight.cellPaddingRight"));

var MiniCartSummary =
/*#__PURE__*/
function (_Component) {
  _inherits(MiniCartSummary, _Component);

  function MiniCartSummary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MiniCartSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MiniCartSummary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderTax = function () {
      var displayTax = _this.props.displayTax;
      return React.createElement("tr", null, React.createElement(Td, null, "Tax"), React.createElement(TdValue, null, displayTax));
    };

    return _this;
  }

  _createClass(MiniCartSummary, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          displaySubtotal = _this$props.displaySubtotal,
          displayTax = _this$props.displayTax;
      var taxes = displayTax && this.renderTax();
      return React.createElement(Table, {
        className: className
      }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(Td, null, "Subtotal"), React.createElement(TdValue, null, displaySubtotal)), taxes));
    }
  }]);

  return MiniCartSummary;
}(Component);

MiniCartSummary.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * The subtotal for the items in the cart.
   */
  displaySubtotal: PropTypes.string.isRequired,

  /**
   * The computed taxes for items in the cart.
   */
  displayTax: PropTypes.string
};
export default MiniCartSummary;