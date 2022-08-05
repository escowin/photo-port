import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
=======
import ReactDOM from 'react-dom/client';
>>>>>>> aa165a9c50c5646e2bc02a6e3c95dc718431268b
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
// index.js | app entry point
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
=======
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> aa165a9c50c5646e2bc02a6e3c95dc718431268b
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();
=======
reportWebVitals();
>>>>>>> aa165a9c50c5646e2bc02a6e3c95dc718431268b
