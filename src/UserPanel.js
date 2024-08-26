import React, { useState, useEffect } from 'react';

const UserPanel = () => {
  // Estado para almacenar el número de la jugada, monto, historial, resultados, y saldo del usuario
  const [playNumber, setPlayNumber] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState([]);
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState('');

  // Cargar historial de jugadas y saldo al iniciar la pantalla
  useEffect(() => {
    fetchHistory();
    fetchBalance();
    fetchResults();
  }, []);

  // Función para manejar la jugada
  const handlePlay = async () => {
    if (!playNumber || !betAmount) {
      setMessage('Por favor, ingrese un número y un monto para la jugada.');
      return;
    }

    try {
      const response = await fetch('/api/play', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: playNumber, amount: betAmount }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('¡Jugada realizada con éxito!');
        setBalance(balance - betAmount); // Actualizar saldo
        fetchHistory(); // Actualizar historial
      } else {
        setMessage('Error al realizar la jugada.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  // Función para obtener el historial de jugadas
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

  // Función para obtener el saldo del usuario
  const fetchBalance = async () => {
    try {
      const response = await fetch('/api/balance');
      const data = await response.json();

      if (data.success) {
        setBalance(data.balance);
      } else {
        setMessage('Error al obtener el saldo.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  // Función para obtener los resultados de las jugadas
  const fetchResults = async () => {
    try {
      const response = await fetch('/api/results');
      const data = await response.json();

      if (data.success) {
        setResults(data.results);
      } else {
        setMessage('Error al obtener los resultados.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h2>Panel de Usuario</h2>

      {/* Mostrar Saldo */}
      <div>
        <h3>Saldo actual: {balance} USD</h3>
      </div>

      {/* Sección para realizar jugadas */}
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
      </div>

      {/* Mensaje de éxito o error */}
      {message && <p>{message}</p>}

      {/* Sección para mostrar el historial de jugadas */}
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
      </div>

      {/* Sección para mostrar los resultados de las jugadas */}
      <div>
        <h3>Resultados Ganadores</h3>
        <ul>
          {results.length > 0 ? (
            results.map((result, index) => (
              <li key={index}>
                {result.date} - Número ganador: {result.number}
              </li>
            ))
          ) : (
            <li>No hay resultados disponibles.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserPanel;
