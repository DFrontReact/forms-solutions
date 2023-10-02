import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <form>
        <label for="name">Nombre</label>
        <input type="text" id="name" />
        <label for="age">Edad</label>
        <input type="number" id="age" />
        <label for="password">Contraseña</label>
        <input type="password" id="password" />
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="genre">Sexo</label>
        <select id="genre">
          <option value="male">Masculino</option>
          <option value="female">Hembra</option>
        </select>
        <input type="checkbox" id="allAccepted" />
        <label for="allAccepted">¿Has leido todo?</label>
      </form>
      <button>Enviar</button>
    </div>
  );
}
