import React, { useState, useEffect } from 'react';

const ManagePlaysScreen = () => {
  const [plays, setPlays] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPlays = async () => {
      try {
        const response = await fetch('/api/plays');
        const data = await response.json();
        setPlays(data.plays);
      } catch (error) {
        setMessage('Error al obtener las jugadas.');
        console.error(error);
      }
    };

    fetchPlays();
  }, []);

  return (
    <div>
      <h1>Gestionar Jugadas</h1>
      {message && <p>{message}</p>}
      <ul>
        {plays.map((play, index) => (
          <li key={index}>
            Jugador: {play.username}, Número Jugado: {play.numberPlayed}, Monto: {play.amount}, Ganó: {play.isWinner ? 'Sí' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagePlaysScreen;
