import React, { useState, useEffect } from 'react';

const ResultsScreen = () => {
  const [results, setResults] = useState([]);
  const [newResult, setNewResult] = useState('');

  useEffect(() => {
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

    fetchResults();
  }, []);

  const addResult = async () => {
    try {
      const response = await fetch('https://7jtlss-3001.csb.app/api/add-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ result: newResult }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      alert('Resultado agregado con éxito');
      setResults([...results, data.result]);
    } catch (error) {
      console.error('Error al agregar el resultado:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Resultados</h1>
      <p>Resultados: {results.map((r, index) => <li key={index}>{r}</li>)}</p>
      <input
        type="text"
        value={newResult}
        onChange={(e) => setNewResult(e.target.value)}
        placeholder="Agregar nuevo resultado"
      />
      <button onClick={addResult}>Agregar Resultado</button>
    </div>
  );
};

export default ResultsScreen;
