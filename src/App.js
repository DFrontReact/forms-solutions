import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <form>
        <fieldset>
          <legend>Datos personales</legend>
          <label for="name">Nombre</label>
          <input type="text" id="name" aria-label="Nombre" />
          <label for="age">Edad</label>
          <input type="number" id="age" aria-label="Edad" />
          <label for="genre">Sexo</label>
          <select id="genre">
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Cuenta</legend>
          <label for="password">Contraseña</label>
          <input type="password" id="password" aria-label="Contraseña" />
          <label for="email">Email</label>
          <input type="email" id="email" aria-label="Email" />
        </fieldset>

        <input
          type="checkbox"
          id="allAccepted"
          aria-describedby="allAceptedLabel"
        />
        <label id="allAceptedLabel" for="allAccepted">
          ¿Has leido todo?
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
}
