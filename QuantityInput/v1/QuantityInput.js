"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.number.is-nan");

require("core-js/modules/es6.number.constructor");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Minus = _interopRequireDefault(require("mdi-material-ui/Minus"));

var _Plus = _interopRequireDefault(require("mdi-material-ui/Plus"));

// auto-add i18n 
var styles = function styles() {
  return {
    incrementButton: {
      backgroundColor: "#fafafa",
      boxSizing: "inherit",
      color: "#666666",
      padding: 6
    },
    quantityContainer: {
      border: "1px solid #d9d9d9",
      borderRadius: "2px",
      boxSizing: "border-box",
      height: "30px",
      overflow: "hidden",
      padding: 0
    },
    quantityInput: {
      "appearance": "none",
      "borderLeft": "1px solid #d9d9d9",
      "borderRight": "1px solid #d9d9d9",
      "borderRadius": 0,
      "boxSizing": "inherit",
      "color": "#3c3c3c",
      "fontSize": "12px",
      "lineHeight": "2",
      "height": "30px",
      "maxWidth": "40px",
      "textAlign": "center",
      "&:focus": {
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    }
  };
};

var QuantityInput =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(QuantityInput, _Component);

  function QuantityInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, QuantityInput);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QuantityInput).call(this, props));

    _this.handleQuantityInputChange = function (event) {
      var value = event.target.value;
      var numericValue = Math.floor(Number(value));
      if (Number.isNaN(numericValue)) return;

      _this.setState({
        value: numericValue
      });

      _this.handleChanged(numericValue);
    };

    _this.handleIncrementButton = function () {
      var value = _this.state.value + 1;

      _this.setState({
        value: value
      });

      _this.handleChanged(value);
    };

    _this.handleDecrementButton = function () {
      var value = _this.state.value - 1;

      if (value >= 0) {
        _this.setState({
          value: value
        });

        _this.handleChanged(value);
      }
    };

    var _value = props.value || 0;

    _this.state = {
      initialValue: props.value,
      value: _value
    };
    return _this;
  }

  (0, _createClass2.default)(QuantityInput, [{
    key: "handleChanged",
    value: function handleChanged(value) {
      var onChange = this.props.onChange;
      onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _this$props$classes = _this$props.classes,
          incrementButton = _this$props$classes.incrementButton,
          quantityContainer = _this$props$classes.quantityContainer,
          quantityInput = _this$props$classes.quantityInput;
      var value = this.state.value;
      return _react.default.createElement(_TextField.default, {
        id: "addToCartQuantityInput",
        className: className,
        value: value,
        onChange: this.handleQuantityInputChange,
        InputProps: {
          startAdornment: _react.default.createElement(_InputAdornment.default, null, _react.default.createElement(_ButtonBase.default, {
            color: "default",
            variant: "outlined",
            onClick: this.handleDecrementButton,
            className: incrementButton,
            disableRipple: true,
            disableTouchRipple: true
          }, _react.default.createElement(_Minus.default, {
            style: {
              fontSize: "14px"
            }
          }))),
          endAdornment: _react.default.createElement(_InputAdornment.default, null, _react.default.createElement(_ButtonBase.default, {
            variant: "outlined",
            color: "default",
            onClick: this.handleIncrementButton,
            className: incrementButton,
            disableRipple: true,
            disableTouchRipple: true
          }, _react.default.createElement(_Plus.default, {
            style: {
              fontSize: "14px"
            }
          }))),
          disableUnderline: true,
          classes: {
            root: quantityContainer,
            input: quantityInput
          }
        }
      });
    }
  }]);
  return QuantityInput;
}(_react.Component);

QuantityInput.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * MUI theme classes
   */
  classes: _propTypes.default.object,

  /**
   * On change hanlder for input
   */
  onChange: _propTypes.default.func,

  /**
   * Prepopulate the input's value.
   */
  value: _propTypes.default.number
};
QuantityInput.defaultProps = {
  classes: {},
  onChange: function onChange() {}
};

var _default = _utils.default.withTranslation()((0, _styles.withStyles)(styles)(QuantityInput)); // auto-add i18n


exports.default = _default;