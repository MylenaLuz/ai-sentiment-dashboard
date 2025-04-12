import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css'; // Importe o CSS aqui
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'; // ou './styles.css' se estiver usando esse


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
