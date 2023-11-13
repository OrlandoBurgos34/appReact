// src/App.js
import React from 'react';
import './App.css';

function App() {
  const cursos = [
    {
      id: 1,
      titulo: 'Introducción a JavaScript',
      instructor: 'Orlando Burgos',
    },
    {
      id: 2,
      titulo: 'Desarrollo Web con React',
      instructor: 'Orlando Burgos',
    },
    {
      id: 3,
      titulo: 'Python para Principiantes',
      instructor: 'Orlando Burgos',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cursos de Programación</h1>
      </header>
      <main>
        <section>
          <h2>Lista de Cursos</h2>
          <ul>
            {cursos.map(curso => (
              <li key={curso.id}>
                <strong>{curso.titulo}</strong> - Instructor: {curso.instructor}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

