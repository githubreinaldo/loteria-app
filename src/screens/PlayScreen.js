import React, { useState } from 'react';

function PlayScreen() {
  const [numberPlayed, setNumberPlayed] = useState('');
  const [amount, setAmount] = useState('');

  const handlePlay = async () => {
    const response = await fetch('/api/play', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'usuarioEjemplo', numberPlayed, amount }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Realizar Jugada</h1>
      <input
        type="text"
        placeholder="Número"
        value={numberPlayed}
        onChange={(e) => setNumberPlayed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePlay}>Jugar</button>
    </div>
  );
}

export default PlayScreen;
