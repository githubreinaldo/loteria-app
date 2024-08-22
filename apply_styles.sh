#!/bin/bash

# Crear la carpeta de estilos si no existe
mkdir -p src/styles

# Crear la hoja de estilos global
cat <<EOL > src/styles/styles.css
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f4;
  color: #374151;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3b82f6;
  font-size: 24px;
}

button {
  background-color: #3b82f6;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
}

button:hover {
  background-color: #60a5fa;
}

input {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  background-color: #e5e7eb;
  margin-bottom: 5px;
  border-radius: 5px;
}
EOL

# Modificar el componente de botón para aceptar estilos adicionales
cat <<EOL > src/components/Button.js
import React from 'react';

const Button = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
EOL

# Modificar el componente de campo de entrada para aceptar estilos adicionales
cat <<EOL > src/components/InputField.js
import React from 'react';

const InputField = ({ type, placeholder, value, onChange, min, max }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      style={{ width: '100%', padding: '10px', margin: '10px 0' }}
    />
  );
};

export default InputField;
EOL

# Aplicar los estilos a la pantalla de jugadas
cat <<EOL > src/screens/PlayScreen.js
import React, { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import '../styles/styles.css';

const PlayScreen = () => {
  const [numero, setNumero] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleJugada = () => {
    if (numero >= 0 && numero <= 9) {
      setMensaje(\`Jugada realizada con el número \${numero}\`);
    } else {
      setMensaje("Número inválido. Debe ser entre 0 y 9.");
    }
  };

  return (
    <div>
      <h1>Realizar Jugada</h1>
      <InputField
        type="number"
        min="0"
        max="9"
        placeholder="Selecciona un número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <Button label="Confirmar Jugada" onClick={handleJugada} />
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default PlayScreen;
EOL

# Aplicar los estilos a la pantalla de historial
cat <<EOL > src/screens/HistoryScreen.js
import React from 'react';
import List from '../components/List';
import '../styles/styles.css';

const HistoryScreen = () => {
  const historial = [
    { fecha: '2024-08-20', numero: 5, resultado: 'Ganador' },
    { fecha: '2024-08-19', numero: 2, resultado: 'Perdedor' },
    { fecha: '2024-08-18', numero: 7, resultado: 'Perdedor' },
  ];

  const renderItem = (jugada) => (
    \`\${jugada.fecha} - Número: \${jugada.numero} - Resultado: \${jugada.resultado}\`
  );

  return (
    <div>
      <h1>Historial de Jugadas</h1>
      <List items={historial} renderItem={renderItem} />
    </div>
  );
};

export default HistoryScreen;
EOL

echo "Estilos aplicados correctamente a las pantallas y componentes."
