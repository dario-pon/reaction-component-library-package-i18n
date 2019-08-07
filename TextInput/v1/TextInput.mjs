import "core-js/modules/es6.function.name";
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
import { applyTheme } from "../../utils";
/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns a value from the theme
 *   based on the current validation state reflected in `props`.
 *   If `isOnDarkBackground` prop is `true`, the theme prop with "dark"
 *   appended is used; otherwise the theme prop with "default" appended
 *   is used.
 * @param {String} themeProp The name of the theme variable to get the value for
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */

function applyThemeVariant(themeProp) {
  return function (props) {
    var inputType = props.isOnDarkBackground ? "dark" : "default";
    return applyTheme("".concat(themeProp, "_").concat(inputType));
  };
}
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
    } else if (props.isInputFocused || props.isButtonFocused) {
      status = "focus";
    } else {
      status = "default";
    }

    return applyTheme("".concat(themeProp, "_").concat(status));
  };
}
/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns a value from the theme
 *   based on the current validation state reflected in `props`.
 *   If `isTextarea` prop is `true`, returns `textareaValue`, else `inputValue`
 * @param {String} textareaValue The value to use if the input is a textarea
 * @param {String} inputValue The value to use if the input is an input
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */


function applyTextareaVariant(textareaValue, inputValue) {
  return function (_ref) {
    var isTextarea = _ref.isTextarea;

    if (isTextarea) {
      return textareaValue;
    }

    return inputValue;
  };
}

var InputWrapper = styled.div.withConfig({
  displayName: "TextInput__InputWrapper",
  componentId: "sc-9jjo1u-0"
})(["-webkit-font-smoothing:antialiased;background-color:", ";border:1px solid ", ";border-radius:", ";box-sizing:border-box;color:", ";display:flex;flex-direction:row;font-family:", ";font-size:", ";line-height:", ";outline:none;padding:", " ", ";position:relative;"], applyThemeVariant("Input.backgroundColor"), applyValidationColor("Input.borderColor"), applyTheme("Input.borderRadius"), applyValidationColor("Input.color"), applyTheme("Input.fontFamily"), applyTheme("Input.fontSize"), applyTheme("Input.lineHeight"), applyTheme("Input.verticalPadding"), applyTheme("Input.horizontalPadding"));
var StyledInput = styled.input.withConfig({
  displayName: "TextInput__StyledInput",
  componentId: "sc-9jjo1u-1"
})(["background-color:inherit;border:none;box-sizing:border-box;color:inherit;flex-grow:2;font-family:", ";font-size:", ";outline:none;&::placeholder{color:", ";}&:read-only{color:", ";}"], applyTheme("Input.fontFamily"), applyTheme("Input.fontSize"), applyTheme("Input.placeholderColor"), applyTheme("Input.color_disabled"));
var Textarea = StyledInput.withComponent("textarea");
var StyledTextarea = styled(Textarea).withConfig({
  displayName: "TextInput__StyledTextarea",
  componentId: "sc-9jjo1u-2"
})(["-webkit-font-smoothing:antialiased;background-color:", ";border-radius:", ";border:1px solid ", ";color:", ";font-family:", ";font-size:", ";line-height:", ";min-height:", ";outline:none;padding:", " ", ";resize:vertical;width:100%;&:read-only{color:", ";}"], applyThemeVariant("Input.backgroundColor"), applyTheme("Input.borderRadius"), applyValidationColor("Input.borderColor"), applyValidationColor("Input.color"), applyTheme("Input.fontFamily"), applyTheme("Input.fontSize"), applyTheme("Textarea.lineHeight"), applyTheme("Textarea.height"), applyTheme("Input.verticalPadding"), applyTheme("Input.horizontalPadding"), applyTheme("Input.color_disabled"));
var IconWrapper = styled.div.withConfig({
  displayName: "TextInput__IconWrapper",
  componentId: "sc-9jjo1u-3"
})(["box-sizing:border-box;margin-left:", ";height:", ";width:", ";position:relative;right:", ";top:", ";& *{display:inline-block;}"], applyTheme("Input.horizontalPadding"), applyTheme("Input.iconWrapperSize"), applyTheme("Input.iconWrapperSize"), applyTextareaVariant(applyTheme("Textarea.iconRight"), 0), applyTextareaVariant(applyTheme("Textarea.iconTop"), 0));
var ClearButton = styled.div.withConfig({
  displayName: "TextInput__ClearButton",
  componentId: "sc-9jjo1u-4"
})(["background-color:transparent;border:none;border-radius:", ";box-sizing:border-box;color:", ";cursor:pointer;height:100%;margin:0;padding:0;position:relative;&:hover,&:focus{background-color:\"transparent\";outline:none;}& span{border:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;position:absolute !important;width:1px;word-wrap:normal !important;}}"], applyTheme("Input.borderRadius"), applyTheme("Input.clearButtonColor"));
var TextareaClearButton = styled.div.withConfig({
  displayName: "TextInput__TextareaClearButton",
  componentId: "sc-9jjo1u-5"
})(["background-color:", ";border-radius:", ";border:1px solid ", ";box-sizing:content-box;color:", ";cursor:pointer;display:inline-block;font-size:", ";height:", ";margin:0;padding:", ";line-height:0;&:hover,&:focus{background-color:\"transparent\";outline:none;}& span{margin-left:0.3125rem;vertical-align:middle;}"], applyTheme("Input.clearButtonLargeBackgroundColor"), applyTheme("Input.borderRadius"), applyTheme("Input.clearButtonLargeBorderColor"), applyTheme("Input.clearButtonColor"), applyTheme("Textarea.clearButtonFontSize"), applyTheme("Textarea.clearButtonFontSize"), applyTheme("Textarea.clearButtonPadding"));

