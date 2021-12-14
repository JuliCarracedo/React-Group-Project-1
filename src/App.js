import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Dragons from './pages/Dragons';

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route path="/dragons">
          <Dragons />
        </Route>
      </Switch>
    </Router>
  </div>

);

export default App;
