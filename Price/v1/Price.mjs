import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles } from "../../utils";
var PriceDiv = styled.div.withConfig({
  displayName: "Price__PriceDiv",
  componentId: "pq9jnq-0"
})(["", ""], addTypographyStyles("Price", "labelText"));
var Del = styled.del.withConfig({
  displayName: "Price__Del",
  componentId: "pq9jnq-1"
})(["", " display:block;"], addTypographyStyles("PriceCompare", "labelText"));

var Price =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Price, _Component);

    function Price() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Price);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Price)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.renderCompareAtPrice = function () {
        var _this$props = _this.props,
          displayCompareAtPrice = _this$props.displayCompareAtPrice,
          displayPrice = _this$props.displayPrice; // If there is no price difference, don't render compare at price.

        if (displayPrice === displayCompareAtPrice) return null;
        return React.createElement(Del, null, displayCompareAtPrice);
      };

      return _this;
    }

    _createClass(Price, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
          className = _this$props2.className,
          displayCompareAtPrice = _this$props2.displayCompareAtPrice,
          displayPrice = _this$props2.displayPrice,
          hasPriceBottom = _this$props2.hasPriceBottom;
        return React.createElement("div", {
          className: className
        }, hasPriceBottom ? "" : React.createElement(PriceDiv, null, displayPrice), displayCompareAtPrice ? this.renderCompareAtPrice() : null, hasPriceBottom ? React.createElement(PriceDiv, null, displayPrice) : "");
      }
    }]);

    return Price;
  }(Component);

Price.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * A comparison price value, usually MSRP.
   * This value is expected to have the currency symbol, i.e. $300.00
   */
  displayCompareAtPrice: PropTypes.string,

  /**
   * The product's price.
   * This value is expected to have the currency symbol, i.e. $300.00
   */
  displayPrice: PropTypes.string.isRequired,

  /**
   * Renders price below the compare at price
   */
  hasPriceBottom: PropTypes.bool
};
export default i18n.withTranslation()(Price); // auto-add i18n