import React from "react";
import { renderToString } from "react-dom/server";
function Page() {
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "title")), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", { id: "root" }, /* @__PURE__ */ React.createElement("h1", null, "Title"), /* @__PURE__ */ React.createElement("p", null, "server rendering"), /* @__PURE__ */ React.createElement("script", { src: "main.js" }))));
}
const html = renderToString(/* @__PURE__ */ React.createElement(Page, null));
export { html, Page };
console.log(html);
