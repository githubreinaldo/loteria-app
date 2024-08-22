import React from 'react';

const UserMainScreen = () => {
  const saldo = 100; // Ejemplo de saldo

  return (
    <div>
      <h1>Pantalla Principal de Usuario</h1>
      <p>Saldo: $\{saldo}</p>
      <button>Realizar Jugada</button>
      <button>Ver Historial</button>
      <button>Ver Resultados</button>
    </div>
  );
};

export default UserMainScreen;
