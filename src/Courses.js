// src/Courses.js
import React from 'react';

function Courses() {
  const cursos = [
    {
      id: 1,
      titulo: 'Introducción a JavaScript',
      instructor: 'Sebastian Barcenas',
    },
    {
      id: 2,
      titulo: 'Desarrollo Web con React',
      instructor: 'Santiago Barcenas',
    },
    {
      id: 3,
      titulo: 'Swift para Principiantes',
      instructor: 'Orlando Burgos',
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

export default Courses;
