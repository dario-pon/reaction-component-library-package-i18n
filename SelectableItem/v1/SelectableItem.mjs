import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled from "styled-components";
import uniqueId from "lodash.uniqueid";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme } from "../../utils";
var StyledLabel = styled.label.withConfig({
  displayName: "SelectableItem__StyledLabel",
  componentId: "sc-1mpw4vb-0"
})(["align-items:center;cursor:pointer;display:flex;", ""], function (props) {
  if (props.isStacked) {
    return addTypographyStyles("SelectableItemLabel", "labelTextBold");
  }

  return addTypographyStyles("SelectableItemLabel", "labelText");
});
var StyledRadioButton = styled.span.withConfig({
  displayName: "SelectableItem__StyledRadioButton",
  componentId: "sc-1mpw4vb-1"
})(["align-items:center;background-color:", ";border-radius:50%;border-color:", ";border-style:solid;border-width:", ";box-sizing:border-box;display:flex;flex-shrink:0;height:", ";justify-content:center;margin-bottom:0;margin-left:0;margin-right:", ";margin-top:0;width:", ";"], applyTheme("SelectableItemRadioButton.backgroundColor"), applyTheme("SelectableItemRadioButton.borderColor"), applyTheme("SelectableItemRadioButton.borderWidth"), applyTheme("SelectableItemRadioButton.size"), applyTheme("SelectableItemRadioButton.spacingToLabel"), applyTheme("SelectableItemRadioButton.size"));
var StyledInput = styled.input.withConfig({
  displayName: "SelectableItem__StyledInput",
  componentId: "sc-1mpw4vb-2"
})(["border:0;clip:rect(0,0,0,0);cursor:pointer;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:visible;white-space:nowrap;width:1px;&:checked + ", " ", "::before{content:\" \";display:inline-block;position:relative;width:", ";height:", ";border-radius:50%;background-color:", ";}&:focus + ", " ", "{box-shadow:", ";outline:", "}&:disabled + ", " ", "{background-color:", ";}&:disabled + ", "{opacity:", ";}&:disabled + ", ":hover{cursor:", ";}"], StyledLabel, StyledRadioButton, applyTheme("SelectableItemRadioButton.checkSize"), applyTheme("SelectableItemRadioButton.checkSize"), applyTheme("SelectableItemRadioButton.color"), StyledLabel, StyledRadioButton, applyTheme("SelectableItemRadioButton.focus"), applyTheme("SelectableItemRadioButton.focusOutline"), StyledLabel, StyledRadioButton, applyTheme("SelectableItemRadioButton.disabledFillColor"), StyledLabel, applyTheme("SelectableItemRadioButton.disabledOpacity"), StyledLabel, applyTheme("SelectableItemRadioButton.disabledCursor"));
var StyledDetail = styled.div.withConfig({
  displayName: "SelectableItem__StyledDetail",
  componentId: "sc-1mpw4vb-3"
})(["", " align-items:center;display:", ";height:auto;justify-content:", ";margin-left:", ";margin-top:", ";"], addTypographyStyles("SelectableItemDetail", "bodyText"), function (props) {
  return props.isStacked ? "block" : "flex";
}, function (props) {
  return props.isStacked ? "flex-start" : "center";
}, function (props) {
  return props.isStacked ? applyTheme("SelectableList.stackedSpacingToLabel")(props) : "0";
}, function (props) {
  return props.isStacked ? applyTheme("SelectableList.stackedSpacingBelowLabel")(props) : "0";
});
var StyledIcon = styled.span.withConfig({
  displayName: "SelectableItem__StyledIcon",
  componentId: "sc-1mpw4vb-4"
})(["border-radius:", ";border-color:", ";border-style:", ";border-width:", ";height:", ";margin-bottom:0;margin-left:0;margin-right:", ";margin-top:0;width:", ";svg{height:", ";width:", ";}"], applyTheme("SelectableList.borderRadius"), applyTheme("SelectableList.borderColor"), applyTheme("SelectableList.borderStyle"), applyTheme("SelectableList.borderWidth"), applyTheme("SelectableList.iconHeight"), applyTheme("SelectableList.iconSpacingToLabel"), applyTheme("SelectableList.iconWidth"), applyTheme("SelectableList.iconHeight"), applyTheme("SelectableList.iconWidth"));
var StyledItem = styled.div.withConfig({
  displayName: "SelectableItem__StyledItem",
  componentId: "sc-1mpw4vb-5"
})(["display:flex;justify-content:", ";flex-direction:", ";height:", ";@media (max-width:768px){height:", ";}"], function (props) {
  return props.isStacked ? "none" : "space-between";
}, function (props) {
  return props.isStacked ? "column" : "row";
}, function (props) {
  return props.isStacked ? "inherit" : applyTheme("SelectableList.height");
}, applyTheme("SelectableList.heightMobile"));
var LeftAlignedItem = styled.div.withConfig({
  displayName: "SelectableItem__LeftAlignedItem",
  componentId: "sc-1mpw4vb-6"
})(["display:flex;justify-content:flex-start;height:", ";@media (max-width:768px){height:", ";}", "{position:relative;font-weight:", ";}", "{", " margin-left:", ";}"], applyTheme("SelectableList.height"), applyTheme("SelectableList.heightMobile"), StyledLabel, applyTheme("SelectableList.leftAlignedLabelFontWeight"), StyledDetail, addTypographyStyles("SelectableItemDetailLeft", "labelText"), applyTheme("SelectableList.leftAlignedDetailSpacingToLabel"));

