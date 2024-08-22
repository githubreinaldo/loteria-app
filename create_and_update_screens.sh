#!/bin/bash

# Crear la carpeta para componentes reutilizables
mkdir -p src/components

# Componente de botón reutilizable
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

# Componente de formulario reutilizable
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
    />
  );
};

export default InputField;
EOL

# Componente de lista reutilizable
cat <<EOL > src/components/List.js
import React from 'react';

const List = ({ items, renderItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
EOL

# Modificar las pantallas para usar componentes reutilizables

# Pantalla de jugadas
cat <<EOL > src/screens/PlayScreen.js
import React, { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';

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

# Pantalla de historial
cat <<EOL > src/screens/HistoryScreen.js
import React from 'react';
import List from '../components/List';

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

echo "Componentes reutilizables creados y pantallas actualizadas correctamente."
