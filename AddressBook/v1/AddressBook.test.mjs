import React from "react";
import renderer from "react-test-renderer"; // import { shallow } from "enzyme";

import mockComponents from "../../../tests/mockComponents";
import AddressBook from "./AddressBook";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(AddressBook, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});