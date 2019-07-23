import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import ViewerInfo from "./ViewerInfo";
test("Render with profile image", function () {
  var mockViewer = {
    primaryEmailAddress: "email@domain.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };
  var component = renderer.create(React.createElement(ViewerInfo, {
    components: mockComponents,
    viewer: mockViewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with only required props", function () {
  var mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  var component = renderer.create(React.createElement(ViewerInfo, {
    components: mockComponents,
    viewer: mockViewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with only email & first name props", function () {
  var mockViewer = {
    firstName: "Issac",
    primaryEmailAddress: "email@domain.com"
  };
  var component = renderer.create(React.createElement(ViewerInfo, {
    components: mockComponents,
    viewer: mockViewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with full name and email props", function () {
  var mockViewer = {
    firstName: "Issac",
    lastName: "Newton",
    primaryEmailAddress: "email@domain.com"
  };
  var component = renderer.create(React.createElement(ViewerInfo, {
    components: mockComponents,
    viewer: mockViewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with full prop", function () {
  var mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  var component = renderer.create(React.createElement(ViewerInfo, {
    components: mockComponents,
    viewer: mockViewer,
    full: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with compact prop", function () {
  var mockViewer = {
    primaryEmailAddress: "email@domain.com"
  };
  var component = renderer.create(React.createElement(ViewerInfo, {
    components: mockComponents,
    viewer: mockViewer,
    compact: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});