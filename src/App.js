import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Missions from './pages/Missions/Missions';
import Profile from './pages/Profile';

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/missions" element={<Profile />} />
      </Routes>
    </Router>
  </div>

);

export default App;
