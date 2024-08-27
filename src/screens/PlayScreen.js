import React, { useState } from 'react';

const PlayScreen = () => {
  const [playNumber, setPlayNumber] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePlay = async () => {
    if (!playNumber || !betAmount) {
      setMessage('Por favor, ingrese un número y un monto para la jugada.');
      return;
    }

    try {
      const response = await fetch('https://7jtlss-3001.csb.app/api/play', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'nuevoUsuario',  // Incluye el nombre de usuario
          numberPlayed: playNumber,
          amount: betAmount
        }),
      });

      const data = await response.json();

      if (data.message === 'Jugada registrada') {
        setMessage('¡Jugada realizada con éxito!');
      } else {
        setMessage('Error al realizar la jugada.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h3>Realizar Jugada</h3>
      <input
        type="number"
        placeholder="Número"
        value={playNumber}
        onChange={(e) => setPlayNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
      />
      <button onClick={handlePlay}>Jugar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PlayScreen;
