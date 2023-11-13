// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './home';
import Cursos from './Cursos';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/images/logo.png" alt="Logo" className="App-logo" />
          <h1>Cursos de Programación</h1>
          <nav>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/cursos">Cursos</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/cursos" component={Cursos} />
        </main>
      </div>
    </Router>
  );
}

export default App;


