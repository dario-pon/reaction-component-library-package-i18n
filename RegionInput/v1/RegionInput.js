"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var RegionInput =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RegionInput, _Component);

  function RegionInput() {
    (0, _classCallCheck2.default)(this, RegionInput);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RegionInput).apply(this, arguments));
  }

  (0, _createClass2.default)(RegionInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _this$props$component = _this$props.components,
          Select = _this$props$component.Select,
          TextInput = _this$props$component.TextInput,
          options = _this$props.options,
          value = _this$props.value,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "components", "options", "value"]);
      return _react.default.createElement(_react.Fragment, null, options && options.length > 1 ? _react.default.createElement(Select, (0, _extends2.default)({
        className: className,
        alphabetize: true,
        isSearchable: true,
        options: options,
        value: value
      }, props)) : _react.default.createElement(TextInput, (0, _extends2.default)({
        className: className,
        value: value
      }, props)));
    }
  }]);
  return RegionInput;
}(_react.Component);

RegionInput.isFormInput = true;
RegionInput.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction TextInput component or your own component that is
     * compatible with ReactoForm.
     */
    TextInput: _utils.CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Select component or your own component that is
     * compatible with ReactoForm.
     */
    Select: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Name of input
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Region options to populate the form's region fields
   */
  options: _propTypes.default.array,

  /**
   * Prepopulate the input's value
   */
  value: _propTypes.default.string
};

var _default = (0, _componentsContext.withComponents)(RegionInput);

exports.default = _default;