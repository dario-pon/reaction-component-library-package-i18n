import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../utils";
var Detail = styled.div.withConfig({
  displayName: "CartItemDetail__Detail",
  componentId: "om1nev-0"
})(["flex:0 0 fit;"]);
var Title = styled.h3.withConfig({
  displayName: "CartItemDetail__Title",
  componentId: "om1nev-1"
})(["", " margin-top:", ";margin-bottom:", ";margin-left:", ";margin-right:", ";a{", " text-decoration:none;&:focus,&:hover{color:", ";}}"], addTypographyStyles("CartItemDetailTitle", "headingTextBold"), applyTheme("CartItemDetailTitle.marginTop"), applyTheme("CartItemDetailTitle.marginBottom"), applyTheme("CartItemDetailTitle.marginLeft"), applyTheme("CartItemDetailTitle.marginRight"), addTypographyStyles("CartItemDetailTitle", "headingTextBold"), applyTheme("CartItemDetailTitle.color_focus"));
var Text = styled.p.withConfig({
  displayName: "CartItemDetail__Text",
  componentId: "om1nev-2"
})(["", " margin:0;"], addTypographyStyles("CartItemDetailAttributes", "labelText"));
var Attributes = styled.div.withConfig({
  displayName: "CartItemDetail__Attributes",
  componentId: "om1nev-3"
})(["margin-bottom:0.5rem;"]);
var Attr = styled.p.withConfig({
  displayName: "CartItemDetail__Attr",
  componentId: "om1nev-4"
})(["", " margin:0;"], addTypographyStyles("CartItemDetailAttributes", "labelText"));

var CartItemDetail =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CartItemDetail, _Component);

    function CartItemDetail() {
      _classCallCheck(this, CartItemDetail);

      return _possibleConstructorReturn(this, _getPrototypeOf(CartItemDetail).apply(this, arguments));
    }

    _createClass(CartItemDetail, [{
      key: "renderBlockAttributes",
      value: function renderBlockAttributes() {
        var attributes = this.props.attributes;
        return (attributes || []).map(function (_ref) {
          var label = _ref.label,
            value = _ref.value;
          if (!label && !value) return null; // For now, due to strange implementation of attributes/options in the product data,
          // we allow labels without values and values without labels.

          return React.createElement(Attr, {
            key: label || value
          }, label ? React.createElement("span", null, label, ":") : null, " ", value);
        });
      }
    }, {
      key: "renderInlineAttributes",
      value: function renderInlineAttributes() {
        var attributes = this.props.attributes;
        if (!attributes || !attributes.length) return null;
        var values = attributes.map(function (_ref2) {
          var value = _ref2.value;
          return value;
        }).filter(function (value) {
          return !!value;
        });
        return React.createElement(Attr, null, values.join(", "));
      }
    }, {
      key: "renderAttributes",
      value: function renderAttributes() {
        var _this$props = this.props,
          attributes = _this$props.attributes,
          isMiniCart = _this$props.isMiniCart,
          productVendor = _this$props.productVendor,
          quantity = _this$props.quantity;
        if ((!attributes || attributes.length === 0) && !productVendor) return null;
        return React.createElement(Attributes, {
          isMiniCart: isMiniCart
        }, productVendor ? React.createElement(Text, null, productVendor) : null, isMiniCart ? this.renderInlineAttributes() : this.renderBlockAttributes(), quantity ? React.createElement(Text, null, "Quantity: ", quantity) : null);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
          className = _this$props2.className,
          productURLPath = _this$props2.productURLPath,
          productSlug = _this$props2.productSlug,
          title = _this$props2.title;
        return React.createElement(Detail, {
          className: className
        }, React.createElement(Title, null, React.createElement("a", {
          href: [productURLPath, productSlug].join("")
        }, title)), this.renderAttributes());
      }
    }]);

    return CartItemDetail;
  }(Component);

CartItemDetail.propTypes = {
  /**
   * Array of additional attributes of the chosen item.
   */
  attributes: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Attribute label (i.e. "Color").
     */
    label: PropTypes.string,

    /**
     * Attribute value (i.e. "Red").
     */
    value: PropTypes.string
  })),

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Is in a MiniCart component
   */
  isMiniCart: PropTypes.bool,

  /**
   * Product slug of chosen item.
   */
  productSlug: PropTypes.string,

  /**
   * Product URL path to be prepended before the slug
   */
  productURLPath: PropTypes.string,

  /**
   * Product vendor of chosen item.
   */
  productVendor: PropTypes.string,

  /**
   * Item quantity
   */
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Product title of chosen item.
   */
  title: PropTypes.string
};
export default i18n.withTranslation()(CartItemDetail); // auto-add i18n