var stringDefaultEquals = function stringDefaultEquals(value1, value2) {
  return (value1 || "") === (value2 || "");
};

var TextInput =
/*#__PURE__*/
function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this, props));

    _this.onKeyPress = function (event) {
      var onSubmit = _this.props.onSubmit;
      if (event.which === 13) onSubmit();
    };

    _this.onInputBlur = function (event) {
      // when a user clicks the input's clear button the input will blur
      // and remove the button before the onClick event fires. This timeout will
      // keep the button rendered long enough for the onClick event to fire.
      setTimeout(function () {
        if (_this._isMounted) {
          _this.setState({
            isInputFocused: false
          });
        }
      }, 150);

      _this.setValue(event.target.value, false);
    };

    _this.onButtonBlur = function () {
      _this.setState({
        isButtonFocused: false
      });
    };

    _this.onChange = function (event) {
      var value = event.target.value;
      value = value || "";

      _this.setState({
        value: value
      });

      _this.handleChanging(value);
    };

    _this.onInputFocus = function () {
      _this.setState({
        isInputFocused: true
      });
    };

    _this.onButtonFocus = function () {
      _this.setState({
        isButtonFocused: true
      });
    };

    _this.onClearValue = function () {
      _this.setValue();

      _this.onButtonBlur();
    };

    var _value = props.value || "";

    _this.state = {
      initialValue: _value,
      value: _value,
      isInputFocused: false,
      isButtonFocused: false
    };
    return _this;
  }

  _createClass(TextInput, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var value = this.state.value;
      this.handleChanging(value);
      this.handleChanged(value);
      this._isMounted = true;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = this.props.value;
      var stateValue = this.state.value;
      var nextValue = nextProps.value; // Whenever a changed value prop comes in, and doesn't match our state,
      // and therefore was from outside this input, we reset state to that, thus becoming clean.

      if (!stringDefaultEquals(value, nextValue) && !stringDefaultEquals(stateValue, nextValue)) {
        this.setValue(nextValue, true);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var value = this.state.value;
      var prevValue = prevState.value;

      if (!stringDefaultEquals(value, prevValue)) {
        this.handleChanging(value);
      } // We do not worry about whether value has changed when calling handleChanged
      // because it will do its own check against a different value. In fact, often
      // value will not differ from prevValue here because `value` tracks "changing"
      // rather than "changed".


      if (this.shouldCallChanged) {
        this.shouldCallChanged = false;
        this.handleChanged(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.cleanValue(this.state.value);
    }
  }, {
    key: "setValue",
    value: function setValue(value, shouldSetInitialValue) {
      this.shouldCallChanged = true;
      this.setState({
        value: value || ""
      });

      if (shouldSetInitialValue) {
        this.setState({
          initialValue: value || ""
        });
      }
    }
  }, {
    key: "cleanValue",
    value: function cleanValue(value) {
      var _this$props = this.props,
          shouldConvertEmptyStringToNull = _this$props.shouldConvertEmptyStringToNull,
          shouldTrimValue = _this$props.shouldTrimValue;
      var outputValue = shouldTrimValue ? (value || "").trim() : value || "";
      if (shouldConvertEmptyStringToNull && outputValue === "") outputValue = null;
      return outputValue;
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      this.setValue(this.props.value, true);
    }
  }, {
    key: "handleChanged",
    value: function handleChanged(value) {
      var onChange = this.props.onChange;
      var outputValue = this.cleanValue(value);

      if (outputValue !== this.lastChangedValue) {
        this.lastChangedValue = outputValue;
        onChange(outputValue);
      }
    }
  }, {
    key: "handleChanging",
    value: function handleChanging(value) {
      var onChanging = this.props.onChanging;
      var outputValue = this.cleanValue(value);

      if (outputValue !== this.lastChangingValue) {
        this.lastChangingValue = outputValue;
        onChanging(outputValue);
      }
    } // Input is dirty if value prop doesn't match value state. Whenever a changed
    // value prop comes in, we reset state to that, thus becoming clean.

  }, {
    key: "isDirty",
    value: function isDirty() {
      var _this$state = this.state,
          initialValue = _this$state.initialValue,
          value = _this$state.value;
      return !stringDefaultEquals(value, initialValue);
    }
  }, {
    key: "showClearButton",
    value: function showClearButton() {
      var isReadOnly = this.props.isReadOnly;
      var _this$state2 = this.state,
          isInputFocused = _this$state2.isInputFocused,
          isButtonFocused = _this$state2.isButtonFocused;
      return (this.getValue() && isInputFocused || this.getValue() && isButtonFocused) && !isReadOnly;
    }
  }, {
    key: "renderClearButton",
    value: function renderClearButton() {
      var _this$props2 = this.props,
          components = _this$props2.components,
          shouldAllowLineBreaks = _this$props2.shouldAllowLineBreaks,
          errors = _this$props2.errors,
          hasBeenValidated = _this$props2.hasBeenValidated,
          iconClearAccessibilityText = _this$props2.iconClearAccessibilityText;

      var _ref2 = components || {},
          iconClear = _ref2.iconClear;

      var value = this.state.value;
      if (!iconClear) return null;

      if (shouldAllowLineBreaks) {
        return React.createElement(TextareaClearButton, {
          onClick: this.onClearValue,
          onFocus: this.onButtonFocus,
          onBlur: this.onButtonBlur,
          tabIndex: -1
        }, iconClear, React.createElement("span", null, t(iconClearAccessibilityText)));
      }

      return React.createElement(IconWrapper, {
        errors: errors,
        hasBeenValidated: hasBeenValidated,
        isTextarea: shouldAllowLineBreaks,
        value: value
      }, React.createElement(ClearButton, {
        onClick: this.onClearValue,
        onFocus: this.onButtonFocus,
        onBlur: this.onButtonBlur,
        tabIndex: -1
      }, iconClear, React.createElement("span", null, t(iconClearAccessibilityText))));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props3 = this.props,
          components = _this$props3.components,
          errors = _this$props3.errors,
          hasBeenValidated = _this$props3.hasBeenValidated,
          icon = _this$props3.icon,
          onIconClick = _this$props3.onIconClick,
          shouldAllowLineBreaks = _this$props3.shouldAllowLineBreaks;

      var _ref3 = components || {},
          iconValid = _ref3.iconValid,
          iconError = _ref3.iconError;

      var value = this.state.value;
      var inputIcon;

      if (errors && errors.length) {
        inputIcon = iconError;
      } else if (hasBeenValidated && value && value.length) {
        inputIcon = iconValid;
      } else {
        inputIcon = icon;
      }

      if (!inputIcon) return null;
      return React.createElement(IconWrapper, {
        errors: errors,
        hasBeenValidated: hasBeenValidated,
        onClick: onIconClick,
        isTextarea: shouldAllowLineBreaks,
        value: value
      }, inputIcon);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          errors = _this$props4.errors,
          hasBeenValidated = _this$props4.hasBeenValidated,
          id = _this$props4.id,
          isOnDarkBackground = _this$props4.isOnDarkBackground,
          isReadOnly = _this$props4.isReadOnly,
          maxLength = _this$props4.maxLength,
          name = _this$props4.name,
          placeholder = _this$props4.placeholder,
          shouldAllowLineBreaks = _this$props4.shouldAllowLineBreaks,
          type = _this$props4.type;
      var _this$state3 = this.state,
          isButtonFocused = _this$state3.isButtonFocused,
          isInputFocused = _this$state3.isInputFocused,
          value = _this$state3.value;

      if (shouldAllowLineBreaks) {
        // Same as "input" but without `onKeyPress` and `type` props.
        // We don"t support rows; use style to set height instead
        return React.createElement("div", {
          style: {
            position: "relative"
          }
        }, React.createElement(StyledTextarea, {
          className: className,
          errors: errors,
          fieldIsDirty: this.isDirty(),
          hasBeenValidated: hasBeenValidated,
          id: id,
          isOnDarkBackground: isOnDarkBackground,
          maxLength: maxLength,
          name: name,
          onBlur: this.onInputBlur,
          onChange: this.onChange,
          onFocus: this.onInputFocus,
          placeholder: placeholder,
          readOnly: isReadOnly,
          value: value
        }), this.showClearButton() ? this.renderClearButton() : null);
      }

      return React.createElement(InputWrapper, {
        errors: errors,
        hasBeenValidated: hasBeenValidated,
        isButtonFocused: isButtonFocused,
        isInputFocused: isInputFocused,
        isOnDarkBackground: isOnDarkBackground,
        value: value
      }, React.createElement(StyledInput, {
        className: className,
        errors: errors,
        hasBeenValidated: hasBeenValidated,
        id: id,
        isOnDarkBackground: isOnDarkBackground,
        maxLength: maxLength,
        name: name,
        onBlur: this.onInputBlur,
        onChange: this.onChange,
        onFocus: this.onInputFocus,
        onKeyPress: this.onKeyPress,
        placeholder: placeholder,
        readOnly: isReadOnly,
        type: type,
        value: value
      }), this.showClearButton() ? this.renderClearButton() : this.renderIcon());
    }
  }]);

  return TextInput;
}(Component);

