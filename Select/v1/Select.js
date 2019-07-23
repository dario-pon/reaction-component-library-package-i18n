"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("core-js/modules/es6.array.find");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.number.constructor");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// This is currently mostly to ensure that this stays above our code examples in the
// style guide UI, which have zIndexes of 2 and 3 in some places. This might need to
// be taken from the theme eventually, though, if people have problems in other places.
var MENU_Z_INDEX = 4;

var nullDefaultEquals = function nullDefaultEquals(value1, value2) {
  return (value1 || null) === (value2 || null);
}; // Rather than pass through all props to react-select, we'll keep a whitelist
// to better control the usage and appearance of this component.


var supportedPassthroughProps = ["autoFocus", "backspaceRemovesValue", "blurInputOnSelect", "captureMenuScroll", "closeMenuOnSelect", "components", "escapeClearsValue", "formatGroupLabel", "formatOptionLabel", "getOptionLabel", "getOptionValue", "hideSelectedOptions", "id", "inputValue", "isClearable", "isLoading", "isOptionDisabled", "isRtl", "isSearchable", "loadingMessage", "minMenuHeight", "maxMenuHeight", "maxValueHeight", "menuIsOpen", "menuPlacement", "noOptionsMessage", "onBlur", "onFocus", "onInputChange", "onKeyDown", "onMenuOpen", "onMenuClose", "onMenuScrollToTop", "onMenuScrollToBottom", "pageSize", "placeholder", "screenReaderStatus", "scrollMenuIntoView", "tabSelectsValue", "value"];
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

    return (0, _utils.applyTheme)("".concat(themeProp, "_").concat(status))(props);
  };
}

var getInputBorderColor = applyValidationColor("Input.borderColor");
var getInputFontSize = (0, _utils.applyTheme)("Input.fontSize");
var getSelectOptionHoverColor = (0, _utils.applyTheme)("Select.optionHoverColor");
var getSelectedOptionBackgroundColor = (0, _utils.applyTheme)("Select.selectedOptionBackgroundColor");
var getSelectIndicatorColor = (0, _utils.applyTheme)("Select.indicatorColor");
var getSelectLetterSpacing = (0, _utils.applyTheme)("Select.letterSpacing");
var getSelectTextColor = (0, _utils.applyTheme)("Select.textColor");
var getInputFontFamily = (0, _utils.applyTheme)("Input.fontFamily");
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
        fontSize: getInputFontSize(props)
      });
    },
    control: function control(base, state) {
      return _objectSpread({}, base, {
        "borderColor": getInputBorderColor(_objectSpread({}, props, {
          isFocused: state.isFocused
        })),
        "borderTopLeftRadius": (0, _utils.applyTheme)("Select.borderTopLeftRadius")(props),
        "borderTopRightRadius": (0, _utils.applyTheme)("Select.borderTopRightRadius")(props),
        "borderBottomLeftRadius": (0, _utils.applyTheme)("Select.borderBottomLeftRadius")(props),
        "borderBottomRightRadius": (0, _utils.applyTheme)("Select.borderBottomRightRadius")(props),
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
        borderTopLeftRadius: (0, _utils.applyTheme)("SelectMenu.borderTopLeftRadius")(props),
        borderTopRightRadius: (0, _utils.applyTheme)("SelectMenu.borderTopRightRadius")(props),
        borderBottomLeftRadius: (0, _utils.applyTheme)("SelectMenu.borderBottomLeftRadius")(props),
        borderBottomRightRadius: (0, _utils.applyTheme)("SelectMenu.borderBottomRightRadius")(props),
        borderBottomStyle: "solid",
        borderBottomWidth: (0, _utils.applyTheme)("SelectMenu.borderBottomWidth")(props),
        borderBottomColor: (0, _utils.applyTheme)("SelectMenu.borderBottomColor")(props),
        borderLeftStyle: "solid",
        borderLeftWidth: (0, _utils.applyTheme)("SelectMenu.borderLeftWidth")(props),
        borderLeftColor: (0, _utils.applyTheme)("SelectMenu.borderLeftColor")(props),
        borderRightStyle: "solid",
        borderRightWidth: (0, _utils.applyTheme)("SelectMenu.borderRightWidth")(props),
        borderRightColor: (0, _utils.applyTheme)("SelectMenu.borderRightColor")(props),
        marginTop: 0,
        boxShadow: "none",
        zIndex: MENU_Z_INDEX
      });
    }
  };
}

