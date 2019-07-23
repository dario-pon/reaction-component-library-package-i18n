"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireWildcard(require("../../utils"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var AccountProfileInfoContainer = _styledComponents.default.div.withConfig({
  displayName: "AccountProfileInfo__AccountProfileInfoContainer",
  componentId: "bbm1ai-0"
})(["display:flex;position:relative;"]);

var AccountProfileInfoTextContainer = _styledComponents.default.div.withConfig({
  displayName: "AccountProfileInfo__AccountProfileInfoTextContainer",
  componentId: "bbm1ai-1"
})(["display:flex;flex-direction:column;justify-content:center;margin-left:", ";position:relative;"], (0, _utils.applyTheme)("AccountProfileInfo.spacingBetweenImageAndContent"));

var ViewerEmailText = _styledComponents.default.span.withConfig({
  displayName: "AccountProfileInfo__ViewerEmailText",
  componentId: "bbm1ai-2"
})(["", " align-self:left;margin-bottom:", ";"], (0, _utils.addTypographyStyles)("AccountProfileInfoEmail", "labelText"), (0, _utils.applyTheme)("AccountProfileInfo.spacingAfterEmail"));

var ViewerNameText = _styledComponents.default.span.withConfig({
  displayName: "AccountProfileInfo__ViewerNameText",
  componentId: "bbm1ai-3"
})(["", " align-self:left;margin-bottom:", ";"], (0, _utils.addTypographyStyles)("AccountProfileInfoName", "titleTextBold"), (0, _utils.applyTheme)("AccountProfileInfo.spacingAfterName"));

var AccountProfileInfo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AccountProfileInfo, _Component);

  function AccountProfileInfo() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AccountProfileInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AccountProfileInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.viewerProfileEditLink = function () {
      var _this$props = _this.props,
          Button = _this$props.components.Button,
          onClickEdit = _this$props.onClickEdit,
          shouldShowEditButton = _this$props.shouldShowEditButton;

      if (shouldShowEditButton) {
        return _react.default.createElement(Button, {
          isShortHeight: true,
          isTextOnly: true,
          isTextOnlyNoPadding: true,
          onClick: onClickEdit
        }, "Edit Account");
      }

      return null;
    };

    return _this;
  }

  (0, _createClass2.default)(AccountProfileInfo, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          ProfileImage = _this$props2.components.ProfileImage,
          viewer = _this$props2.viewer;
      return _react.default.createElement(AccountProfileInfoContainer, {
        className: className
      }, _react.default.createElement(ProfileImage, {
        size: 80,
        viewer: viewer
      }), _react.default.createElement(AccountProfileInfoTextContainer, null, _react.default.createElement(ViewerNameText, null, this.viewerName), _react.default.createElement(ViewerEmailText, null, this.viewerPrimaryEmailAddress), this.viewerProfileEditLink()));
    }
  }, {
    key: "viewerPrimaryEmailAddress",

    /**
     *
     * @name viewerEmail
     * @summary Return viewer email address
     * @return {String} the viewers email address.
     */
    get: function get() {
      var primaryEmailAddress = this.props.viewer.primaryEmailAddress;
      return primaryEmailAddress;
    }
    /**
     *
     * @name viewerName
     * @summary If `name` is availible on the `viewer` object
     * return that else return `fistName` and `lastName`,
     * else return `firstName`, else return null
     * @return {String} the viewers name.
     */

  }, {
    key: "viewerName",
    get: function get() {
      var _this$props$viewer = this.props.viewer,
          firstName = _this$props$viewer.firstName,
          lastName = _this$props$viewer.lastName,
          name = _this$props$viewer.name;
      return name || firstName && lastName && "".concat(firstName, " ").concat(lastName) || firstName || null;
    }
  }]);
  return AccountProfileInfo;
}(_react.Component);

AccountProfileInfo.propTypes = {
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
     * An element to show to link to the edit profile page
     */
    Button: _utils.CustomPropTypes.component,

    /**
    * Profile image component to display
    */
    ProfileImage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func])
  }),

  /**
   * Function to pass to button onClick
   */
  onClickEdit: _propTypes.default.func,

  /**
   * Enable this prop when you only want to display the Edit account link
   */
  shouldShowEditButton: _propTypes.default.bool,

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
AccountProfileInfo.defaultProps = {
  shouldShowEditButton: false
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(AccountProfileInfo)); // auto-add i18n


exports.default = _default;