TextInput.isFormInput = true;
TextInput.propTypes = {
  /**
   * Custom class name
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
     * Pass an element (e.g., rendered SVG) to use as the clear button icon
     */
    iconClear: PropTypes.node,

    /**
     * Pass an element (e.g., rendered SVG) to use as the error icon
     */
    iconError: PropTypes.node,

    /**
     * Pass an element (e.g., rendered SVG) to use as the valid icon
     */
    iconValid: PropTypes.node
  }),

  /**
   * An array of validation errors
   */
  errors: PropTypes.array,

  /**
   * Enable when a input's value has been validated
   */
  hasBeenValidated: PropTypes.bool,

  /**
   * Add an icon to the input by passing an icon node,
  */
  icon: PropTypes.node,

  /**
   * Add extra context to your icon for assistive technologies
   */
  iconAccessibilityText: PropTypes.string,

  /**
   * Overwrite the default clear input icon accessibility text
   */
  iconClearAccessibilityText: PropTypes.string,

  /**
   * This should be used only for connecting the input with a label. Generate a
   * globally unique ID string and pass it to this prop and the `labelFor` prop
   * of `Field`.
   */
  id: PropTypes.string,

  /**
   * Enable when using the input on a dark background, disabled by default
   */
  isOnDarkBackground: PropTypes.bool,

  /**
   * Enable to make the input read only / disabled, disabled by default
   */
  isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * Max amount of characters allowed in input
   */
  maxLength: PropTypes.number,

  /**
   * Input name
   */
  name: PropTypes.string,

  /**
   * On change handler for input
   */
  onChange: PropTypes.func,

  /**
   * On changing handler for input
   */
  onChanging: PropTypes.func,

  /**
   * Custom click handler for added icon
   */
  onIconClick: PropTypes.func,

  /**
   * On submit handler for input
   */
  onSubmit: PropTypes.func,

  /**
   * Input placeholder text
   */
  placeholder: PropTypes.string,

  /**
   * Enable this when you need a textarea for multi line values, disabled by default
   */
  shouldAllowLineBreaks: PropTypes.bool,

  /**
   * If the input returns an empty string value convert it to a null value, enabled by default
   */
  shouldConvertEmptyStringToNull: PropTypes.bool,

  /**
   * Enable this when you want to trim empty spaces from the begining and end of the input's returned value, enabled by default
   */
  shouldTrimValue: PropTypes.bool,

  /**
   * The HTML input type for the text input, the input only supports "email", "password", "text", "url" defaults to "text"
   */
  type: PropTypes.oneOf(["email", "password", "text", "url"]),

  /**
   * Prepopulate the input's value
   */
  value: PropTypes.string
};
TextInput.defaultProps = {
  hasBeenValidated: false,
  iconClearAccessibilityText: "Clear",
  isOnDarkBackground: false,
  isReadOnly: false,
  onChange: function onChange() {},
  onChanging: function onChanging() {},
  onIconClick: function onIconClick() {},
  onSubmit: function onSubmit() {},
  shouldAllowLineBreaks: false,
  shouldConvertEmptyStringToNull: true,
  shouldTrimValue: true,
  type: "text"
};
export default i18n.withTranslation()(withComponents(TextInput)); // auto-add i18n