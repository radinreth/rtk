import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from "redux";

// const store = createStore();
// UNSPLASH_ACCESS_KEY=aJFFTDkdcLsaqOolF2G2X9P2R6Hz7de_2dRXUTGTFd4
// UNSPLASH_SECRET_KEY=pQtsFg1rcAnVmnswzdtoZldqNugr6u9oQzkR_iokouM

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
