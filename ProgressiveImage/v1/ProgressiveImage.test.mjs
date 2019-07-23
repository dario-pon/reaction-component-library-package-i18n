import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import ProgressiveImage from "./ProgressiveImage";
test("Basic ProgressiveImage snapshot", function () {
  var component = renderer.create(React.createElement(ProgressiveImage, {
    src: "/reaction-design-system-logo.svg",
    alt: "Reaction Design System Logo"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("ProgressiveImage with progressive loading snapshot", function () {
  var component = renderer.create(React.createElement(ProgressiveImage, {
    src: "/images/sticker/medium.jpg",
    presrc: "/images/sticker/small.png"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Responsive ProgressiveImage with progressive loading snapshot", function () {
  var component = renderer.create(React.createElement(ProgressiveImage, {
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
  var component = renderer.create(React.createElement(ProgressiveImage, {
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