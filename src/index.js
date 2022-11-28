import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./fonts/SF-Pro-Display-Bold.otf";
import "./fonts/SF-Pro-Display-Regular.otf";
import "./fonts/SF-Pro-Display-Semibold.otf";

//to the pcakage.json
// "homepage": "https://innovationnationsl.github.io/insl-frontend/",

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
