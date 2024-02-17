import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.js";
const html = renderToString(/* @__PURE__ */ React.createElement(App, null));
export { html };
