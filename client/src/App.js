import React from 'react';
// import "./reset.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Calendar from './pages/Calendar';
import Home from './pages/Home';
// import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Route exact path='/' component={ Home } />
      <Route exact path='/calendar' component={ Calendar } />
      <Route exact path='/register' component={ Register } />
      {/* <Route exact path='/login' component={ Login } /> */}
    </Router>
  );
}

export default App;
