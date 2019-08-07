import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles, CustomPropTypes, preventAccidentalDoubleClick } from "../../utils";
var InPageMenuItemContainer = styled.div.withConfig({
  displayName: "InPageMenuItem__InPageMenuItemContainer",
  componentId: "sc-1w1505b-0"
})(["align-items:center;", " cursor:pointer;display:flex;flex-direction:row;padding-left:", ";padding-right:", ";padding-top:", ";padding-bottom:", ";margin-bottom:", ";"], function (props) {
  if (props.isSelected) {
    return "background-color: ".concat(applyTheme("InPageMenuItemContainer.backgroundColor_selected")(props), ";");
  }

  return "background-color: ".concat(applyTheme("InPageMenuItemContainer.backgroundColor_default")(props), ";");
}, applyTheme("InPageMenuItemContainer.paddingLeft"), applyTheme("InPageMenuItemContainer.paddingRight"), applyTheme("InPageMenuItemContainer.paddingTop"), applyTheme("InPageMenuItemContainer.paddingBottom"), applyTheme("InPageMenuItemContainer.marginBottom"));
var InPageMenuItemText = styled.div.withConfig({
  displayName: "InPageMenuItem__InPageMenuItemText",
  componentId: "sc-1w1505b-1"
})(["", " display:flex;flex:1 1 auto;"], addTypographyStyles("InPageMenuItemText", "headingTextBold"));
var InPageMenuItemIcon = styled.span.withConfig({
  displayName: "InPageMenuItem__InPageMenuItemIcon",
  componentId: "sc-1w1505b-2"
})(["display:flex;flex:0 0 auto;height:", ";margin:0;width:", ";svg{height:", ";transform:rotateZ(270deg);width:", ";}"], applyTheme("InPageMenuItemIcon.height"), applyTheme("InPageMenuItemIcon.width"), applyTheme("InPageMenuItemIcon.height"), applyTheme("InPageMenuItemIcon.width"));

var InPageMenuItem =
  /*#__PURE__*/
  function (_Component) {
    _inherits(InPageMenuItem, _Component);

    function InPageMenuItem() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, InPageMenuItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InPageMenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.handleClick = preventAccidentalDoubleClick(function (event) {
        event.preventDefault();
        var onClick = _this.props.onClick;

        if (onClick) {
          return onClick();
        }

        return null;
      });
      return _this;
    }

    _createClass(InPageMenuItem, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
          className = _this$props.className,
          _this$props$component = _this$props.components,
          iconExpand = _this$props$component.iconExpand,
          Link = _this$props$component.Link,
          href = _this$props.href,
          isSelected = _this$props.isSelected,
          label = _this$props.label;
        return React.createElement(Link, {
          href: href,
          onClick: this.handleClick
        }, React.createElement(InPageMenuItemContainer, {
          className: className,
          isSelected: isSelected
        }, React.createElement(InPageMenuItemText, null, label), React.createElement(InPageMenuItemIcon, null, iconExpand)));
      }
    }]);

    return InPageMenuItem;
  }(Component);

InPageMenuItem.propTypes = {
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
     * Pass either the Reaction iconExpand component or your own component that
     * accepts compatible props.
     */
    iconExpand: PropTypes.node.isRequired,

    /**
     * Pass either the Reaction Link component or your own component that
     * accepts compatible props.
     */
    Link: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * URL to provide to MenuItem
   */
  href: PropTypes.string,

  /**
   * Render selected style
   */
  isSelected: PropTypes.bool,

  /**
   * Menu Item label
   */
  label: PropTypes.node.isRequired,

  /**
   * Function to pass to button onClick
   */
  onClick: PropTypes.func
};
InPageMenuItem.defaultProps = {
  isSelected: false
};
export default i18n.withTranslation()(withComponents(InPageMenuItem)); // auto-add i18n