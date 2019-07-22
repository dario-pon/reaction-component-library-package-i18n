"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withStripeElements;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactStripeElements = require("react-stripe-elements");

/**
 * @summary A HOC creator that wraps the component with `Elements` from react-stripe-elements
 * @param {React.Component|Function} WrappedComponent The component class or function to wrap
 * @returns {React.Component} Higher order component
 */
function withStripeElements(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(_class, _Component);

    function _class() {
      (0, _classCallCheck2.default)(this, _class);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
    }

    (0, _createClass2.default)(_class, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(_reactStripeElements.Elements, null, _react.default.createElement(WrappedComponent, this.props));
      }
    }]);
    return _class;
  }(_react.Component), _class.displayName = "withStripeElements", _temp;
}