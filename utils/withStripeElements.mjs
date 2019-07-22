import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import { Elements } from "react-stripe-elements";
/**
 * @summary A HOC creator that wraps the component with `Elements` from react-stripe-elements
 * @param {React.Component|Function} WrappedComponent The component class or function to wrap
 * @returns {React.Component} Higher order component
 */

export default function withStripeElements(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        return React.createElement(Elements, null, React.createElement(WrappedComponent, this.props));
      }
    }]);

    return _class;
  }(Component), _class.displayName = "withStripeElements", _temp;
}