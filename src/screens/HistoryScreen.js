import React, { useState, useEffect } from 'react';

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch('/api/history');
      const data = await response.json();

      if (data.success) {
        setHistory(data.history);
      } else {
        setMessage('Error al obtener el historial.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h3>Historial de Jugadas</h3>
      <ul>
        {history.length > 0 ? (
          history.map((play, index) => (
            <li key={index}>
              {play.date} - Número: {play.number} - Monto: {play.amount} - Resultado: {play.result}
            </li>
          ))
        ) : (
          <li>No tienes jugadas registradas.</li>
        )}
      </ul>
      {message && <p>{message}</p>}
    </div>
  );
};

export default HistoryScreen;

