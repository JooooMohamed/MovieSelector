import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
let createBrowserHistory = require("history").createBrowserHistory;

const history = createBrowserHistory();

window.nav_history = history;

const app = (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(app, document.getElementById('root'));
 