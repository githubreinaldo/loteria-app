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
import RegisterScreen from './screens/RegisterScreen';
import ManagePlaysScreen from './screens/ManagePlaysScreen';  // Nueva pantalla para gestionar jugadas
import PlayerHistoryScreen from './screens/PlayerHistoryScreen';  // Nueva pantalla para el historial de jugadores

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Estado de autenticación
  const [isAdmin, setIsAdmin] = useState(false);  // Estado para determinar si es administrador
  const [loggedInUsername, setLoggedInUsername] = useState('');  // Almacena el nombre de usuario

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
        setLoggedInUsername(username);  // Almacenar el nombre de usuario
        if (data.user.isAdmin) {  // Verifica si el usuario tiene el rol de admin
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
          <Route path="/register" element={<RegisterScreen />} />  {/* Nueva ruta para el registro */}
          <Route path="/play" element={<PlayScreen username={loggedInUsername} />} />  {/* Pasamos el username a PlayScreen */}
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/results" element={<ResultsScreen />} />
          {isAdmin && (
            <>
              <Route path="/admin" element={<AdminMainScreen />} />
              <Route path="/admin/manage-plays" element={<ManagePlaysScreen />} />  {/* Ruta para gestionar jugadas */}
              <Route path="/admin/modify-balance" element={<ModifyBalanceScreen />} />
              <Route path="/admin/stats" element={<StatsScreen />} />
              <Route path="/admin/player-history" element={<PlayerHistoryScreen />} />  {/* Ruta para historial de jugadores */}
            </>
          )}
          {!isAdmin && <Route path="/user" element={<UserMainScreen username={loggedInUsername} />} />}  {/* Pasamos el username a UserMainScreen */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
