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

var _componentsContext = require("@reactioncommerce/components-context");

// auto-add i18n 
var AccordionWrapper = _styledComponents.default.div.withConfig({
  displayName: "Accordion__AccordionWrapper",
  componentId: "iql5j5-0"
})(["border-color:", ";border-style:", ";border-width:", ";box-sizing:border-box;color:inherit;overflow:hidden;&:first-of-type{border-top-left-radius:", ";border-top-right-radius:", ";}&:not(:first-of-type){border-top:none;}"], (0, _utils.applyTheme)("Accordion.borderColor"), (0, _utils.applyTheme)("Accordion.borderStyle"), (0, _utils.applyTheme)("Accordion.borderWidth"), (0, _utils.applyTheme)("Accordion.borderRadius"), (0, _utils.applyTheme)("Accordion.borderRadius"));

var AccordionHeader = _styledComponents.default.div.withConfig({
  displayName: "Accordion__AccordionHeader",
  componentId: "iql5j5-1"
})(["cursor:pointer;display:flex;justify-content:space-between;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.applyTheme)("Accordion.paddingBottom"), (0, _utils.applyTheme)("Accordion.paddingLeft"), (0, _utils.applyTheme)("Accordion.paddingRight"), (0, _utils.applyTheme)("Accordion.paddingTop"));

var AccordionHeaderLabel = _styledComponents.default.span.withConfig({
  displayName: "Accordion__AccordionHeaderLabel",
  componentId: "iql5j5-2"
})(["", ";"], (0, _utils.addTypographyStyles)("AccordionHeaderLabel", "labelTextBold"));

var AccordionHeaderDetail = _styledComponents.default.span.withConfig({
  displayName: "Accordion__AccordionHeaderDetail",
  componentId: "iql5j5-3"
})(["", ";"], (0, _utils.addTypographyStyles)("AccordionHeaderDetail", "labelText"));

var AccordionHeaderIcon = _styledComponents.default.span.withConfig({
  displayName: "Accordion__AccordionHeaderIcon",
  componentId: "iql5j5-4"
})(["height:", ";margin:0;width:", ";svg{height:", ";transform:", ";transition:", ";width:", ";}"], (0, _utils.applyTheme)("Accordion.iconHeight"), (0, _utils.applyTheme)("Accordion.iconWidth"), (0, _utils.applyTheme)("Accordion.iconHeight"), function (_ref) {
  var isExpanded = _ref.isExpanded;
  return isExpanded ? "rotateZ(180deg)" : "rotateZ(0)";
}, (0, _utils.applyTheme)("Accordion.iconTransition"), (0, _utils.applyTheme)("Accordion.iconWidth"));

var AccordionContent = _styledComponents.default.div.withConfig({
  displayName: "Accordion__AccordionContent",
  componentId: "iql5j5-5"
})(["background-color:", ";border-top-color:", ";border-top-style:", ";border-top-width:", ";color:inherit;height:auto;max-height:", ";overflow:hidden;padding:", ";transition:", ";"], (0, _utils.applyTheme)("Accordion.contentBackgroundColor"), (0, _utils.applyTheme)("Accordion.borderColor"), (0, _utils.applyTheme)("Accordion.borderStyle"), function (_ref2) {
  var isExpanded = _ref2.isExpanded;
  return isExpanded ? (0, _utils.applyTheme)("Accordion.borderWidth") : "0";
}, function (_ref3) {
  var isExpanded = _ref3.isExpanded;
  return isExpanded ? "150vh" : "0";
}, function (_ref4) {
  var isExpanded = _ref4.isExpanded;
  return isExpanded ? (0, _utils.applyTheme)("Accordion.padding") : "0";
}, function (_ref5) {
  var isExpanded = _ref5.isExpanded;
  return isExpanded ? (0, _utils.applyTheme)("Accordion.openTransition") : (0, _utils.applyTheme)("Accordion.closeTransition");
});

var Accordion =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Accordion, _Component);

  function Accordion() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Accordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Accordion)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isExpanded: _this.props.isExpanded
    };
    _this._accordion = null;

    _this.toggle = function () {
      return _this.handleToggle();
    };

    _this.handleToggle = function () {
      var isExpanded = _this.state.isExpanded;

      _this.setState({
        isExpanded: !isExpanded
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Accordion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          iconExpand = _this$props.components.iconExpand,
          detail = _this$props.detail,
          icon = _this$props.icon,
          label = _this$props.label;
      var isExpanded = this.state.isExpanded;
      return _react.default.createElement(AccordionWrapper, {
        className: className,
        ref: function ref(accordionEl) {
          _this2._accordion = accordionEl;
        }
      }, _react.default.createElement(AccordionHeader, {
        onClick: this.handleToggle
      }, _react.default.createElement("span", null, icon ? _react.default.createElement(AccordionHeaderIcon, null, icon) : null, _react.default.createElement(AccordionHeaderLabel, null, label), detail ? _react.default.createElement(AccordionHeaderDetail, null, ", ", detail) : ""), _react.default.createElement(AccordionHeaderIcon, {
        isExpanded: isExpanded
      }, iconExpand)), _react.default.createElement(AccordionContent, {
        isExpanded: isExpanded
      }, children));
    }
  }]);
  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  /**
   * Content to be displayed inside the accordion
   */
  children: _propTypes.default.any,

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
     * Pass either the Reaction iconExpand component or your own component that
     * accepts compatible props.
     */
    iconExpand: _propTypes.default.node.isRequired
  }).isRequired,

  /**
   * Accordion header details
   */
  detail: _propTypes.default.string,

  /**
   * Accordion header icon
   */
  icon: _propTypes.default.node,

  /**
   * Render expanded accordion
   */
  isExpanded: _propTypes.default.bool,

  /**
   * Accordion header bold label
   */
  label: _propTypes.default.string.isRequired
};
Accordion.defaultProps = {
  isExpanded: false
};

var _default = _utils.default.withTranslation()((0, _componentsContext.withComponents)(Accordion)); // auto-add i18n


exports.default = _default;