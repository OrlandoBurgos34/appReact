// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home1 from './Home1';
import Cursos from './Cursos';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="imgprograming.png" alt="Logo" className="App-logo" />
          <center></center><h1>Cursos de Programación</h1>
          <nav>
            <ul>
              <li>
                <Link to="/Home1">Inicio</Link>
              </li>
              <li>
                <Link to="/Cursos">Cursos</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/Inicio" element={<Home1 />} />
            <Route path="/Cursos" element={<Cursos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


