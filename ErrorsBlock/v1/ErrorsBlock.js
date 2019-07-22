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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var ErrorWrapper = _styledComponents.default.div.withConfig({
  displayName: "ErrorsBlock__ErrorWrapper",
  componentId: "sc-2zxcue-0"
})(["margin-bottom:", ";margin-left:0;margin-right:0;margin-top:", ";"], (0, _utils.applyTheme)("ErrorsBlock.spacingBelow"), (0, _utils.applyTheme)("ErrorsBlock.spacingAbove"));

var Error = _styledComponents.default.div.withConfig({
  displayName: "ErrorsBlock__Error",
  componentId: "sc-2zxcue-1"
})(["", ""], (0, _utils.addTypographyStyles)("ErrorsBlock", "labelText"));

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "ErrorsBlock__IconWrapper",
  componentId: "sc-2zxcue-2"
})(["display:inline-block;margin-bottom:0;margin-left:0;margin-right:", ";margin-top:0;path{fill:", ";}svg{height:0.875em;}"], (0, _utils.applyTheme)("ErrorsBlock.iconSpacingToLabel"), (0, _utils.applyTheme)("ErrorsBlock.iconColor"));

var ErrorsBlock =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ErrorsBlock, _Component);

  function ErrorsBlock() {
    (0, _classCallCheck2.default)(this, ErrorsBlock);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorsBlock).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorsBlock, [{
    key: "renderIcon",
    value: function renderIcon() {
      var iconError = this.props.components.iconError;
      return _react.default.createElement(IconWrapper, null, iconError);
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
      if ((0, _lodash.default)(errors)) return null; // https://reactjs.org/docs/lists-and-keys.html
      // "When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort.
      // We don’t recommend using indexes for keys if the items can reorder, as that would be slow."
      //
      // There will rarely be more than a few errors for a field, and forcing unique ID
      // generation for them would be arbitrary and unnecessary. So we'll use the index.

      return _react.default.createElement(ErrorWrapper, {
        className: className
      }, errors.map(function (error, index) {
        return _react.default.createElement(Error, {
          key: index,
          className: errorClassName,
          "data-name": error.name
        }, shouldShowIcon ? _this.renderIcon() : "", error.message);
      }));
    }
  }]);
  return ErrorsBlock;
}(_react.Component);

ErrorsBlock.isFormErrors = true;
ErrorsBlock.propTypes = {
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
     * An element to show as an icon with the error message
     */
    iconError: _propTypes.default.node
  }),
  errorClassName: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  errors: _propTypes.default.array,
  names: _propTypes.default.arrayOf(_propTypes.default.string),
  shouldShowIcon: _propTypes.default.bool
};
ErrorsBlock.defaultProps = {
  className: undefined,
  errorClassName: undefined,
  errors: undefined,
  names: undefined,
  shouldShowIcon: false
};

var _default = (0, _componentsContext.withComponents)(ErrorsBlock);

exports.default = _default;