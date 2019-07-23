import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import InPageMenuItem from "./InPageMenuItem";
test("InPageMenuItem basic component", function () {
  var component = renderer.create(React.createElement(InPageMenuItem, {
    href: "/test/url/",
    label: t('Test label'),
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("InPageMenuItem with onClick instead of href", function () {
  var onClick = function onClick() {};

  var component = renderer.create(React.createElement(InPageMenuItem, {
    label: t('Test label'),
    onClick: onClick,
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("InPageMenuItem selected", function () {
  var component = renderer.create(React.createElement(InPageMenuItem, {
    isSelected: true,
    href: "/test/url/",
    label: t('Test label'),
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});