import React from 'react';

const ResultsScreen = () => {
  const resultados = [
    { fecha: '2024-08-20', numero: 5 },
    { fecha: '2024-08-19', numero: 2 },
    { fecha: '2024-08-18', numero: 7 },
    // Simulación de más resultados
  ];

  return (
    <div>
      <h1>Resultados Ganadores</h1>
      <ul>
        {resultados.map((resultado, index) => (
          <li key={index}>
            {resultado.fecha} - Número Ganador: {resultado.numero}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsScreen;
