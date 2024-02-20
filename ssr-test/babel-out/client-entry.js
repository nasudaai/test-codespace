import React from 'react';
import { hydrateRoot } from 'react-dom/client';

//import { Root } from './components/Root'
import App from './App';
hydrateRoot(document, /*#__PURE__*/React.createElement(App, null));