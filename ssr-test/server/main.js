import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.js";

function Html() {
  return /* @__PURE__ */ React.createElement(App, null);
}
const html = renderToString(/* @__PURE__ */ React.createElement(Html, null));
//console.log(html);
export { html };
