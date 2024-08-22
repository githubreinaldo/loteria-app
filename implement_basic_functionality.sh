#!/bin/bash

# Pantalla de jugadas con funcionalidad de selección de número
cat <<EOL > src/screens/PlayScreen.js
import React, { useState } from 'react';

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
      <input 
        type="number" 
        min="0" 
        max="9" 
        placeholder="Selecciona un número" 
        value={numero} 
        onChange={(e) => setNumero(e.target.value)}
      />
      <button onClick={handleJugada}>Confirmar Jugada</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default PlayScreen;
EOL

# Pantalla de historial con datos de jugadas simuladas
cat <<EOL > src/screens/HistoryScreen.js
import React from 'react';

const HistoryScreen = () => {
  const historial = [
    { fecha: '2024-08-20', numero: 5, resultado: 'Ganador' },
    { fecha: '2024-08-19', numero: 2, resultado: 'Perdedor' },
    { fecha: '2024-08-18', numero: 7, resultado: 'Perdedor' },
    // Simulación de más jugadas
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

# Pantalla de resultados ganadores con simulación de datos
cat <<EOL > src/screens/ResultsScreen.js
import React from 'react';

const ResultsScreen = () => {
  const resultados = [
    { fecha: '2024-08-20', numero: 5 },
    { fecha: '2024-08-19', numero: 2 },
    { fecha: '2024-08-18', numero: 7 },
    // Simulación de más resultados
  ];

  return (
    <div>
      <h1>Resultados Ganadores</h1>
      <ul>
        {resultados.map((resultado, index) => (
          <li key={index}>
            {resultado.fecha} - Número Ganador: {resultado.numero}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsScreen;
EOL

# Pantalla de modificación de saldo con interactividad
cat <<EOL > src/screens/ModifyBalanceScreen.js
import React, { useState } from 'react';

const ModifyBalanceScreen = () => {
  const [saldo, setSaldo] = useState(100);

  const handleAumento = () => {
    setSaldo(saldo + 10);
  };

  const handleDisminucion = () => {
    setSaldo(saldo - 10);
  };

  return (
    <div>
      <h1>Modificar Saldo</h1>
      <p>Saldo actual: \$\{saldo}</p>
      <button onClick={handleAumento}>Aumentar Saldo</button>
      <button onClick={handleDisminucion}>Disminuir Saldo</button>
    </div>
  );
};

export default ModifyBalanceScreen;
EOL

# Pantalla de estadísticas de jugadas con datos simulados
cat <<EOL > src/screens/StatsScreen.js
import React from 'react';

const StatsScreen = () => {
  const estadisticas = [
    { numero: 5, jugadas: 10 },
    { numero: 2, jugadas: 8 },
    { numero: 7, jugadas: 15 },
    // Simulación de más estadísticas
  ];

  return (
    <div>
      <h1>Estadísticas de Jugadas</h1>
      <ul>
        {estadisticas.map((stats, index) => (
          <li key={index}>
            Número: {stats.numero} - Jugadas: {stats.jugadas}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsScreen;
EOL

echo "Interactividad básica implementada en las pantallas."
