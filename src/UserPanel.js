import React, { useState, useEffect } from 'react';

const UserPanel = () => {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Obtener saldo
    const fetchBalance = async () => {
      try {
        const response = await fetch('https://7jtlss-3001.csb.app/api/balance');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error('Error al obtener el saldo:', error);
        alert(`Error: ${error.message}`);
      }
    };

    // Obtener historial
    const fetchHistory = async () => {
      try {
        const response = await fetch('https://7jtlss-3001.csb.app/api/history');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setHistory(data.history);
      } catch (error) {
        console.error('Error al obtener el historial:', error);
        alert(`Error: ${error.message}`);
      }
    };

    // Obtener resultados
    const fetchResults = async () => {
      try {
        const response = await fetch('https://7jtlss-3001.csb.app/api/results');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error('Error al obtener los resultados:', error);
        alert(`Error: ${error.message}`);
      }
    };

    fetchBalance();
    fetchHistory();
    fetchResults();
  }, []);

  return (
    <div>
      <h1>Panel de Usuario</h1>
      <p>Saldo: {balance}</p>
      <p>Historial: {history.map((h, index) => <li key={index}>{h}</li>)}</p>
      <p>Resultados: {results.map((r, index) => <li key={index}>{r}</li>)}</p>
    </div>
  );
};

export default UserPanel;

