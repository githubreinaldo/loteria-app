#!/bin/bash

# Crear la estructura de carpetas
mkdir -p src/components
mkdir -p src/screens
mkdir -p src/assets
mkdir -p src/styles

# Crear el archivo LoginScreen.js
cat <<EOL > src/screens/LoginScreen.js
import React from 'react';

const LoginScreen = () => {
  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginScreen;
EOL

# Crear el archivo PlayScreen.js
cat <<EOL > src/screens/PlayScreen.js
import React from 'react';

const PlayScreen = () => {
  return (
    <div>
      <h1>Realizar Jugada</h1>
      <input type="number" min="0" max="9" placeholder="Selecciona un número" />
      <button type="submit">Jugar</button>
    </div>
  );
};

export default PlayScreen;
EOL

# Crear el archivo HistoryScreen.js
cat <<EOL > src/screens/HistoryScreen.js
import React from 'react';

const HistoryScreen = () => {
  const historial = [
    { fecha: '2024-08-20', numero: 5, resultado: 'Ganador' },
    { fecha: '2024-08-19', numero: 2, resultado: 'Perdedor' },
    // Más jugadas aquí
  ];

  return (
    <div>
      <h1>Historial de Jugadas</h1>
      <ul>
        {historial.map((jugada, index) => (
          <li key={index}>
            {jugada.fecha} - Número: {jugada.numero} - Resultado: {jugada.resultado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryScreen;
EOL

# Crear el archivo de estilos styles.css
cat <<EOL > src/styles/styles.css
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f4;
  color: #374151;
  padding: 20px;
}

h1 {
  color: #3b82f6;
}

input, button {
  display: block;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #60a5fa;
}
EOL

echo "Estructura de archivos y carpetas creada correctamente."
