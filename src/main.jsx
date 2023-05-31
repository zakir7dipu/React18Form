import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {Provider} from "react-redux";
import store from "./assets/api/store.js";
import "./assets/css/main.css";
import "./assets/css/responsive.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
