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
import { applyTheme, addTypographyStyles } from "../../utils";
var AccordionWrapper = styled.div.withConfig({
  displayName: "Accordion__AccordionWrapper",
  componentId: "iql5j5-0"
})(["border-color:", ";border-style:", ";border-width:", ";box-sizing:border-box;color:inherit;overflow:hidden;&:first-of-type{border-top-left-radius:", ";border-top-right-radius:", ";}&:not(:first-of-type){border-top:none;}"], applyTheme("Accordion.borderColor"), applyTheme("Accordion.borderStyle"), applyTheme("Accordion.borderWidth"), applyTheme("Accordion.borderRadius"), applyTheme("Accordion.borderRadius"));
var AccordionHeader = styled.div.withConfig({
  displayName: "Accordion__AccordionHeader",
  componentId: "iql5j5-1"
})(["cursor:pointer;display:flex;justify-content:space-between;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], applyTheme("Accordion.paddingBottom"), applyTheme("Accordion.paddingLeft"), applyTheme("Accordion.paddingRight"), applyTheme("Accordion.paddingTop"));
var AccordionHeaderLabel = styled.span.withConfig({
  displayName: "Accordion__AccordionHeaderLabel",
  componentId: "iql5j5-2"
})(["", ";"], addTypographyStyles("AccordionHeaderLabel", "labelTextBold"));
var AccordionHeaderDetail = styled.span.withConfig({
  displayName: "Accordion__AccordionHeaderDetail",
  componentId: "iql5j5-3"
})(["", ";"], addTypographyStyles("AccordionHeaderDetail", "labelText"));
var AccordionHeaderIcon = styled.span.withConfig({
  displayName: "Accordion__AccordionHeaderIcon",
  componentId: "iql5j5-4"
})(["height:", ";margin:0;width:", ";svg{height:", ";transform:", ";transition:", ";width:", ";}"], applyTheme("Accordion.iconHeight"), applyTheme("Accordion.iconWidth"), applyTheme("Accordion.iconHeight"), function (_ref) {
  var isExpanded = _ref.isExpanded;
  return isExpanded ? "rotateZ(180deg)" : "rotateZ(0)";
}, applyTheme("Accordion.iconTransition"), applyTheme("Accordion.iconWidth"));
var AccordionContent = styled.div.withConfig({
  displayName: "Accordion__AccordionContent",
  componentId: "iql5j5-5"
})(["background-color:", ";border-top-color:", ";border-top-style:", ";border-top-width:", ";color:inherit;height:auto;max-height:", ";overflow:hidden;padding:", ";transition:", ";"], applyTheme("Accordion.contentBackgroundColor"), applyTheme("Accordion.borderColor"), applyTheme("Accordion.borderStyle"), function (_ref2) {
  var isExpanded = _ref2.isExpanded;
  return isExpanded ? applyTheme("Accordion.borderWidth") : "0";
}, function (_ref3) {
  var isExpanded = _ref3.isExpanded;
  return isExpanded ? "150vh" : "0";
}, function (_ref4) {
  var isExpanded = _ref4.isExpanded;
  return isExpanded ? applyTheme("Accordion.padding") : "0";
}, function (_ref5) {
  var isExpanded = _ref5.isExpanded;
  return isExpanded ? applyTheme("Accordion.openTransition") : applyTheme("Accordion.closeTransition");
});

var Accordion =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Accordion, _Component);

    function Accordion() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Accordion);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Accordion)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        isExpanded: _this.props.isExpanded
      };
      _this._accordion = null;

      _this.toggle = function () {
        return _this.handleToggle();
      };

      _this.handleToggle = function () {
        var isExpanded = _this.state.isExpanded;

        _this.setState({
          isExpanded: !isExpanded
        });
      };

      return _this;
    }

    _createClass(Accordion, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          iconExpand = _this$props.components.iconExpand,
          detail = _this$props.detail,
          icon = _this$props.icon,
          label = _this$props.label;
        var isExpanded = this.state.isExpanded;
        return React.createElement(AccordionWrapper, {
          className: className,
          ref: function ref(accordionEl) {
            _this2._accordion = accordionEl;
          }
        }, React.createElement(AccordionHeader, {
          onClick: this.handleToggle
        }, React.createElement("span", null, icon ? React.createElement(AccordionHeaderIcon, null, icon) : null, React.createElement(AccordionHeaderLabel, null, label), detail ? React.createElement(AccordionHeaderDetail, null, ", ", detail) : ""), React.createElement(AccordionHeaderIcon, {
          isExpanded: isExpanded
        }, iconExpand)), React.createElement(AccordionContent, {
          isExpanded: isExpanded
        }, children));
      }
    }]);

    return Accordion;
  }(Component);

Accordion.propTypes = {
  /**
   * Content to be displayed inside the accordion
   */
  children: PropTypes.any,

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
    iconExpand: PropTypes.node.isRequired
  }).isRequired,

  /**
   * Accordion header details
   */
  detail: PropTypes.string,

  /**
   * Accordion header icon
   */
  icon: PropTypes.node,

  /**
   * Render expanded accordion
   */
  isExpanded: PropTypes.bool,

  /**
   * Accordion header bold label
   */
  label: PropTypes.string.isRequired
};
Accordion.defaultProps = {
  isExpanded: false
};
export default i18n.withTranslation()(withComponents(Accordion)); // auto-add i18n