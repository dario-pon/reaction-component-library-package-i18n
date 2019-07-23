import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme } from "../../utils";
var ViewerInfoContainer = styled.div.withConfig({
  displayName: "ViewerInfo__ViewerInfoContainer",
  componentId: "sc-11in3tg-0"
})(["display:flex;position:relative;"]);
var ViewerFirstNameText = styled.span.withConfig({
  displayName: "ViewerInfo__ViewerFirstNameText",
  componentId: "sc-11in3tg-1"
})(["", " display:", ";align-self:center;margin-left:0.5rem;@media (min-width:", "px){display:", ";}"], addTypographyStyles("ViewerInfo", "labelText"), function (_ref) {
  var compact = _ref.compact,
      full = _ref.full;

  if (full) {
    return compact ? "none" : "inline";
  }

  return "none";
}, applyTheme("md", "breakpoints"), function (_ref2) {
  var compact = _ref2.compact;
  return compact ? "none" : "inline";
});

var ViewerInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewerInfo, _Component);

  function ViewerInfo() {
    _classCallCheck(this, ViewerInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewerInfo).apply(this, arguments));
  }

  _createClass(ViewerInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          compact = _this$props.compact,
          ProfileImage = _this$props.components.ProfileImage,
          full = _this$props.full,
          viewer = _this$props.viewer;
      return React.createElement(ViewerInfoContainer, {
        className: className
      }, React.createElement(ProfileImage, {
        size: 30,
        viewer: viewer
      }), React.createElement(ViewerFirstNameText, {
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
}(Component);

ViewerInfo.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * Enable this prop when you only want to display the initials/avatar on all screens
   */
  compact: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
    * Profile image component to display
    */
    ProfileImage: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }),

  /**
   * Enable this prop when you want to display the initials and first name on all screens
   */
  full: PropTypes.bool,
  // eslint-disable-line react/boolean-prop-naming

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
ViewerInfo.defaultProps = {
  compact: false,
  full: false
};
export default i18n.withTranslation()(withComponents(ViewerInfo)); // auto-add i18n