import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Missions from './pages/Missions/Missions';
import Profile from './pages/Profile';
import Dragons from './pages/Dragons/Dragons';
import Rockets from './pages/Rockets/Rockets';
import { getMissions } from './redux/missions/missions';
import { getDragons } from './redux/dragons/dragons';
import { getRockets } from './redux/rockets/rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
    dispatch(getDragons());
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route exact path="/" element={<Rockets />} />
        </Routes>
      </Router>
    </div>

  );
};

export default App;
