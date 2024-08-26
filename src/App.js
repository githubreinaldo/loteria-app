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
  const handleLogin = (username, password) => {
    // Aquí agregas la lógica de autenticación, puede ser una llamada a la API
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setIsAdmin(true);
    } else if (username === 'user' && password === 'user') {
      setIsAuthenticated(true);
      setIsAdmin(false);
    } else {
      alert('Credenciales incorrectas');
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
                <LoginScreen handleLogin={handleLogin} />
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
