import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _extends from "@babel/runtime/helpers/esm/extends";
import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.string.includes";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.sort";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from "react";
import isEqual from "lodash.isequal";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import { applyTheme, CustomPropTypes } from "../../utils"; // This is currently mostly to ensure that this stays above our code examples in the
// style guide UI, which have zIndexes of 2 and 3 in some places. This might need to
// be taken from the theme eventually, though, if people have problems in other places.

var MENU_Z_INDEX = 4;

var nullDefaultEquals = function nullDefaultEquals(value1, value2) {
  return (value1 || null) === (value2 || null);
}; // Rather than pass through all props to react-select, we'll keep a whitelist
// to better control the usage and appearance of this component.


var supportedPassthroughProps = ["autoFocus", "backspaceRemovesValue", "blurInputOnSelect", "captureMenuScroll", "closeMenuOnSelect", "components", "defaultValue", "escapeClearsValue", "formatGroupLabel", "formatOptionLabel", "getOptionLabel", "getOptionValue", "hideSelectedOptions", "id", "inputValue", "isClearable", "isLoading", "isOptionDisabled", "isRtl", "isSearchable", "loadingMessage", "minMenuHeight", "maxMenuHeight", "maxValueHeight", "menuIsOpen", "menuPlacement", "noOptionsMessage", "onBlur", "onFocus", "onInputChange", "onKeyDown", "onMenuOpen", "onMenuClose", "onMenuScrollToTop", "onMenuScrollToBottom", "pageSize", "placeholder", "screenReaderStatus", "scrollMenuIntoView", "tabSelectsValue", "value"];
/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns a validation color from the theme
 *   based on the current validation state reflected in `props`
 * @param {String} themeProp The name of the theme variable to get the value for
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */

function applyValidationColor() {
  var themeProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "color";
  return function (props) {
    var status;

    if (props.errors && props.errors.length) {
      status = "error";
    } else if (props.hasBeenValidated && props.value && props.value.length) {
      status = "success";
    } else if (props.isFocused) {
      status = "focus";
    } else {
      status = "default";
    }

    return applyTheme("".concat(themeProp, "_").concat(status))(props);
  };
}

var getInputBorderColor = applyValidationColor("Input.borderColor");
var getInputFontSize = applyTheme("Input.fontSize");
var getSelectOptionHoverColor = applyTheme("MultiSelect.optionHoverColor");
var getSelectedOptionBackgroundColor = applyTheme("MultiSelect.selectedOptionBackgroundColor");
var getSelectIndicatorColor = applyTheme("MultiSelect.indicatorColor");
var getSelectLetterSpacing = applyTheme("MultiSelect.letterSpacing");
var getSelectTextColor = applyTheme("MultiSelect.textColor");
var getInputFontFamily = applyTheme("Input.fontFamily");
/**
 * @summary Returns custom Select styles
 * @param {Object} props The component props object
 * @returns {Object} The style object
 */

