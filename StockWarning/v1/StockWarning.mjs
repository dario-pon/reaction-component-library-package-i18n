import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles } from "../../utils";
var Span = styled.div.withConfig({
  displayName: "StockWarning__Span",
  componentId: "sc-17rkz97-0"
})(["", ""], addTypographyStyles("StockWarning", "labelText"));

var StockWarning =
/*#__PURE__*/
function (_Component) {
  _inherits(StockWarning, _Component);

  function StockWarning() {
    _classCallCheck(this, StockWarning);

    return _possibleConstructorReturn(this, _getPrototypeOf(StockWarning).apply(this, arguments));
  }

  _createClass(StockWarning, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          inventoryQuantity = _this$props.inventoryQuantity,
          isLowInventoryQuantity = _this$props.isLowInventoryQuantity;
      if (!isLowInventoryQuantity) return null;
      return React.createElement(Span, {
        className: className
      }, "Only ", inventoryQuantity, " in stock");
    }
  }]);

  return StockWarning;
}(Component);

StockWarning.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * The product's current stock level
   */
  inventoryQuantity: PropTypes.number,

  /**
   * When true, indicates that a product's inventory level has reached
   * the low level threshold.
   */
  isLowInventoryQuantity: PropTypes.bool
};
export default StockWarning;