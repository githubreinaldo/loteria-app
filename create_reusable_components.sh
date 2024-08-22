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

echo "Componentes reutilizables creados correctamente."
