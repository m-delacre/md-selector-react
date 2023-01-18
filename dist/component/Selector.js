"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Selector.css");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ListItem(props) {
  return /*#__PURE__*/_react.default.createElement("option", {
    value: props.value
  }, props.value);
}
function Selector(_ref) {
  let {
    title,
    valuesList,
    onChange
  } = _ref;
  const listOption = valuesList.map((option, index) => /*#__PURE__*/_react.default.createElement(ListItem, {
    key: index,
    value: option.name
  }));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selector"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "selector"
  }, title), /*#__PURE__*/_react.default.createElement("select", {
    name: "selector",
    id: "selector",
    onChange: onChange
  }, listOption));
}
var _default = Selector;
exports.default = _default;