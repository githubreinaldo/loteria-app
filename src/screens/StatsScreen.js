import React, { useState, useEffect } from 'react';

const StatsScreen = () => {
  const [stats, setStats] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();

      if (data.success) {
        setStats(data.stats);
      } else {
        setMessage('Error al obtener las estadísticas.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h3>Estadísticas de Jugadas</h3>
      <p>Total de Jugadas: {stats.totalPlays}</p>
      <p>Número más Jugado: {stats.mostPlayedNumber}</p>
      {/* Añade más estadísticas según sea necesario */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default StatsScreen;
