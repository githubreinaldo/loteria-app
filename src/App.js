import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminMainScreen from './screens/AdminMainScreen';
import HistoryScreen from './screens/HistoryScreen';
import LoginScreen from './screens/LoginScreen';
import ModifyBalanceScreen from './screens/ModifyBalanceScreen';
import PlayScreen from './screens/PlayScreen';
import ResultsScreen from './screens/ResultsScreen';
import StatsScreen from './screens/StatsScreen';
import UserMainScreen from './screens/UserMainScreen';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Estado de autenticación
  const [isAdmin, setIsAdmin] = useState(false);  // Estado para determinar si es administrador

  // Función para manejar el login y autenticación
  const handleLogin = async (username, password) => {
    try {
      // Realiza una solicitud POST al backend con las credenciales de usuario
      const response = await fetch('https://7jtlss-3001.csb.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Verifica si el login fue exitoso
      if (data.message === 'Inicio de sesión exitoso') {
        setIsAuthenticated(true);
        if (data.user.role === 'admin') {
          setIsAdmin(true);  // Si el usuario es administrador, actualiza el estado
        } else {
          setIsAdmin(false);  // Si no es administrador
        }
      } else {
        alert(data.message);  // Mostrar mensaje de credenciales incorrectas o error
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>¡Bienvenido a la Lotería App!</h1>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                isAdmin ? <Navigate to="/admin" /> : <Navigate to="/user" />
              ) : (
                <LoginScreen handleLogin={handleLogin} />  // Pasamos la función handleLogin a LoginScreen
              )
            }
          />
          <Route path="/play" element={<PlayScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/results" element={<ResultsScreen />} />
          {isAdmin && (
            <>
              <Route path="/admin" element={<AdminMainScreen />} />
              <Route path="/modify-balance" element={<ModifyBalanceScreen />} />
              <Route path="/stats" element={<StatsScreen />} />
            </>
          )}
          {!isAdmin && <Route path="/user" element={<UserMainScreen />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
