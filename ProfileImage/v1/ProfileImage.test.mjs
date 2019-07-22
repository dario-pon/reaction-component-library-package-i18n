import React from "react";
import renderer from "react-test-renderer";
import ProfileImage from "./ProfileImage";
var viewer = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com",
  profileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
};
var viewerInitials = {
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  primaryEmailAddress: "john@doe.com"
};
test("ProfileImage component with image snapshot", function () {
  var component = renderer.create(React.createElement(ProfileImage, {
    viewer: viewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("ProfileImage component with custom size", function () {
  var component = renderer.create(React.createElement(ProfileImage, {
    size: 30,
    viewer: viewer
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("ProfileImage component with initials snapshot", function () {
  var component = renderer.create(React.createElement(ProfileImage, {
    viewer: viewerInitials
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});