var SelectableItem =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SelectableItem, _Component);

    function SelectableItem() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, SelectableItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectableItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.uniqueInstanceIdentifier = uniqueId("SelectableItem_");

      _this.handleChange = function (event) {
        var value = _this.props.value;

        _this.props.onChange(event.target.checked, value);
      };

      return _this;
    }

    _createClass(SelectableItem, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
          className = _this$props.className,
          detail = _this$props.detail,
          icon = _this$props.icon,
          isChecked = _this$props.isChecked,
          isLeftAligned = _this$props.isLeftAligned,
          isReadOnly = _this$props.isReadOnly,
          isStacked = _this$props.isStacked,
          label = _this$props.label,
          value = _this$props.value;
        var id = "radio_".concat(this.uniqueInstanceIdentifier);
        var input = React.createElement(StyledInput, {
          id: id,
          checked: isChecked,
          value: value,
          onChange: this.handleChange,
          type: "radio",
          disabled: isReadOnly
        });
        var labelAndButton = React.createElement(StyledLabel, {
          htmlFor: id,
          isStacked: isStacked
        }, React.createElement(StyledRadioButton, null), icon ? React.createElement(StyledIcon, null, icon) : null, label);
        return React.createElement("div", {
          className: className
        }, isLeftAligned ? React.createElement(LeftAlignedItem, {
          isStacked: isStacked
        }, input, labelAndButton, detail ? React.createElement(StyledDetail, {
          isStacked: isStacked
        }, detail) : null) : React.createElement(StyledItem, {
          isStacked: isStacked
        }, input, labelAndButton, detail ? React.createElement(StyledDetail, {
          isStacked: isStacked
        }, detail) : null));
      }
    }]);

    return SelectableItem;
  }(Component);

SelectableItem.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Optional text, SVG or element displayed on the right-hand side
   */
  detail: PropTypes.node,

  /**
   * Optional icon (SVG) displayed on the left-hand side
   */
  icon: PropTypes.node,

  /**
   * `true` if the item is checked
   */
  isChecked: PropTypes.bool,

  /**
   * Left-aligned style
   */
  isLeftAligned: PropTypes.bool,

  /**
   * Read only and disabled state
   */
  isReadOnly: PropTypes.bool,

  /**
   * Stacked style, designed to be used with isHorizontal SelectableList
   */
  isStacked: PropTypes.bool,

  /**
   * Label
   */
  label: PropTypes.string.isRequired,

  /**
   * Called whenever this item becomes selected or unselected. Two arguments are provided,
   * `isChecked` and the `value` prop that was passed in.
   */
  onChange: PropTypes.func,

  /**
   * A value to be passed to `onChange`
   */
  value: PropTypes.string.isRequired
};
SelectableItem.defaultProps = {
  onChange: function onChange() { },
  isChecked: false,
  isLeftAligned: false,
  isReadOnly: false,
  isStacked: false
};
export default i18n.withTranslation()(withComponents(SelectableItem)); // auto-add i18n