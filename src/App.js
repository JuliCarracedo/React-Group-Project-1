import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes />
    </Router>
  </div>

);

export default App;
