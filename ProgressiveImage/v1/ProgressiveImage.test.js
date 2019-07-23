"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ProgressiveImage = _interopRequireDefault(require("./ProgressiveImage"));

// auto-add i18n 
test("Basic ProgressiveImage snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProgressiveImage.default, {
    src: "/reaction-design-system-logo.svg",
    alt: "Reaction Design System Logo"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("ProgressiveImage with progressive loading snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProgressiveImage.default, {
    src: "/images/sticker/medium.jpg",
    presrc: "/images/sticker/small.png"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Responsive ProgressiveImage with progressive loading snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProgressiveImage.default, {
    presrc: "/images/sticker/small.png",
    srcs: {
      large: "/images/sticker/large.jpg",
      medium: "/images/sticker/medium.jpg",
      small: "/images/sticker/small.png"
    }
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Responsive ProgressiveImage with 'cover' fit and progressive loading snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProgressiveImage.default, {
    fit: "cover",
    presrc: "/images/sticker/small.png",
    srcs: {
      large: "/images/sticker/large.jpg",
      medium: "/images/sticker/medium.jpg",
      small: "/images/sticker/small.png"
    }
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});