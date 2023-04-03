import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './src/App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
