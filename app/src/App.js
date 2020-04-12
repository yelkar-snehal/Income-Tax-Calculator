import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import { BasicDetails } from './components/BasicDetails';

function App() {
  return (
    <Router>
      <Route path="/">
        <BasicDetails></BasicDetails>
      </Route>
    </Router>
  );
}

export default App;
