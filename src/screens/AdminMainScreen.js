import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminMainScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pantalla Principal de Administrador</h1>
      <button onClick={() => navigate('/admin/manage-plays')}>Gestionar Jugadas</button>
      <button onClick={() => navigate('/admin/stats')}>Ver Estadísticas</button>
      <button onClick={() => navigate('/admin/modify-balance')}>Modificar Saldos</button>
      <button onClick={() => navigate('/admin/player-history')}>Ver Historial de Jugadores</button>
    </div>
  );
};

export default AdminMainScreen;
