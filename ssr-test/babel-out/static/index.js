import React from 'react';
import { hydrateRoot, hydrateRootRoot } from 'react-dom/client';
import { App } from './static-html.jsx';
hydrateRoot(document.getElementById('root'), /*#__PURE__*/React.createElement(App, null));