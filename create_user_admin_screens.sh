#!/bin/bash

# Crear las carpetas necesarias si no existen
mkdir -p src/screens

# Pantalla de inicio de sesión (Usuarios y Administradores)
cat <<EOL > src/screens/LoginScreen.js
import React from 'react';

const LoginScreen = () => {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
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

# Pantalla principal de usuario
cat <<EOL > src/screens/UserMainScreen.js
import React from 'react';

const UserMainScreen = () => {
  const saldo = 100; // Ejemplo de saldo

  return (
    <div>
      <h1>Pantalla Principal de Usuario</h1>
      <p>Saldo: \$\{saldo}</p>
      <button>Realizar Jugada</button>
      <button>Ver Historial</button>
      <button>Ver Resultados</button>
    </div>
  );
};

export default UserMainScreen;
EOL

# Pantalla de jugadas del usuario
cat <<EOL > src/screens/PlayScreen.js
import React, { useState } from 'react';

const PlayScreen = () => {
  const [numero, setNumero] = useState("");

  const handleJugada = () => {
    console.log("Número jugado:", numero);
    alert("Jugada realizada con éxito");
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
    </div>
  );
};

export default PlayScreen;
EOL

# Pantalla de historial del usuario
cat <<EOL > src/screens/HistoryScreen.js
import React from 'react';

const HistoryScreen = () => {
  const historial = [
    { fecha: '2024-08-20', numero: 5, resultado: 'Ganador' },
    { fecha: '2024-08-19', numero: 2, resultado: 'Perdedor' },
    // Agregar más jugadas aquí
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

# Pantalla de resultados de ganadores (Usuarios)
cat <<EOL > src/screens/ResultsScreen.js
import React from 'react';

const ResultsScreen = () => {
  const resultados = [
    { fecha: '2024-08-20', numero: 5 },
    { fecha: '2024-08-19', numero: 2 },
    // Agregar más resultados aquí
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

# Pantalla principal de administrador
cat <<EOL > src/screens/AdminMainScreen.js
import React from 'react';

const AdminMainScreen = () => {
  return (
    <div>
      <h1>Pantalla Principal de Administrador</h1>
      <button>Gestionar Jugadas</button>
      <button>Ver Estadísticas</button>
      <button>Modificar Saldos</button>
      <button>Ver Historial de Jugadores</button>
    </div>
  );
};

export default AdminMainScreen;
EOL

# Pantalla de estadísticas (Administrador)
cat <<EOL > src/screens/StatsScreen.js
import React from 'react';

const StatsScreen = () => {
  const estadisticas = [
    { numero: 5, jugadas: 10 },
    { numero: 2, jugadas: 8 },
    // Agregar más estadísticas aquí
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

# Pantalla de modificación de saldo (Administrador)
cat <<EOL > src/screens/ModifyBalanceScreen.js
import React, { useState } from 'react';

const ModifyBalanceScreen = () => {
  const [saldo, setSaldo] = useState(100); // Saldo inicial

  const handleSaldo = (accion) => {
    if (accion === 'aumentar') setSaldo(saldo + 10);
    if (accion === 'disminuir') setSaldo(saldo - 10);
  };

  return (
    <div>
      <h1>Modificar Saldo</h1>
      <p>Saldo actual: \$\{saldo}</p>
      <button onClick={() => handleSaldo('aumentar')}>Aumentar Saldo</button>
      <button onClick={() => handleSaldo('disminuir')}>Disminuir Saldo</button>
    </div>
  );
};

export default ModifyBalanceScreen;
EOL

echo "Pantallas de usuarios y administradores creadas correctamente."
