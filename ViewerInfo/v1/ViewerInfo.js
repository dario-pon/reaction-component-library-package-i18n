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

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var ViewerInfoContainer = _styledComponents.default.div.withConfig({
  displayName: "ViewerInfo__ViewerInfoContainer",
  componentId: "sc-11in3tg-0"
})(["display:flex;position:relative;"]);

var ViewerFirstNameText = _styledComponents.default.span.withConfig({
  displayName: "ViewerInfo__ViewerFirstNameText",
  componentId: "sc-11in3tg-1"
})(["", " display:", ";align-self:center;margin-left:0.5rem;@media (min-width:", "px){display:", ";}"], (0, _utils.addTypographyStyles)("ViewerInfo", "labelText"), function (_ref) {
  var compact = _ref.compact,
      full = _ref.full;

  if (full) {
    return compact ? "none" : "inline";
  }

  return "none";
}, (0, _utils.applyTheme)("md", "breakpoints"), function (_ref2) {
  var compact = _ref2.compact;
  return compact ? "none" : "inline";
});

var ViewerInfo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ViewerInfo, _Component);

  function ViewerInfo() {
    (0, _classCallCheck2.default)(this, ViewerInfo);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ViewerInfo).apply(this, arguments));
  }

  (0, _createClass2.default)(ViewerInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          compact = _this$props.compact,
          ProfileImage = _this$props.components.ProfileImage,
          full = _this$props.full,
          viewer = _this$props.viewer;
      return _react.default.createElement(ViewerInfoContainer, {
        className: className
      }, _react.default.createElement(ProfileImage, {
        size: 30,
        viewer: viewer
      }), _react.default.createElement(ViewerFirstNameText, {
        compact: compact,
        full: full
      }, this.viewerName));
    }
  }, {
    key: "viewerName",

    /**
     *
     * @name viewerName
     * @summary If `firstName` is available on the `viewer` object, return that.
     *   Otherwise return the email address.
     * @return {String} Display name for the viewer
     */
    get: function get() {
      var _this$props$viewer = this.props.viewer,
          firstName = _this$props$viewer.firstName,
          primaryEmailAddress = _this$props$viewer.primaryEmailAddress;
      return firstName && firstName || primaryEmailAddress;
    }
  }]);
  return ViewerInfo;
}(_react.Component);

ViewerInfo.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Enable this prop when you only want to display the initials/avatar on all screens
   */
  compact: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
    * Profile image component to display
    */
    ProfileImage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func])
  }),

  /**
   * Enable this prop when you want to display the initials and first name on all screens
   */
  full: _propTypes.default.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
  * An object containing basic user information.
  */
  viewer: _propTypes.default.shape({
    firstName: _propTypes.default.string,
    lastName: _propTypes.default.string,
    name: _propTypes.default.string,
    primaryEmailAddress: _propTypes.default.string.isRequired,
    profileImage: _propTypes.default.string
  }).isRequired
};
ViewerInfo.defaultProps = {
  compact: false,
  full: false
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(ViewerInfo)); // auto-add i18n


exports.default = _default;