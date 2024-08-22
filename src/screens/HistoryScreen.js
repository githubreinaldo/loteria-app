import React from 'react';
import List from '../components/List';
import '../styles/styles.css';

const HistoryScreen = () => {
  const historial = [
    { fecha: '2024-08-20', numero: 5, resultado: 'Ganador' },
    { fecha: '2024-08-19', numero: 2, resultado: 'Perdedor' },
    { fecha: '2024-08-18', numero: 7, resultado: 'Perdedor' },
  ];

  const renderItem = (jugada) => (
    `${jugada.fecha} - Número: ${jugada.numero} - Resultado: ${jugada.resultado}`
  );

  return (
    <div>
      <h1>Historial de Jugadas</h1>
      <List items={historial} renderItem={renderItem} />
    </div>
  );
};

export default HistoryScreen;
