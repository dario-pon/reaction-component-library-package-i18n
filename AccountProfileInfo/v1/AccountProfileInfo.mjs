import "core-js/modules/es6.function.name";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 
import i18n from "../../utils/i18n";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme, CustomPropTypes } from "../../utils";
var AccountProfileInfoContainer = styled.div.withConfig({
  displayName: "AccountProfileInfo__AccountProfileInfoContainer",
  componentId: "bbm1ai-0"
})(["display:flex;position:relative;"]);
var AccountProfileInfoTextContainer = styled.div.withConfig({
  displayName: "AccountProfileInfo__AccountProfileInfoTextContainer",
  componentId: "bbm1ai-1"
})(["display:flex;flex-direction:column;justify-content:center;margin-left:", ";position:relative;"], applyTheme("AccountProfileInfo.spacingBetweenImageAndContent"));
var ViewerEmailText = styled.span.withConfig({
  displayName: "AccountProfileInfo__ViewerEmailText",
  componentId: "bbm1ai-2"
})(["", " align-self:left;margin-bottom:", ";"], addTypographyStyles("AccountProfileInfoEmail", "labelText"), applyTheme("AccountProfileInfo.spacingAfterEmail"));
var ViewerNameText = styled.span.withConfig({
  displayName: "AccountProfileInfo__ViewerNameText",
  componentId: "bbm1ai-3"
})(["", " align-self:left;margin-bottom:", ";"], addTypographyStyles("AccountProfileInfoName", "titleTextBold"), applyTheme("AccountProfileInfo.spacingAfterName"));

var AccountProfileInfo =
  /*#__PURE__*/
  function (_Component) {
    _inherits(AccountProfileInfo, _Component);

    function AccountProfileInfo() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, AccountProfileInfo);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccountProfileInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.viewerProfileEditLink = function () {
        var _this$props = _this.props,
          Button = _this$props.components.Button,
          onClickEdit = _this$props.onClickEdit,
          shouldShowEditButton = _this$props.shouldShowEditButton;

        if (shouldShowEditButton) {
          return React.createElement(Button, {
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

    _createClass(AccountProfileInfo, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
          className = _this$props2.className,
          ProfileImage = _this$props2.components.ProfileImage,
          viewer = _this$props2.viewer;
        return React.createElement(AccountProfileInfoContainer, {
          className: className
        }, React.createElement(ProfileImage, {
          size: 80,
          viewer: viewer
        }), React.createElement(AccountProfileInfoTextContainer, null, React.createElement(ViewerNameText, null, this.viewerName), React.createElement(ViewerEmailText, null, this.viewerPrimaryEmailAddress), this.viewerProfileEditLink()));
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
  }(Component);

AccountProfileInfo.propTypes = {
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
     * An element to show to link to the edit profile page
     */
    Button: CustomPropTypes.component,

    /**
    * Profile image component to display
    */
    ProfileImage: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }),

  /**
   * Function to pass to button onClick
   */
  onClickEdit: PropTypes.func,

  /**
   * Enable this prop when you only want to display the Edit account link
   */
  shouldShowEditButton: PropTypes.bool,

  /**
   * An object containing basic user information.
   */
  viewer: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string,
    primaryEmailAddress: PropTypes.string.isRequired,
    profileImage: PropTypes.string
  }).isRequired
};
AccountProfileInfo.defaultProps = {
  shouldShowEditButton: false
};
export default i18n.withTranslation()(withComponents(AccountProfileInfo)); // auto-add i18n