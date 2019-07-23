import React from "react"; // auto-add i18n 

import i18n from "../../utils";
import renderer from "react-test-renderer";
import SelectableItem from "./SelectableItem";
test("basic snapshot with empty props", function () {
  var component = renderer.create(React.createElement(SelectableItem, {
    label: t('Label" detail="Detail" value="detail')
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});