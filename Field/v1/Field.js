"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

// auto-add i18n 

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

    return (0, _utils.applyTheme)("".concat(themeProp, "_").concat(status));
  };
}

var StyledField = _styledComponents.default.div.withConfig({
  displayName: "Field__StyledField",
  componentId: "qlv3w9-0"
})(["margin-bottom:", ";margin-left:0;margin-right:0;margin-top:", ";"], (0, _utils.applyTheme)("Field.spacingBelow"), (0, _utils.applyTheme)("Field.spacingAbove"));

var StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "Field__StyledLabel",
  componentId: "qlv3w9-1"
})(["", " color:", ";display:block;margin-bottom:", ";margin-left:0;margin-right:0;margin-top:0;"], (0, _utils.addTypographyStyles)("FieldLabel", "labelText"), applyValidationColor("FieldLabel.color"), (0, _utils.applyTheme)("FieldLabel.spacingToInput"));

var StyledHelpText = _styledComponents.default.span.withConfig({
  displayName: "Field__StyledHelpText",
  componentId: "qlv3w9-2"
})(["", " display:block;margin-bottom:0;margin-left:0;margin-right:0;margin-top:", ";"], (0, _utils.addTypographyStyles)("FieldHelp", "labelText"), (0, _utils.applyTheme)("FieldHelp.spacingToInput"));

var Field =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Field, _Component);

  function Field() {
    (0, _classCallCheck2.default)(this, Field);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Field).apply(this, arguments));
  }

  (0, _createClass2.default)(Field, [{
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
      return _react.default.createElement(StyledLabel, {
        className: labelClassName,
        errors: errors,
        htmlFor: labelFor
      }, label, isOptional ? " (Optional)" : null);
    }
  }, {
    key: "renderHelpText",
    value: function renderHelpText() {
      var helpText = this.props.helpText;
      return _react.default.createElement(StyledHelpText, null, t(helpText));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          helpText = _this$props3.helpText,
          label = _this$props3.label;
      return _react.default.createElement(StyledField, {
        className: this.getClassName()
      }, !(0, _lodash.default)(label) && this.renderLabel(), children, !(0, _lodash.default)(helpText) && this.renderHelpText());
    }
  }]);
  return Field;
}(_react.Component);

Field.isFormField = true;
Field.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  errors: _propTypes.default.array,
  helpText: _propTypes.default.string,
  isOptional: _propTypes.default.bool,
  isRequired: _propTypes.default.bool,
  label: _propTypes.default.node,
  labelClassName: _propTypes.default.string,
  labelFor: _propTypes.default.string
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

var _default = _utils.default.withTranslation()(Field); // auto-add i18n


exports.default = _default;