import React from 'react'
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import './App.css'
import BasicDetails from './containers/BasicDetails'
import Exemption from './containers/Exemption'
import { Provider } from 'react-redux';
import store from "./redux/store"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <BasicDetails></BasicDetails>
        </Route>
        <Route path="/exemption">
          <Exemption></Exemption>
        </Route>
      </Router>
    </Provider>
  )
}

export default App
