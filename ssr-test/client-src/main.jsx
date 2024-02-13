import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from './App.jsx'
const domnode = document.getElementById('root')
const root = hydrateRoot(domnode, <App />)
