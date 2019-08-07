import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import { addTypographyStyles, applyTheme } from "../../utils";
/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns a validation color from the theme
 *   based on the current validation state reflected in `props`
 * @param {String} themeProp The name of the theme variable to get the value for
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */

function applyValidationColor(themeProp) {
  return function (props) {
    var status;

    if (props.errors && props.errors.length) {
      status = "error";
    } else if (props.hasBeenValidated && props.value && props.value.length) {
      status = "success";
    } else if (props.inputFocused || props.buttonFocused) {
      status = "focus";
    } else {
      status = "default";
    }

    return applyTheme("".concat(themeProp, "_").concat(status));
  };
}

var StyledField = styled.div.withConfig({
  displayName: "Field__StyledField",
  componentId: "qlv3w9-0"
})(["margin-bottom:", ";margin-left:0;margin-right:0;margin-top:", ";"], applyTheme("Field.spacingBelow"), applyTheme("Field.spacingAbove"));
var StyledLabel = styled.label.withConfig({
  displayName: "Field__StyledLabel",
  componentId: "qlv3w9-1"
})(["", " color:", ";display:block;margin-bottom:", ";margin-left:0;margin-right:0;margin-top:0;"], addTypographyStyles("FieldLabel", "labelText"), applyValidationColor("FieldLabel.color"), applyTheme("FieldLabel.spacingToInput"));
var StyledHelpText = styled.span.withConfig({
  displayName: "Field__StyledHelpText",
  componentId: "qlv3w9-2"
})(["", " display:block;margin-bottom:0;margin-left:0;margin-right:0;margin-top:", ";"], addTypographyStyles("FieldHelp", "labelText"), applyTheme("FieldHelp.spacingToInput"));

var Field =
/*#__PURE__*/
function (_Component) {
  _inherits(Field, _Component);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, _getPrototypeOf(Field).apply(this, arguments));
  }

  _createClass(Field, [{
    key: "getClassName",
    value: function getClassName() {
      var _this$props = this.props,
          className = _this$props.className,
          errors = _this$props.errors,
          isRequired = _this$props.isRequired;
      var errorClass = Array.isArray(errors) && errors.length > 0 ? "has-error" : "";
      var requiredClass = isRequired ? "required" : "";
      return "".concat(className || "", " ").concat(errorClass, " ").concat(requiredClass).trim();
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props2 = this.props,
          errors = _this$props2.errors,
          label = _this$props2.label,
          labelClassName = _this$props2.labelClassName,
          labelFor = _this$props2.labelFor,
          isOptional = _this$props2.isOptional;
      return React.createElement(StyledLabel, {
        className: labelClassName,
        errors: errors,
        htmlFor: labelFor
      }, label, isOptional ? " (Optional)" : null);
    }
  }, {
    key: "renderHelpText",
    value: function renderHelpText() {
      var helpText = this.props.helpText;
      return React.createElement(StyledHelpText, null, t(helpText));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          helpText = _this$props3.helpText,
          label = _this$props3.label;
      return React.createElement(StyledField, {
        className: this.getClassName()
      }, !isEmpty(label) && this.renderLabel(), children, !isEmpty(helpText) && this.renderHelpText());
    }
  }]);

  return Field;
}(Component);

Field.isFormField = true;
Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  errors: PropTypes.array,
  helpText: PropTypes.string,
  isOptional: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  labelClassName: PropTypes.string,
  labelFor: PropTypes.string
};
Field.defaultProps = {
  className: undefined,
  errors: undefined,
  label: undefined,
  labelClassName: undefined,
  labelFor: undefined,
  isOptional: false,
  isRequired: false
};
export default i18n.withTranslation()(Field); // auto-add i18n