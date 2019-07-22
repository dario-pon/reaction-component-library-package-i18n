import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@reactioncommerce/components-context";
import { CustomPropTypes } from "../../utils";

var RegionInput =
/*#__PURE__*/
function (_Component) {
  _inherits(RegionInput, _Component);

  function RegionInput() {
    _classCallCheck(this, RegionInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegionInput).apply(this, arguments));
  }

  _createClass(RegionInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _this$props$component = _this$props.components,
          Select = _this$props$component.Select,
          TextInput = _this$props$component.TextInput,
          options = _this$props.options,
          value = _this$props.value,
          props = _objectWithoutProperties(_this$props, ["className", "components", "options", "value"]);

      return React.createElement(Fragment, null, options && options.length > 1 ? React.createElement(Select, _extends({
        className: className,
        alphabetize: true,
        isSearchable: true,
        options: options,
        value: value
      }, props)) : React.createElement(TextInput, _extends({
        className: className,
        value: value
      }, props)));
    }
  }]);

  return RegionInput;
}(Component);

RegionInput.isFormInput = true;
RegionInput.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
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
     * Pass either the Reaction TextInput component or your own component that is
     * compatible with ReactoForm.
     */
    TextInput: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Select component or your own component that is
     * compatible with ReactoForm.
     */
    Select: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Name of input
   */
  name: PropTypes.string.isRequired,

  /**
   * Region options to populate the form's region fields
   */
  options: PropTypes.array,

  /**
   * Prepopulate the input's value
   */
  value: PropTypes.string
};
export default withComponents(RegionInput);