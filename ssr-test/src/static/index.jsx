import React from 'react'
import { hydrateRoot, hydrateRootRoot } from 'react-dom/client'
import { App } from './static-html.jsx'

hydrateRoot(document.getElementById('root'), <App />)
