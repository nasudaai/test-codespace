import React from 'react';
import { renderToString } from 'react-dom/server';
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "React component"), /*#__PURE__*/React.createElement("p", null, "This is static HTML. 'express.static'"));
}
function Page() {
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("title", null, "Static Page")), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("h1", null, "Static HTML"), /*#__PURE__*/React.createElement("p", null, "server rendering"), /*#__PURE__*/React.createElement("div", {
    id: "root"
  }), /*#__PURE__*/React.createElement(App, null), /*#__PURE__*/React.createElement("script", {
    src: "index.js"
  })));
}
const html = renderToString( /*#__PURE__*/React.createElement(Page, null));
export { html, Page, App };
console.log(html);