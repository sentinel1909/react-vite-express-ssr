// src/entry-client.jsx

import { hydrateRoot } from 'react-dom/client';

import App from './app';
import { hydrate } from 'react-dom';

hydrateRoot(document.getElementById('app'), <App />);
