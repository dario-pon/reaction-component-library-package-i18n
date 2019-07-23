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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

// auto-add i18n 
var UnstyledLinkHref = _styledComponents.default.a.withConfig({
  displayName: "Link__UnstyledLinkHref",
  componentId: "aei7h9-0"
})(["text-decoration:none;"]);

var UnstyledLinkOnClick = _styledComponents.default.div.withConfig({
  displayName: "Link__UnstyledLinkOnClick",
  componentId: "aei7h9-1"
})(["cursor:pointer;display:inline-block;text-decoration:none;"]);

var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.onClick = (0, _utils.preventAccidentalDoubleClick)(function (event) {
      _this.props.onClick(event);
    });
    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          href = _this$props.href;

      if (href) {
        return _react.default.createElement(UnstyledLinkHref, {
          className: className,
          href: href,
          onClick: this.onClick
        }, children);
      }

      return _react.default.createElement(UnstyledLinkOnClick, {
        className: className,
        onClick: this.onClick,
        role: "button"
      }, children);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = {
  /**
   * The contents of the link, such as text, icons, or any combination of React and HTML components
   */
  children: _propTypes.default.node.isRequired,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * The URL the link should navigate to
   */
  href: _propTypes.default.string,

  /**
   * Called with a single event parameter when a user clicks the link
   */
  onClick: _propTypes.default.func
};
Link.defaultProps = {
  onClick: function onClick() {}
};

var _default = _utils.default.withTranslation()(Link); // auto-add i18n


exports.default = _default;