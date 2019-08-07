import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, CustomPropTypes } from "../../utils";
import { STATUS_LABELS, inventoryStatus } from "./utils";
var SoldOutSpan = styled.div.withConfig({
  displayName: "InventoryStatus__SoldOutSpan",
  componentId: "sc-18fz7sn-0"
})(["", ""], addTypographyStyles("StockWarning", "labelText"));
var DefaultSpan = styled.div.withConfig({
  displayName: "InventoryStatus__DefaultSpan",
  componentId: "sc-18fz7sn-1"
})(["", ""], addTypographyStyles("", "labelText"));

var InventoryStatus =
/*#__PURE__*/
function (_Component) {
  _inherits(InventoryStatus, _Component);

  function InventoryStatus() {
    _classCallCheck(this, InventoryStatus);

    return _possibleConstructorReturn(this, _getPrototypeOf(InventoryStatus).apply(this, arguments));
  }

  _createClass(InventoryStatus, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          components = _this$props.components,
          product = _this$props.product,
          statusLabels = _this$props.statusLabels;

      var _ref = components || {},
          StockWarning = _ref.StockWarning;

      var status = inventoryStatus(product, statusLabels);
      if (!status) return null;

      if (status.type && status.type === "LOW_QUANTITY") {
        return React.createElement(StockWarning, {
          inventoryQuantity: product.inventoryAvailableToSell,
          isLowInventoryQuantity: product.isLowQuantity
        });
      }

      if (status.type && status.type === "SOLD_OUT") {
        return React.createElement(SoldOutSpan, {
          className: className
        }, status.label);
      }

      return React.createElement(DefaultSpan, {
        className: className
      }, status.label);
    }
  }]);

  return InventoryStatus;
}(Component);

InventoryStatus.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction StockWarning component or your own component that
     * accepts compatible props.
     */
    StockWarning: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * The product, whose properties determine which badge(s) to display
   */
  product: PropTypes.shape({
    inventoryAvailableToSell: PropTypes.number,
    isBackorder: PropTypes.bool,
    isLowQuantity: PropTypes.bool,
    isSoldOut: PropTypes.bool
  }),

  /**
   * Labels to use for the various badges
   */
  statusLabels: PropTypes.shape({
    BACKORDER: PropTypes.string,
    LOW_QUANTITY: PropTypes.string,
    SOLD_OUT: PropTypes.string
  })
};
InventoryStatus.defaultProps = {
  statusLabels: STATUS_LABELS
};
export default i18n.withTranslation()(withComponents(InventoryStatus)); // auto-add i18n