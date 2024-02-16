var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.jsx
var main_exports = {};
__export(main_exports, {
  html: () => html
});
module.exports = __toCommonJS(main_exports);
var import_react3 = __toESM(require("react"), 1);
var import_server = require("react-dom/server");

// src/App.jsx
var import_react2 = __toESM(require("react"), 1);

// src/components/Counter.jsx
var import_react = __toESM(require("react"), 1);
function Counter() {
  return /* @__PURE__ */ import_react.default.createElement("button", null, "button");
}

// src/App.jsx
function App() {
  return /* @__PURE__ */ import_react2.default.createElement("html", null, /* @__PURE__ */ import_react2.default.createElement("head", null, /* @__PURE__ */ import_react2.default.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ import_react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), /* @__PURE__ */ import_react2.default.createElement("link", { rel: "styleSheet", href: "styles.css" }), /* @__PURE__ */ import_react2.default.createElement("title", null, "Title")), /* @__PURE__ */ import_react2.default.createElement("body", null, /* @__PURE__ */ import_react2.default.createElement("h1", null, "server render"), /* @__PURE__ */ import_react2.default.createElement("p", null, "server components"), /* @__PURE__ */ import_react2.default.createElement("p", null, "add text"), /* @__PURE__ */ import_react2.default.createElement("ul", null, /* @__PURE__ */ import_react2.default.createElement("li", null, "fish"), /* @__PURE__ */ import_react2.default.createElement("li", null, "flower"), /* @__PURE__ */ import_react2.default.createElement("li", null, "rice")), /* @__PURE__ */ import_react2.default.createElement("div", { id: "root" }, /* @__PURE__ */ import_react2.default.createElement("h2", null, "react component"), /* @__PURE__ */ import_react2.default.createElement(Counter, null)), /* @__PURE__ */ import_react2.default.createElement("script", { type: "module", src: "./main.js" })));
}
var App_default = App;

// src/main.jsx
function Html() {
  return /* @__PURE__ */ import_react3.default.createElement(App_default, null);
}
var html = (0, import_server.renderToString)(/* @__PURE__ */ import_react3.default.createElement(Html, null));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  html
});
