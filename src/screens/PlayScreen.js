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
