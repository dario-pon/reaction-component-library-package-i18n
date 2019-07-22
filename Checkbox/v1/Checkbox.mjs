import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../utils";
var StyledDiv = styled.div.withConfig({
  displayName: "Checkbox__StyledDiv",
  componentId: "sc-1abqzv2-0"
})(["margin-bottom:", ";"], applyTheme("Checkbox.verticalSpacing"));
/* eslint-disable max-len */

/* eslint-disable quotes */
// credit https://fontawesome.com/icons/check?style=solid

var checkboxIconSVG = function checkboxIconSVG(props) {
  return encodeURIComponent("<svg aria-hidden='true' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='".concat(applyTheme("Checkbox.iconColor")(props), "' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path></svg>"));
};
/* eslint-enable quotes */

/* eslint-enable max-len */
// Opacity: 0 hides the default input and position: absolute removes it
// from the flow so that it doesn't push the styled checkbox to the right.


var StyledInput = styled.input.withConfig({
  displayName: "Checkbox__StyledInput",
  componentId: "sc-1abqzv2-1"
})(["opacity:0;position:absolute;+ label::after{content:\" \";}&:checked + label::after{background-image:", ";display:inline-block;position:absolute;width:", ";height:", ";top:", ";left:", ";}&:focus + label::before{outline:", ";}&:disabled + label{opacity:", ";}&:disabled + label::before{background:", ";opacity:", ";}&:disabled + label:hover{cursor:not-allowed;}"], function (props) {
  return "url(\"data:image/svg+xml; utf8,".concat(checkboxIconSVG(props), "\")");
}, applyTheme("Checkbox.iconSize"), applyTheme("Checkbox.iconSize"), applyTheme("Checkbox.iconTopOffset"), applyTheme("Checkbox.iconLeftOffset"), applyTheme("Checkbox.focusStyle"), applyTheme("Checkbox.disabledOpacity"), applyTheme("Checkbox.disabledColor"), applyTheme("Checkbox.disabledOpacity"));
var StyledLabel = styled.label.withConfig({
  displayName: "Checkbox__StyledLabel",
  componentId: "sc-1abqzv2-2"
})(["", " display:inline-block;line-height:", ";padding-left:", ";position:relative;&:hover{cursor:pointer;}&::before,&::after{position:absolute;}&::before{content:\" \";border-color:", ";border-radius:", ";border-style:solid;border-width:", ";box-sizing:border-box;display:inline-block;height:", ";left:", ";top:", ";width:", ";}"], addTypographyStyles("CheckboxLabel", "labelText"), applyTheme("Checkbox.size"), applyTheme("Checkbox.labelSpacing"), applyTheme("Checkbox.borderColor"), applyTheme("Checkbox.borderRadius"), applyTheme("Checkbox.borderWidth"), applyTheme("Checkbox.size"), applyTheme("Checkbox.leftSpacing"), applyTheme("Checkbox.topSpacing"), applyTheme("Checkbox.size"));

var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));

    _this.onChange = function (event) {
      _this.setValue(event.target.checked);
    };

    _this.state = {
      id: uniqueId("Checkbox_"),
      value: props.value || false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.handleChange(this.props.value || false);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = this.props.value;
      var nextValue = nextProps.value; // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.

      if (value !== nextValue) {
        this.setState({
          value: nextValue || false
        });
        this.handleChange(nextValue || false);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        value: value
      });
      this.handleChange(value);
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      this.setValue(this.props.value || false);
    }
  }, {
    key: "handleChange",
    value: function handleChange(checked) {
      if (this.lastValue === checked) return;
      this.lastValue = checked;
      var _this$props = this.props,
          onChanging = _this$props.onChanging,
          onChange = _this$props.onChange;
      onChanging(checked);
      onChange(checked);
    } // Input is dirty if value prop doesn't match value state. Whenever a changed
    // value prop comes in, we reset state to that, thus becoming clean.

  }, {
    key: "isDirty",
    value: function isDirty() {
      return this.state.value !== this.props.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          isReadOnly = _this$props2.isReadOnly,
          label = _this$props2.label;
      var _this$state = this.state,
          id = _this$state.id,
          value = _this$state.value;
      return React.createElement(StyledDiv, {
        className: className
      }, React.createElement(StyledInput, {
        checked: value === true,
        id: id,
        onChange: this.onChange,
        disabled: isReadOnly,
        type: "checkbox",
        value: "true"
      }), React.createElement(StyledLabel, {
        htmlFor: id
      }, label));
    }
  }]);

  return Checkbox;
}(Component);

Checkbox.propTypes = {
  /**
   * Custom class name
   */
  className: PropTypes.string,

  /**
   * Enable to make the checkbox read-only / disabled by default
   */
  isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * Label for checkbox for viewers to read
   */
  label: PropTypes.string.isRequired,

  /**
   * Name of input
   */
  name: PropTypes.string,

  /**
   * On change handler for input
   */
  onChange: PropTypes.func,

  /**
   * On change handler for input
   */
  onChanging: PropTypes.func,

  /**
   * True for a checked checkbox, undefined for an unchecked checkbox
   */
  value: PropTypes.bool // eslint-disable-line react/boolean-prop-naming

};
Checkbox.defaultProps = {
  className: undefined,
  isReadOnly: false,
  name: undefined,
  onChange: function onChange() {},
  onChanging: function onChanging() {},
  value: undefined
};
Checkbox.isFormInput = true;
export default Checkbox;