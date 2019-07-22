"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fontFamily = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var fontFamily = "'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif";
exports.fontFamily = fontFamily;
var fontWeightRegular = 400;
var fontWeightBold = 700;
var fontWeightSemiBold = 600;
var bodyTextColor = _colors.default.coolGrey500;
var captionTextColor = _colors.default.black30;
var titleTextColor = "#505558";
var _default = {
  titleText: {
    color: titleTextColor,
    fontFamily: fontFamily,
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  titleTextBold: {
    color: titleTextColor,
    fontFamily: fontFamily,
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  headingText: {
    color: titleTextColor,
    fontFamily: fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  headingTextBold: {
    color: titleTextColor,
    fontFamily: fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  subheadingText: {
    color: titleTextColor,
    fontFamily: fontFamily,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  subheadingTextBold: {
    color: titleTextColor,
    fontFamily: fontFamily,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".03em",
    lineHeight: "1.25"
  },
  bodyText: {
    color: bodyTextColor,
    fontFamily: fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".03em",
    lineHeight: "1.5"
  },
  bodyTextBold: {
    color: bodyTextColor,
    fontFamily: fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".03em",
    lineHeight: "1.5"
  },
  bodyTextSemiBold: {
    color: bodyTextColor,
    fontFamily: fontFamily,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeightSemiBold,
    letterSpacing: ".03em",
    lineHeight: "1.5"
  },
  labelText: {
    color: titleTextColor,
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".02em",
    lineHeight: "1.25"
  },
  labelTextBold: {
    color: titleTextColor,
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".02em",
    lineHeight: "1.25"
  },
  captionText: {
    color: captionTextColor,
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: fontWeightRegular,
    letterSpacing: ".02em",
    lineHeight: "1.25"
  },
  captionTextBold: {
    color: captionTextColor,
    fontFamily: fontFamily,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: fontWeightBold,
    letterSpacing: ".02em",
    lineHeight: "1.25"
  }
};
exports.default = _default;