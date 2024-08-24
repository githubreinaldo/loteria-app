import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminMainScreen from './screens/AdminMainScreen';
import HistoryScreen from './screens/HistoryScreen';
import LoginScreen from './screens/LoginScreen';
import ModifyBalanceScreen from './screens/ModifyBalanceScreen';
import PlayScreen from './screens/PlayScreen';
import ResultsScreen from './screens/ResultsScreen';
import StatsScreen from './screens/StatsScreen';
import UserMainScreen from './screens/UserMainScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>¡Bienvenido a la Lotería App!</h1>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/play" element={<PlayScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/results" element={<ResultsScreen />} />
          <Route path="/admin" element={<AdminMainScreen />} />
          <Route path="/modify-balance" element={<ModifyBalanceScreen />} />
          <Route path="/stats" element={<StatsScreen />} />
          <Route path="/user" element={<UserMainScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
