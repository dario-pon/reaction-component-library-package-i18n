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

// auto-add i18n 
var ViewerImageCircle = _styledComponents.default.div.withConfig({
  displayName: "ProfileImage__ViewerImageCircle",
  componentId: "sc-1ez7h3d-0"
})(["align-items:center;background-color:", ";border-radius:50%;display:flex;justify-content:center;text-align:center;"], (0, _utils.applyTheme)("ProfileImage.backgroundColor"));

var ViewerInitialsText = _styledComponents.default.div.withConfig({
  displayName: "ProfileImage__ViewerInitialsText",
  componentId: "sc-1ez7h3d-1"
})(["", " display:flex;line-height:1;"], (0, _utils.addTypographyStyles)("ProfileImageInitials", "labelText"));

var ViewerImage = _styledComponents.default.img.withConfig({
  displayName: "ProfileImage__ViewerImage",
  componentId: "sc-1ez7h3d-2"
})(["border-radius:50%;height:100%;width:100%;"]);

var ProfileImage =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ProfileImage, _Component);

  function ProfileImage() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ProfileImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ProfileImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.viewerProfileImage = function () {
      var _this$props = _this.props,
          size = _this$props.size,
          _this$props$viewer = _this$props.viewer,
          name = _this$props$viewer.name,
          profileImage = _this$props$viewer.profileImage;

      if (profileImage) {
        return _react.default.createElement(ViewerImage, {
          alt: name,
          src: profileImage
        });
      }

      return _react.default.createElement(ViewerInitialsText, {
        style: {
          fontSize: size / 2
        }
      }, _this.viewerInitials);
    };

    return _this;
  }

  (0, _createClass2.default)(ProfileImage, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          size = _this$props2.size;
      return _react.default.createElement(ViewerImageCircle, {
        className: className,
        style: {
          height: "".concat(size, "px"),
          width: "".concat(size, "px")
        }
      }, this.viewerProfileImage());
    }
  }, {
    key: "viewerInitials",

    /**
     *
     * @name viewerInitials
     * @summary Build the initials string from the `viewer` first and last name
     * If those props are not available use the first letter of the primary email address.
     * @return {String} the viewers initials. (Patricia Smith => PS, Olamide => O, james.booker@ponderosafarms.com => J)
     */
    get: function get() {
      var _this$props$viewer2 = this.props.viewer,
          firstName = _this$props$viewer2.firstName,
          lastName = _this$props$viewer2.lastName,
          primaryEmailAddress = _this$props$viewer2.primaryEmailAddress;
      var firstInitial = firstName && firstName.charAt() || primaryEmailAddress.charAt().toUpperCase();
      var lastInitial = lastName && lastName.charAt() || "";
      return "".concat(firstInitial).concat(lastInitial);
    }
  }]);
  return ProfileImage;
}(_react.Component);

ProfileImage.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * Size of profile image, in pixels
   */
  size: _propTypes.default.number,

  /**
   * An object containing basic user information.
   */
  viewer: _propTypes.default.shape({
    firstName: _propTypes.default.string,
    lastName: _propTypes.default.string,
    name: _propTypes.default.string,
    primaryEmailAddress: _propTypes.default.string,
    profileImage: _propTypes.default.string
  }).isRequired
};
ProfileImage.defaultProps = {
  size: 80
};

var _default = _utils.default.withTranslation()(ProfileImage); // auto-add i18n


exports.default = _default;