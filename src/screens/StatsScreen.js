import React from 'react';

const StatsScreen = () => {
  const estadisticas = [
    { numero: 5, jugadas: 10 },
    { numero: 2, jugadas: 8 },
    { numero: 7, jugadas: 15 },
    // Simulación de más estadísticas
  ];

  return (
    <div>
      <h1>Estadísticas de Jugadas</h1>
      <ul>
        {estadisticas.map((stats, index) => (
          <li key={index}>
            Número: {stats.numero} - Jugadas: {stats.jugadas}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsScreen;
