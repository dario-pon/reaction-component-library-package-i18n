import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import AccountProfileInfo from "./AccountProfileInfo";
test("Render default display, with profile image and no edit link", function () {
  var mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };
  var component = renderer.create(React.createElement(AccountProfileInfo, {
    components: mockComponents,
    viewer: mockViewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with first name only", function () {
  var mockViewer = {
    firstName: "John",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };
  var component = renderer.create(React.createElement(AccountProfileInfo, {
    components: mockComponents,
    viewer: mockViewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with initials instead of profile image", function () {
  var mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com"
  };
  var component = renderer.create(React.createElement(AccountProfileInfo, {
    components: mockComponents,
    viewer: mockViewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Render with edit link", function () {
  var mockViewer = {
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    primaryEmailAddress: "john@doe.com",
    profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
  };
  var clickSpy = jest.fn();
  var component = renderer.create(React.createElement(AccountProfileInfo, {
    components: mockComponents,
    onClickEdit: clickSpy,
    shouldShowEditButton: true,
    viewer: mockViewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});