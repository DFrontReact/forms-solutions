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
          <input type="text" id="name" name="name" aria-label="Nombre" />
          <label for="age">Edad</label>
          <input type="number" id="age" name="age" aria-label="Edad" />
          <label for="genre">Sexo</label>
          <select id="genre" name="genre">
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Cuenta</legend>
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" aria-label="Contraseña" />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" aria-label="Email" />
        </fieldset>

        <input
          type="checkbox"
          id="allAccepted"
          name="allAccepted"
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