var Select =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Select, _Component);

  function Select(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Select);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Select).call(this, props));

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
      var _ref = selection || {},
          value = _ref.value;

      if (value !== undefined && value !== null) {
        switch (_this.dataType) {
          case "string":
            value = String(value);
            break;

          case "number":
            value = value === "" ? null : Number(value);
            break;

          case "boolean":
            value = value === "" ? null : Boolean(value);
            break;

          default: // do nothing

        }
      }

      _this.setValue(value || null);
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

  (0, _createClass2.default)(Select, [{
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

      if (!(0, _lodash.default)(options, nextOptions)) {
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
          var checkDataType = (0, _typeof2.default)(option.value);

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
      var optionValue = null;

      if (value !== undefined && value !== null) {
        optionValue = reactSelectOptions.find(function (opt) {
          if (opt.options) return opt.options.find(function (subOpt) {
            return subOpt.value === value;
          });
          return opt.value === value;
        });
      }

      return _react.default.createElement(_reactSelect.default, (0, _extends2.default)({}, passthroughProps, {
        className: className,
        isDisabled: isReadOnly,
        value: optionValue,
        components: {
          IndicatorSeparator: null
        },
        onChange: this.handleSelectLibChanged,
        options: reactSelectOptions,
        styles: getCustomStyles(this.props)
      }));
    }
  }]);
  return Select;
}(_react.Component);

