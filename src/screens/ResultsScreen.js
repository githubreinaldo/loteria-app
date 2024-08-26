import React, { useState, useEffect } from 'react';

const ResultsScreen = () => {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchResults();
  }, []);

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
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResultsScreen;
