import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';  // Importa los estilos globales
import App from './App';  // Asegúrate de que App.js exista o créalo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
