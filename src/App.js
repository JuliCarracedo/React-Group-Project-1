import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Dragons from './pages/Dragons/Dragons';

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </Router>
  </div>

);

export default App;
