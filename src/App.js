import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (

    <div>

    <Navbar />

    <Background />

    <Hero />

    </div>
  )
}

export default App;