function getCustomStyles(props) {
  var maxWidth = props.maxWidth; // TODO isDark change bg color

  return {
    container: function container(base) {
      return _objectSpread({}, base, {
        maxWidth: maxWidth,
        fontFamily: getInputFontFamily(props),
        fontSize: getInputFontSize(props),
        paddingLeft: applyTheme("MultiSelect.paddingLeft")(props),
        paddingRight: applyTheme("MultiSelect.paddingRight")(props)
      });
    },
    control: function control(base, state) {
      return _objectSpread({}, base, {
        "borderColor": getInputBorderColor(_objectSpread({}, props, {
          isFocused: state.isFocused
        })),
        "borderTopLeftRadius": applyTheme("MultiSelect.borderTopLeftRadius")(props),
        "borderTopRightRadius": applyTheme("MultiSelect.borderTopRightRadius")(props),
        "borderBottomLeftRadius": applyTheme("MultiSelect.borderBottomLeftRadius")(props),
        "borderBottomRightRadius": applyTheme("MultiSelect.borderBottomRightRadius")(props),
        "boxShadow": "none",
        "cursor": "pointer",
        "&:hover": {
          borderColor: getInputBorderColor(_objectSpread({}, props, {
            isFocused: true
          }))
        }
      });
    },
    singleValue: function singleValue(base) {
      return _objectSpread({}, base, {
        letterSpacing: getSelectLetterSpacing(props)
      });
    },
    placeholder: function placeholder(base) {
      return _objectSpread({}, base, {
        letterSpacing: getSelectLetterSpacing(props)
      });
    },
    option: function option(base, state) {
      var backgroundColor;

      if (state.isSelected) {
        backgroundColor = getSelectedOptionBackgroundColor(props);
      } else if (state.isFocused) {
        backgroundColor = getSelectOptionHoverColor(props);
      } else {
        backgroundColor = "#FFFFFF";
      }

      return _objectSpread({}, base, {
        backgroundColor: backgroundColor,
        "color": getSelectTextColor(props),
        "cursor": "pointer",
        "letterSpacing": getSelectLetterSpacing(props),
        ":hover": {
          backgroundColor: getSelectOptionHoverColor(props)
        }
      });
    },
    dropdownIndicator: function dropdownIndicator(base, state) {
      return _objectSpread({}, base, {
        color: getSelectIndicatorColor(props),
        transform: state.selectProps.menuIsOpen ? "rotateX(-180deg)" : ""
      });
    },
    menuList: function menuList(base) {
      return _objectSpread({}, base, {
        paddingTop: 0,
        paddingBottom: 0
      });
    },
    menu: function menu(base) {
      return _objectSpread({}, base, {
        borderTopLeftRadius: applyTheme("SelectMenu.borderTopLeftRadius")(props),
        borderTopRightRadius: applyTheme("SelectMenu.borderTopRightRadius")(props),
        borderBottomLeftRadius: applyTheme("SelectMenu.borderBottomLeftRadius")(props),
        borderBottomRightRadius: applyTheme("SelectMenu.borderBottomRightRadius")(props),
        borderBottomStyle: "solid",
        borderBottomWidth: applyTheme("SelectMenu.borderBottomWidth")(props),
        borderBottomColor: applyTheme("SelectMenu.borderBottomColor")(props),
        borderLeftStyle: "solid",
        borderLeftWidth: applyTheme("SelectMenu.borderLeftWidth")(props),
        borderLeftColor: applyTheme("SelectMenu.borderLeftColor")(props),
        borderRightStyle: "solid",
        borderRightWidth: applyTheme("SelectMenu.borderRightWidth")(props),
        borderRightColor: applyTheme("SelectMenu.borderRightColor")(props),
        marginTop: 0,
        boxShadow: "none",
        zIndex: MENU_Z_INDEX
      });
    },
    multiValue: function multiValue(base) {
      return _objectSpread({}, base, {
        backgroundColor: applyTheme("MultiSelect.multiValueBackgroundColor")(props),
        borderStyle: applyTheme("MultiSelect.multiValueBorderStyle")(props),
        borderWidth: applyTheme("MultiSelect.multiValueBorderWidth")(props),
        borderColor: applyTheme("MultiSelect.multiValueBorderColor")(props),
        borderRadius: applyTheme("MultiSelect.multiValueBorderRadius")(props)
      });
    },
    multiValueLabel: function multiValueLabel(base) {
      return _objectSpread({}, base, {
        color: applyTheme("MultiSelect.multiValueLabelColor")(props),
        fontSize: getInputFontSize(props)
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      return _objectSpread({}, base, {
        "borderRadius": "0",
        "fontSize": getInputFontSize(props),
        "marginLeft": applyTheme("MultiSelect.multiValueRemoveLeftSpacing")(props),
        ":hover": {
          backgroundColor: applyTheme("MultiSelect.multiValueRemoveHoverBackgroundColor")(props),
          color: applyTheme("MultiSelect.multiValueRemoveHoverColor")(props)
        }
      });
    }
  };
}

var MultiSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiSelect, _Component);

  function MultiSelect(props) {
    var _this;

    _classCallCheck(this, MultiSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSelect).call(this, props));

    _this.handleChanged = function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onChanging = _this$props.onChanging;

      if (value !== _this.lastValue) {
        _this.lastValue = value;
        onChanging(value);
        onChange(value);
      }
    };

    _this.handleSelectLibChanged = function (selection) {
      var value = selection.map(function (item) {
        return item.value;
      });

      _this.setValue(value.length ? value : null);
    };

    _this.sortOptions = function (thisOpt, nextOpt) {
      if (thisOpt.options) thisOpt.options.sort(_this.sortOptions);
      if (nextOpt.options) nextOpt.options.sort(_this.sortOptions);

      if (thisOpt.label > nextOpt.label) {
        return 1;
      } else if (nextOpt.label > thisOpt.label) {
        return -1;
      }

      return 0;
    };

    _this.validateOptions(props.options);

    _this.state = {
      value: props.value || null
    };
    return _this;
  }

  _createClass(MultiSelect, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.handleChanged(this.state.value);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props2 = this.props,
          options = _this$props2.options,
          value = _this$props2.value;
      var nextOptions = nextProps.options,
          nextValue = nextProps.value; // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.

      if (!nullDefaultEquals(value, nextValue)) {
        this.setValue(nextValue);
      }

      if (!isEqual(options, nextOptions)) {
        this.validateOptions(nextOptions);
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
      this.handleChanged(value);
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      this.setValue(this.props.value);
    }
  }, {
    key: "isDirty",
    // Input is dirty if value prop doesn't match value state. Whenever a changed
    // value prop comes in, we reset state to that, thus becoming clean.
    value: function isDirty() {
      return (this.state.value || null) !== (this.props.value || null);
    } // Make sure all option values have the same data type, and record what that is

  }, {
    key: "validateOptions",
    value: function validateOptions(options) {
      var _this2 = this;

      (options || []).forEach(function (option) {
        if (option.optgroup) {
          _this2.validateOptions(option.options);
        } else {
          var checkDataType = _typeof(option.value);

          if (!_this2.dataType) {
            _this2.dataType = checkDataType;
          } else if (checkDataType !== _this2.dataType) {
            // eslint-disable-next-line
            throw new Error("All option values must have the same data type. The data type of the first option is \"".concat(_this2.dataType, "\" while the data type of the ").concat(option.label, " option is \"").concat(checkDataType, "\""));
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          className = _this$props3.className,
          alphabetize = _this$props3.alphabetize,
          isReadOnly = _this$props3.isReadOnly,
          options = _this$props3.options;
      var value = this.state.value; // Unfortunately right now, react-select optgroup support is just a tad different from the
      // composable form spec. Might be able to do a PR to get react-select updated.

      var reactSelectOptions = options.map(function (opt) {
        if (opt.options) {
          return {
            label: opt.optgroup,
            options: opt.options
          };
        }

        return opt;
      });

      if (alphabetize) {
        reactSelectOptions.sort(this.sortOptions);
      }

      var passthroughProps = {};
      supportedPassthroughProps.forEach(function (prop) {
        passthroughProps[prop] = _this3.props[prop];
      });
      var optionValue;

      if (value !== undefined && value !== null) {
        optionValue = [];
        reactSelectOptions.forEach(function (opt) {
          if (opt.options) {
            opt.options.forEach(function (subOpt) {
              if (value.includes(subOpt.value)) optionValue.push(subOpt);
            });
          }

          if (value.includes(opt.value)) optionValue.push(opt);
        });
      }

      return React.createElement(ReactSelect, _extends({}, passthroughProps, {
        className: className,
        isDisabled: isReadOnly,
        value: optionValue,
        components: {
          IndicatorSeparator: null
        },
        onChange: this.handleSelectLibChanged,
        options: reactSelectOptions,
        styles: getCustomStyles(this.props),
        isMulti: true
      }));
    }
  }]);

  return MultiSelect;
}(Component);

MultiSelect.propTypes = {
  /**
   * Alphabetize by option label
   */
  alphabetize: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Focus the control when it is mounted
   */
  autoFocus: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Remove the currently focused option when the user presses backspace
   */
  backspaceRemovesValue: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package.
   * Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices)
   */
  blurInputOnSelect: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent
   */
  captureMenuScroll: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Passed through to react-select package. Close the select menu when the user selects an option
   */
  closeMenuOnSelect: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Custom components to use
   */
  components: PropTypes.object,

  /**
   * Passed through to react-select package. default selected values
   */
  defaultValue: PropTypes.arrayOf(PropTypes.object),

  /**
   * An array of validation errors
   */
  errors: PropTypes.array,

  /**
   * Passed through to react-select package. Clear all values when the user presses escape AND the menu is closed
   */
  escapeClearsValue: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Formats group labels in the menu as React components
   */
  formatGroupLabel: PropTypes.func,

  /**
   * Passed through to react-select package. Formats option labels in the menu and control as React components
   */
  formatOptionLabel: PropTypes.func,

  /**
   * Passed through to react-select package. Resolves option data to a string to be displayed as the label by components
   */
  getOptionLabel: PropTypes.func,

  /**
   * Passed through to react-select package. Resolves option data to a string to compare options and specify value attributes
   */
  getOptionValue: PropTypes.func,

  /**
   * Enable when a input's value has been validated
   */
  hasBeenValidated: PropTypes.bool,

  /**
   * Passed through to react-select package. Hide the selected option from the menu
   */
  hideSelectedOptions: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. The value of the search input
   */
  inputValue: PropTypes.string,

  /**
   * Passed through to react-select package. Is the select value clearable
   */
  isClearable: PropTypes.bool,

  /**
   * Passed through to react-select package. Is the select in a state of loading (async)
   */
  isLoading: PropTypes.bool,

  /**
   * Passed through to react-select package. Override the built-in logic to detect whether an option is disabled
   */
  isOptionDisabled: PropTypes.func,

  /**
   * Passed through to react-select package as `isDisabled`. Should the user be able to edit this value?
   */
  isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * Passed through to react-select package. Is the select direction right-to-left
   */
  isRtl: PropTypes.bool,

  /**
   * Passed through to react-select package. Whether to enable search functionality
   */
  isSearchable: PropTypes.bool,

  /**
   * Passed through to react-select package. Async: Text to display when loading options
   */
  loadingMessage: PropTypes.func,

  /**
   * Passed through to react-select package. Maximum height of the menu before scrolling
   */
  maxMenuHeight: PropTypes.number,

  /**
   * Passed through to react-select package. Maximum height of the value container before scrolling
   */
  maxValueHeight: PropTypes.number,

  /**
   * Passed through to react-select package. Whether the menu is open
   */
  menuIsOpen: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Default placement of the menu in relation to the control. 'auto' will flip
   * when there isn't enough space below the control.
   */
  menuPlacement: PropTypes.oneOf(["auto", "bottom", "top"]),

  /**
   * Passed through to react-select package. Minimum height of the menu before flipping
   */
  minMenuHeight: PropTypes.number,

  /**
   * A name or object path that determines where in the closest form object this will appear.
   */
  name: PropTypes.string,

  /**
   * Passed through to react-select package. Text to display when there are no options
   */
  noOptionsMessage: PropTypes.func,

  /**
   * Passed through to react-select package. Handle blur events on the control
   */
  onBlur: PropTypes.func,

  /**
   * Called with the new selected value each time the user changes the selection
   */
  onChange: PropTypes.func,

  /**
   * Called with the new selected value each time the user changes the selection
   */
  onChanging: PropTypes.func,

  /**
   * Passed through to react-select package. Handle focus events on the control
   */
  onFocus: PropTypes.func,

  /**
   * Passed through to react-select package. Handle change events on the input
   */
  onInputChange: PropTypes.func,

  /**
   * Passed through to react-select package. Handle key down events on the select
   */
  onKeyDown: PropTypes.func,

  /**
   * Passed through to react-select package. Handle the menu closing
   */
  onMenuClose: PropTypes.func,

  /**
   * Passed through to react-select package. Handle the menu opening
   */
  onMenuOpen: PropTypes.func,

  /**
   * Passed through to react-select package. Fired when the user scrolls to the bottom of the menu
   */
  onMenuScrollToBottom: PropTypes.func,

  /**
   * Passed through to react-select package. Fired when the user scrolls to the top of the menu
   */
  onMenuScrollToTop: PropTypes.func,

  /**
   * The options to show, in Composable Form Spec format.
   * @see http://forms.dairystatedesigns.com/user/input/#selection-inputs
   */
  options: CustomPropTypes.options,

  /**
   * Passed through to react-select package. Number of options to jump in menu when page{up|down} keys are used
   */
  pageSize: PropTypes.number,

  /**
   * Passed through to react-select package. Placeholder text for the select value
   */
  placeholder: PropTypes.string,

  /**
   * Passed through to react-select package. Status to relay to screen readers
   */
  screenReaderStatus: PropTypes.func,

  /**
   * Passed through to react-select package. Whether the menu should be scrolled into view when it opens
   */
  scrollMenuIntoView: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Select the currently focused option when the user presses tab
   */
  tabSelectsValue: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Set this to the current saved value, if editing, or a default value if creating. The closest form implementing
   * the Composable Forms spec will pass this automatically.
   */
  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))
};
MultiSelect.defaultProps = {
  alphabetize: false,
  isReadOnly: false,
  isSearchable: false,
  onChange: function onChange() {},
  onChanging: function onChanging() {},
  options: []
};
MultiSelect.isFormInput = true;
export default MultiSelect;