import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react"; // auto-add i18n 

import i18n from "../../utils";
import PropTypes from "prop-types";
import styled from "styled-components";
import { preventAccidentalDoubleClick } from "../../utils";
var UnstyledLinkHref = styled.a.withConfig({
  displayName: "Link__UnstyledLinkHref",
  componentId: "aei7h9-0"
})(["text-decoration:none;"]);
var UnstyledLinkOnClick = styled.div.withConfig({
  displayName: "Link__UnstyledLinkOnClick",
  componentId: "aei7h9-1"
})(["cursor:pointer;display:inline-block;text-decoration:none;"]);

var Link =
/*#__PURE__*/
function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.onClick = preventAccidentalDoubleClick(function (event) {
      _this.props.onClick(event);
    });
    return _this;
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          href = _this$props.href;

      if (href) {
        return React.createElement(UnstyledLinkHref, {
          className: className,
          href: href,
          onClick: this.onClick
        }, children);
      }

      return React.createElement(UnstyledLinkOnClick, {
        className: className,
        onClick: this.onClick,
        role: "button"
      }, children);
    }
  }]);

  return Link;
}(Component);

Link.propTypes = {
  /**
   * The contents of the link, such as text, icons, or any combination of React and HTML components
   */
  children: PropTypes.node.isRequired,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * The URL the link should navigate to
   */
  href: PropTypes.string,

  /**
   * Called with a single event parameter when a user clicks the link
   */
  onClick: PropTypes.func
};
Link.defaultProps = {
  onClick: function onClick() {}
};
export default i18n.withTranslation()(Link); // auto-add i18n