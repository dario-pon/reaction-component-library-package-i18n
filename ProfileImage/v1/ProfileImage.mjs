import "core-js/modules/es6.function.name";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addTypographyStyles, applyTheme } from "../../utils";
var ViewerImageCircle = styled.div.withConfig({
  displayName: "ProfileImage__ViewerImageCircle",
  componentId: "sc-1ez7h3d-0"
})(["align-items:center;background-color:", ";border-radius:50%;display:flex;justify-content:center;text-align:center;"], applyTheme("ProfileImage.backgroundColor"));
var ViewerInitialsText = styled.div.withConfig({
  displayName: "ProfileImage__ViewerInitialsText",
  componentId: "sc-1ez7h3d-1"
})(["", " display:flex;line-height:1;"], addTypographyStyles("ProfileImageInitials", "labelText"));
var ViewerImage = styled.img.withConfig({
  displayName: "ProfileImage__ViewerImage",
  componentId: "sc-1ez7h3d-2"
})(["border-radius:50%;height:100%;width:100%;"]);

var ProfileImage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileImage, _Component);

  function ProfileImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProfileImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProfileImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.viewerProfileImage = function () {
      var _this$props = _this.props,
          size = _this$props.size,
          _this$props$viewer = _this$props.viewer,
          name = _this$props$viewer.name,
          profileImage = _this$props$viewer.profileImage;

      if (profileImage) {
        return React.createElement(ViewerImage, {
          alt: name,
          src: profileImage
        });
      }

      return React.createElement(ViewerInitialsText, {
        style: {
          fontSize: size / 2
        }
      }, _this.viewerInitials);
    };

    return _this;
  }

  _createClass(ProfileImage, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          size = _this$props2.size;
      return React.createElement(ViewerImageCircle, {
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
}(Component);

ProfileImage.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Size of profile image, in pixels
   */
  size: PropTypes.number,

  /**
   * An object containing basic user information.
   */
  viewer: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string,
    primaryEmailAddress: PropTypes.string,
    profileImage: PropTypes.string
  }).isRequired
};
ProfileImage.defaultProps = {
  size: 80
};
export default i18n.withTranslation()(ProfileImage); // auto-add i18n