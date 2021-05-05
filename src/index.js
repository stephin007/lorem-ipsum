import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/head';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>,
  document.getElementById('header')
);
