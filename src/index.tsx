import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Reset } from 'styled-reset';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
);
