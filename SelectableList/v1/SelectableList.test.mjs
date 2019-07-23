import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import SelectableList from "./SelectableList";
test("basic snapshot", function () {
  var items = [{
    id: "1",
    label: "Priority shipping",
    detail: "$12.00",
    value: "123",
    checked: true
  }, {
    id: "2",
    label: "Expedited shipping",
    detail: "$5.00",
    value: "333"
  }, {
    id: "3",
    label: "Free shipping",
    detail: "$0.00",
    value: "2455"
  }];
  var component = renderer.create(React.createElement(SelectableList, {
    options: items,
    components: mockComponents,
    name: "Form"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});