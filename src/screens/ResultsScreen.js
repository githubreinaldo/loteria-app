import React, { useState, useEffect } from 'react';

const ResultsScreen = () => {
  const [newResult, setNewResult] = useState('');
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

  const handleAddResult = async () => {
    if (!newResult) {
      setMessage('Por favor, ingrese el nuevo resultado.');
      return;
    }

    try {
      const response = await fetch('/api/add-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ result: newResult }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Resultado agregado con éxito.');
        setNewResult('');
        fetchResults(); // Actualizar la lista de resultados
      } else {
        setMessage('Error al agregar el resultado.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h3>Gestionar Resultados</h3>

      {/* Sección para agregar un nuevo resultado */}
      <div>
        <input
          type="text"
          placeholder="Nuevo Resultado"
          value={newResult}
          onChange={(e) => setNewResult(e.target.value)}
        />
        <button onClick={handleAddResult}>Agregar Resultado</button>
      </div>

      {/* Sección para mostrar los resultados existentes */}
      <div>
        <h4>Resultados Registrados</h4>
        <ul>
          {results.length > 0 ? (
            results.map((result, index) => (
              <li key={index}>{result.date} - {result.result}</li>
            ))
          ) : (
            <li>No hay resultados registrados.</li>
          )}
        </ul>
      </div>

      {/* Mensaje de éxito o error */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResultsScreen;

