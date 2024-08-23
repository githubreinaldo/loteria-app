#!/bin/bash

# Verificar si estamos en el directorio del proyecto
echo "Creando el archivo index.js en src/"

# Crear la carpeta src si no existe
mkdir -p src

# Crear el archivo index.js con el contenido necesario para React
cat <<EOL > src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';  // Importa los estilos globales
import App from './App';  // Asegúrate de que App.js exista o créalo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOL

# Confirmar que el archivo fue creado
echo "Archivo index.js creado exitosamente en src/"
