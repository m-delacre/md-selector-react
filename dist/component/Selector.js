"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Selector.css");
function ListItem(props) {
  return /*#__PURE__*/React.createElement("option", {
    value: props.value
  }, props.value);
}
function Selector(_ref) {
  let {
    title,
    valuesList
  } = _ref;
  const listOption = valuesList.map((option, index) => /*#__PURE__*/React.createElement(ListItem, {
    key: index,
    value: option.name
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "selector"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "selector"
  }, title), /*#__PURE__*/React.createElement("select", {
    name: "selector",
    id: "selector"
  }, listOption));
}
var _default = Selector;
exports.default = _default;