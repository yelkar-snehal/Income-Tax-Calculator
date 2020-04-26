import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import { BasicDetails } from './components/BasicDetails';
import { Exemption } from './components/Exemption';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <BasicDetails></BasicDetails>
      </Route>
      <Route path="/exemption">
        <Exemption></Exemption>
      </Route>
    </Router>
  );
}

export default App;
