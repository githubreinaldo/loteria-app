import React from 'react';

const HistoryScreen = () => {
  const historial = [
    { fecha: '2024-08-20', numero: 5, resultado: 'Ganador' },
    { fecha: '2024-08-19', numero: 2, resultado: 'Perdedor' },
    // Más jugadas aquí
  ];

  return (
    <div>
      <h1>Historial de Jugadas</h1>
      <ul>
        {historial.map((jugada, index) => (
          <li key={index}>
            {jugada.fecha} - Número: {jugada.numero} - Resultado: {jugada.resultado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryScreen;
