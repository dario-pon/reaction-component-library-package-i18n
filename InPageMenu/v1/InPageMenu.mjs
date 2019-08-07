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
import { CustomPropTypes } from "../../utils";
var InPageMenuContainer = styled.div.withConfig({
  displayName: "InPageMenu__InPageMenuContainer",
  componentId: "sc-9d55eg-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;flex-wrap:wrap;width:100%;"]);

var InPageMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(InPageMenu, _Component);

  function InPageMenu() {
    _classCallCheck(this, InPageMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(InPageMenu).apply(this, arguments));
  }

  _createClass(InPageMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          InPageMenuItem = _this$props.components.InPageMenuItem,
          menuItems = _this$props.menuItems;
      return React.createElement(InPageMenuContainer, {
        className: className
      }, menuItems.map(function (menuItem, index) {
        return React.createElement(InPageMenuItem, {
          href: menuItem.href,
          isSelected: menuItem.isSelected,
          key: menuItem.id || "item-".concat(index),
          label: menuItem.label
        });
      }));
    }
  }]);

  return InPageMenu;
}(Component);

InPageMenu.propTypes = {
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
     * Pass either the Reaction InPageMenuItem component or your own component that
     * accepts compatible props.
     */
    InPageMenuItem: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * An array that contains objects of label and navigational data for each InPageMenuItem
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    id: PropTypes.string,
    isSelected: PropTypes.bool,
    label: PropTypes.string
  }))
};
InPageMenu.defaultProps = {
  menuItems: []
};
export default i18n.withTranslation()(withComponents(InPageMenu)); // auto-add i18n