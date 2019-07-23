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
import isEmpty from "lodash.isempty";
import { withComponents } from "@reactioncommerce/components-context";
import { addTypographyStyles, applyTheme } from "../../utils";
var ErrorWrapper = styled.div.withConfig({
  displayName: "ErrorsBlock__ErrorWrapper",
  componentId: "sc-2zxcue-0"
})(["margin-bottom:", ";margin-left:0;margin-right:0;margin-top:", ";"], applyTheme("ErrorsBlock.spacingBelow"), applyTheme("ErrorsBlock.spacingAbove"));
var Error = styled.div.withConfig({
  displayName: "ErrorsBlock__Error",
  componentId: "sc-2zxcue-1"
})(["", ""], addTypographyStyles("ErrorsBlock", "labelText"));
var IconWrapper = styled.div.withConfig({
  displayName: "ErrorsBlock__IconWrapper",
  componentId: "sc-2zxcue-2"
})(["display:inline-block;margin-bottom:0;margin-left:0;margin-right:", ";margin-top:0;path{fill:", ";}svg{height:0.875em;}"], applyTheme("ErrorsBlock.iconSpacingToLabel"), applyTheme("ErrorsBlock.iconColor"));

var ErrorsBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorsBlock, _Component);

  function ErrorsBlock() {
    _classCallCheck(this, ErrorsBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorsBlock).apply(this, arguments));
  }

  _createClass(ErrorsBlock, [{
    key: "renderIcon",
    value: function renderIcon() {
      var iconError = this.props.components.iconError;
      return React.createElement(IconWrapper, null, iconError);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          errorClassName = _this$props.errorClassName,
          errors = _this$props.errors,
          className = _this$props.className,
          shouldShowIcon = _this$props.shouldShowIcon;
      if (isEmpty(errors)) return null; // https://reactjs.org/docs/lists-and-keys.html
      // "When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort.
      // We don’t recommend using indexes for keys if the items can reorder, as that would be slow."
      //
      // There will rarely be more than a few errors for a field, and forcing unique ID
      // generation for them would be arbitrary and unnecessary. So we'll use the index.

      return React.createElement(ErrorWrapper, {
        className: className
      }, errors.map(function (error, index) {
        return React.createElement(Error, {
          key: index,
          className: errorClassName,
          "data-name": error.name
        }, shouldShowIcon ? _this.renderIcon() : "", error.message);
      }));
    }
  }]);

  return ErrorsBlock;
}(Component);

ErrorsBlock.isFormErrors = true;
ErrorsBlock.propTypes = {
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
     * An element to show as an icon with the error message
     */
    iconError: PropTypes.node
  }),
  errorClassName: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  errors: PropTypes.array,
  names: PropTypes.arrayOf(PropTypes.string),
  shouldShowIcon: PropTypes.bool
};
ErrorsBlock.defaultProps = {
  className: undefined,
  errorClassName: undefined,
  errors: undefined,
  names: undefined,
  shouldShowIcon: false
};
export default i18n.withTranslation()(withComponents(ErrorsBlock)); // auto-add i18n