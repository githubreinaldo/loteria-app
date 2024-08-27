import React, { useState, useEffect } from 'react';

const PlayerHistoryScreen = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [playerHistory, setPlayerHistory] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/players');
        const data = await response.json();
        setPlayers(data.players);
      } catch (error) {
        setMessage('Error al obtener los jugadores.');
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  const fetchPlayerHistory = async (player) => {
    try {
      const response = await fetch(`/api/history?username=${player}`);
      const data = await response.json();
      setPlayerHistory(data.history);
    } catch (error) {
      setMessage('Error al obtener el historial del jugador.');
      console.error(error);
    }
  };

  const handlePlayerChange = (e) => {
    setSelectedPlayer(e.target.value);
    fetchPlayerHistory(e.target.value);
  };

  return (
    <div>
      <h1>Historial de Jugadores</h1>
      {message && <p>{message}</p>}
      <select onChange={handlePlayerChange} value={selectedPlayer}>
        <option value="">Seleccione un jugador</option>
        {players.map((player, index) => (
          <option key={index} value={player.username}>
            {player.username}
          </option>
        ))}
      </select>
      <ul>
        {playerHistory.map((play, index) => (
          <li key={index}>
            Número Jugado: {play.numberPlayed}, Monto: {play.amount}, Fecha: {new Date(play.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerHistoryScreen;
