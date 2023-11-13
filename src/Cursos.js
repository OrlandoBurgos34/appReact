// src/Cursos.js
import React from 'react';

function Cursos() {
  const cursos = [
    {
      id: 1,
      titulo: 'Introducción a JavaScript',
      instructor: 'John Doe',
    },
    {
      id: 2,
      titulo: 'Desarrollo Web con React',
      instructor: 'Jane Smith',
    },
    {
      id: 3,
      titulo: 'Python para Principiantes',
      instructor: 'Bob Johnson',
    },
  ];

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            <strong>{curso.titulo}</strong> - Instructor: {curso.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cursos;