Select.propTypes = {
  /**
   * Alphabetize by option label
   */
  alphabetize: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Focus the control when it is mounted
   */
  autoFocus: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Remove the currently focused option when the user presses backspace
   */
  backspaceRemovesValue: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package.
   * Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices)
   */
  blurInputOnSelect: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent
   */
  captureMenuScroll: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Passed through to react-select package. Close the select menu when the user selects an option
   */
  closeMenuOnSelect: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Custom components to use
   */
  components: _propTypes.default.object,

  /**
   * An array of validation errors
   */
  errors: _propTypes.default.array,

  /**
   * Passed through to react-select package. Clear all values when the user presses escape AND the menu is closed
   */
  escapeClearsValue: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Formats group labels in the menu as React components
   */
  formatGroupLabel: _propTypes.default.func,

  /**
   * Passed through to react-select package. Formats option labels in the menu and control as React components
   */
  formatOptionLabel: _propTypes.default.func,

  /**
   * Passed through to react-select package. Resolves option data to a string to be displayed as the label by components
   */
  getOptionLabel: _propTypes.default.func,

  /**
   * Passed through to react-select package. Resolves option data to a string to compare options and specify value attributes
   */
  getOptionValue: _propTypes.default.func,

  /**
   * Enable when a input's value has been validated
   */
  hasBeenValidated: _propTypes.default.bool,

  /**
   * Passed through to react-select package. Hide the selected option from the menu
   */
  hideSelectedOptions: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. The value of the search input
   */
  inputValue: _propTypes.default.string,

  /**
   * Passed through to react-select package. Is the select value clearable
   */
  isClearable: _propTypes.default.bool,

  /**
   * Passed through to react-select package. Is the select in a state of loading (async)
   */
  isLoading: _propTypes.default.bool,

  /**
   * Passed through to react-select package. Override the built-in logic to detect whether an option is disabled
   */
  isOptionDisabled: _propTypes.default.func,

  /**
   * Passed through to react-select package as `isDisabled`. Should the user be able to edit this value?
   */
  isReadOnly: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),

  /**
   * Passed through to react-select package. Is the select direction right-to-left
   */
  isRtl: _propTypes.default.bool,

  /**
   * Passed through to react-select package. Whether to enable search functionality
   */
  isSearchable: _propTypes.default.bool,

  /**
   * Passed through to react-select package. Async: Text to display when loading options
   */
  loadingMessage: _propTypes.default.func,

  /**
   * Passed through to react-select package. Maximum height of the menu before scrolling
   */
  maxMenuHeight: _propTypes.default.number,

  /**
   * Passed through to react-select package. Maximum height of the value container before scrolling
   */
  maxValueHeight: _propTypes.default.number,

  /**
   * Passed through to react-select package. Whether the menu is open
   */
  menuIsOpen: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Default placement of the menu in relation to the control. 'auto' will flip
   * when there isn't enough space below the control.
   */
  menuPlacement: _propTypes.default.oneOf(["auto", "bottom", "top"]),

  /**
   * Passed through to react-select package. Minimum height of the menu before flipping
   */
  minMenuHeight: _propTypes.default.number,

  /**
   * A name or object path that determines where in the closest form object this will appear.
   */
  name: _propTypes.default.string,

  /**
   * Passed through to react-select package. Text to display when there are no options
   */
  noOptionsMessage: _propTypes.default.func,

  /**
   * Passed through to react-select package. Handle blur events on the control
   */
  onBlur: _propTypes.default.func,

  /**
   * Called with the new selected value each time the user changes the selection
   */
  onChange: _propTypes.default.func,

  /**
   * Called with the new selected value each time the user changes the selection
   */
  onChanging: _propTypes.default.func,

  /**
   * Passed through to react-select package. Handle focus events on the control
   */
  onFocus: _propTypes.default.func,

  /**
   * Passed through to react-select package. Handle change events on the input
   */
  onInputChange: _propTypes.default.func,

  /**
   * Passed through to react-select package. Handle key down events on the select
   */
  onKeyDown: _propTypes.default.func,

  /**
   * Passed through to react-select package. Handle the menu closing
   */
  onMenuClose: _propTypes.default.func,

  /**
   * Passed through to react-select package. Handle the menu opening
   */
  onMenuOpen: _propTypes.default.func,

  /**
   * Passed through to react-select package. Fired when the user scrolls to the bottom of the menu
   */
  onMenuScrollToBottom: _propTypes.default.func,

  /**
   * Passed through to react-select package. Fired when the user scrolls to the top of the menu
   */
  onMenuScrollToTop: _propTypes.default.func,

  /**
   * The options to show, in Composable Form Spec format.
   * @see http://forms.dairystatedesigns.com/user/input/#selection-inputs
   */
  options: _utils.CustomPropTypes.options,

  /**
   * Passed through to react-select package. Number of options to jump in menu when page{up|down} keys are used
   */
  pageSize: _propTypes.default.number,

  /**
   * Passed through to react-select package. Placeholder text for the select value
   */
  placeholder: _propTypes.default.string,

  /**
   * Passed through to react-select package. Status to relay to screen readers
   */
  screenReaderStatus: _propTypes.default.func,

  /**
   * Passed through to react-select package. Whether the menu should be scrolled into view when it opens
   */
  scrollMenuIntoView: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Passed through to react-select package. Select the currently focused option when the user presses tab
   */
  tabSelectsValue: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * Set this to the current saved value, if editing, or a default value if creating. The closest form implementing
   * the Composable Forms spec will pass this automatically.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool])
};
Select.defaultProps = {
  alphabetize: false,
  isReadOnly: false,
  isSearchable: false,
  onChange: function onChange() {},
  onChanging: function onChanging() {},
  options: []
};
Select.isFormInput = true;

var _default = _utils.default.withTranslation()(Select); // auto-add i18n


exports.default = _default;