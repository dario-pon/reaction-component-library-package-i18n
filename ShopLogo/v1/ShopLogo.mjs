import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../utils";
var Container = styled.div.withConfig({
  displayName: "ShopLogo__Container",
  componentId: "mz43d0-0"
})(["", ""], addTypographyStyles("ShopLogo", "titleTextBold"));
var Logo = styled.img.withConfig({
  displayName: "ShopLogo__Logo",
  componentId: "mz43d0-1"
})(["height:", ";"], applyTheme("ShopLogo.height"));

var ShopLogo =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopLogo, _Component);

  function ShopLogo() {
    _classCallCheck(this, ShopLogo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShopLogo).apply(this, arguments));
  }

  _createClass(ShopLogo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          shopLogoUrl = _this$props.shopLogoUrl,
          shopName = _this$props.shopName;
      return React.createElement(Container, {
        className: className
      }, shopLogoUrl ? React.createElement(Logo, {
        src: shopLogoUrl,
        alt: shopName
      }) : shopName);
    }
  }]);

  return ShopLogo;
}(Component);

ShopLogo.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * The primary shop's logo url
   */
  shopLogoUrl: PropTypes.string,

  /**
   * The primary shop's name
   */
  shopName: PropTypes.string.isRequired
};
export { ShopLogo as default };