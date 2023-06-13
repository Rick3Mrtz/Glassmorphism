import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (

    

    <Router>

      <div>

        <Navbar />

        <Routes>

        <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/signup'
            element={<Signup />}
          />

        </Routes>

      </div>
    </Router>
  )
}

export default App;
