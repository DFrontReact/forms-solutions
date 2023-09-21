import React from 'react';
import './style.css';

export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    console.log({
      name: form.get('name'),
      age: form.get('age'),
      password: form.get('password'),
      email: form.get('email'),
      sex: form.get('sex'),
      allAccepted: form.get('allAccepted'), // NOTA: este valor estará como "on" en el caso de que se haya marcado.
    });
  };
  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" />
        <label for="age">Edad</label>
        <input type="number" id="age" name="age" />
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <label for="sex">Sexo</label>
        <select id="sex" name="sex">
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>
        <input type="checkbox" id="allAccepted" name="allAccepted" />
        <label for="allAccepted">¿Has leido todo?</label>
        <button>Enviar</button>
      </form>
    </div>
  );
}
