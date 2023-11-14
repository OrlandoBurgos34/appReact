// src/Contact.js
import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contacto</h2>
      <p>
        ¿Tienes preguntas o comentarios? ¡Estamos aquí para ayudarte! Puedes ponerte en contacto con nosotros a través de los siguientes medios:
      </p>
      <ul>
        <li>
          <strong>Correo Electrónico:</strong> info@cursosprogramacion.com
        </li>
        <li>
          <strong>Teléfono:</strong> +123 456 7890
        </li>
        <li>
          <strong>Dirección:</strong> Calle Principal, Ciudad, País
        </li>
      </ul>
      <p>
        También puedes seguirnos en nuestras redes sociales para obtener las últimas actualizaciones:
      </p>
      <ul>
        <li>
          <strong>Facebook:</strong> @CursosProgramacion
        </li>
        <li>
          <strong>Twitter:</strong> @CursosProg
        </li>
        <li>
          <strong>Instagram:</strong> @cursos_programacion
        </li>
      </ul>
      {/* Puedes agregar un formulario de contacto aquí si es necesario */}
    </div>
  );
}

export default Contact;

