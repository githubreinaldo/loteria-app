#!/bin/bash

# Verificar si estamos en el directorio del proyecto
echo "Creando el archivo App.js en src/"

# Crear la carpeta src si no existe
mkdir -p src

# Crear el archivo App.js con el contenido básico de la aplicación
cat <<EOL > src/App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>¡Bienvenido a la Lotería App!</h1>
    </div>
  );
}

export default App;
EOL

# Confirmar que el archivo fue creado
echo "Archivo App.js creado exitosamente en src/"
