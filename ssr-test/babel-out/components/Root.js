import React from "react";
import { Counter } from "./Counter";
function Root() {
  return /*#__PURE__*/React.createElement("div", {
    id: "root"
  }, /*#__PURE__*/React.createElement("h2", null, "react component"), /*#__PURE__*/React.createElement(Counter, null));
}
export { Root };