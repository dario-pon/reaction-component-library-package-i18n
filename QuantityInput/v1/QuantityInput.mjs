import "core-js/modules/es6.number.is-nan";
import "core-js/modules/es6.number.constructor";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Minus from "mdi-material-ui/Minus";
import Plus from "mdi-material-ui/Plus";

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
  _inherits(QuantityInput, _Component);

  function QuantityInput(props) {
    var _this;

    _classCallCheck(this, QuantityInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuantityInput).call(this, props));

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

  _createClass(QuantityInput, [{
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
      return React.createElement(TextField, {
        id: "addToCartQuantityInput",
        className: className,
        value: value,
        onChange: this.handleQuantityInputChange,
        InputProps: {
          startAdornment: React.createElement(InputAdornment, null, React.createElement(ButtonBase, {
            color: "default",
            variant: "outlined",
            onClick: this.handleDecrementButton,
            className: incrementButton,
            disableRipple: true,
            disableTouchRipple: true
          }, React.createElement(Minus, {
            style: {
              fontSize: "14px"
            }
          }))),
          endAdornment: React.createElement(InputAdornment, null, React.createElement(ButtonBase, {
            variant: "outlined",
            color: "default",
            onClick: this.handleIncrementButton,
            className: incrementButton,
            disableRipple: true,
            disableTouchRipple: true
          }, React.createElement(Plus, {
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
}(Component);

QuantityInput.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * MUI theme classes
   */
  classes: PropTypes.object,

  /**
   * On change hanlder for input
   */
  onChange: PropTypes.func,

  /**
   * Prepopulate the input's value.
   */
  value: PropTypes.number
};
QuantityInput.defaultProps = {
  classes: {},
  onChange: function onChange() {}
};
export default withStyles(styles)(QuantityInput);