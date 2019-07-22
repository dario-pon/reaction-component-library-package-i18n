import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import InPageMenu from "./InPageMenu";
test("basic snapshot", function () {
  var menuItems = [{
    href: "/label/a",
    label: "Label A"
  }, {
    href: "/label/b",
    label: "Label B"
  }, {
    href: "/label/c",
    label: "Label C (Selected / Active)",
    isSelected: true
  }, {
    href: "/label/d",
    label: "Label D"
  }, {
    href: "/label/e",
    label: "Label E"
  }];
  var component = renderer.create(React.createElement(InPageMenu, {
    menuItems: menuItems,
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});