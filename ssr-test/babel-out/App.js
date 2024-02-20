import React from "react";
import { Root } from "./components/Root";
function App() {
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "styleSheet",
    href: "./styles.css"
  }), /*#__PURE__*/React.createElement("title", null, "Title")), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("h1", null, "server render"), /*#__PURE__*/React.createElement("p", null, "server components"), /*#__PURE__*/React.createElement("p", null, "add text"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "fish"), /*#__PURE__*/React.createElement("li", null, "flower"), /*#__PURE__*/React.createElement("li", null, "rice")), /*#__PURE__*/React.createElement(Root, null), /*#__PURE__*/React.createElement("script", {
    src: "./main.js"
  })));
}
export default App;