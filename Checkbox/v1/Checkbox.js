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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var StyledDiv = _styledComponents.default.div.withConfig({
  displayName: "Checkbox__StyledDiv",
  componentId: "sc-1abqzv2-0"
})(["margin-bottom:", ";"], (0, _utils.applyTheme)("Checkbox.verticalSpacing"));
/* eslint-disable max-len */

/* eslint-disable quotes */
// credit https://fontawesome.com/icons/check?style=solid


var checkboxIconSVG = function checkboxIconSVG(props) {
  return encodeURIComponent("<svg aria-hidden='true' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='".concat((0, _utils.applyTheme)("Checkbox.iconColor")(props), "' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path></svg>"));
};
/* eslint-enable quotes */

/* eslint-enable max-len */
// Opacity: 0 hides the default input and position: absolute removes it
// from the flow so that it doesn't push the styled checkbox to the right.


var StyledInput = _styledComponents.default.input.withConfig({
  displayName: "Checkbox__StyledInput",
  componentId: "sc-1abqzv2-1"
})(["opacity:0;position:absolute;+ label::after{content:\" \";}&:checked + label::after{background-image:", ";display:inline-block;position:absolute;width:", ";height:", ";top:", ";left:", ";}&:focus + label::before{outline:", ";}&:disabled + label{opacity:", ";}&:disabled + label::before{background:", ";opacity:", ";}&:disabled + label:hover{cursor:not-allowed;}"], function (props) {
  return "url(\"data:image/svg+xml; utf8,".concat(checkboxIconSVG(props), "\")");
}, (0, _utils.applyTheme)("Checkbox.iconSize"), (0, _utils.applyTheme)("Checkbox.iconSize"), (0, _utils.applyTheme)("Checkbox.iconTopOffset"), (0, _utils.applyTheme)("Checkbox.iconLeftOffset"), (0, _utils.applyTheme)("Checkbox.focusStyle"), (0, _utils.applyTheme)("Checkbox.disabledOpacity"), (0, _utils.applyTheme)("Checkbox.disabledColor"), (0, _utils.applyTheme)("Checkbox.disabledOpacity"));

var StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "Checkbox__StyledLabel",
  componentId: "sc-1abqzv2-2"
})(["", " display:inline-block;line-height:", ";padding-left:", ";position:relative;&:hover{cursor:pointer;}&::before,&::after{position:absolute;}&::before{content:\" \";border-color:", ";border-radius:", ";border-style:solid;border-width:", ";box-sizing:border-box;display:inline-block;height:", ";left:", ";top:", ";width:", ";}"], (0, _utils.addTypographyStyles)("CheckboxLabel", "labelText"), (0, _utils.applyTheme)("Checkbox.size"), (0, _utils.applyTheme)("Checkbox.labelSpacing"), (0, _utils.applyTheme)("Checkbox.borderColor"), (0, _utils.applyTheme)("Checkbox.borderRadius"), (0, _utils.applyTheme)("Checkbox.borderWidth"), (0, _utils.applyTheme)("Checkbox.size"), (0, _utils.applyTheme)("Checkbox.leftSpacing"), (0, _utils.applyTheme)("Checkbox.topSpacing"), (0, _utils.applyTheme)("Checkbox.size"));

var Checkbox =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Checkbox, _Component);

  function Checkbox(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Checkbox);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Checkbox).call(this, props));

    _this.onChange = function (event) {
      _this.setValue(event.target.checked);
    };

    _this.state = {
      id: (0, _lodash.default)("Checkbox_"),
      value: props.value || false
    };
    return _this;
  }

  (0, _createClass2.default)(Checkbox, [{
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
      return _react.default.createElement(StyledDiv, {
        className: className
      }, _react.default.createElement(StyledInput, {
        checked: value === true,
        id: id,
        onChange: this.onChange,
        disabled: isReadOnly,
        type: "checkbox",
        value: "true"
      }), _react.default.createElement(StyledLabel, {
        htmlFor: id
      }, label));
    }
  }]);
  return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
  /**
   * Custom class name
   */
  className: _propTypes.default.string,

  /**
   * Enable to make the checkbox read-only / disabled by default
   */
  isReadOnly: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),

  /**
   * Label for checkbox for viewers to read
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Name of input
   */
  name: _propTypes.default.string,

  /**
   * On change handler for input
   */
  onChange: _propTypes.default.func,

  /**
   * On change handler for input
   */
  onChanging: _propTypes.default.func,

  /**
   * True for a checked checkbox, undefined for an unchecked checkbox
   */
  value: _propTypes.default.bool // eslint-disable-line react/boolean-prop-naming

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
var _default = Checkbox;
exports.default = _default;