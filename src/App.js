import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';

export default function App() {
  const {} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
        />

        <label htmlFor="age">Edad</label>
        <input
          type="number"
          id="age"
        />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="genre">Genero</label>
        <select id="genre">
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>

        <input type="checkbox" id="allAccepted" />
        <label htmlFor="allAccepted">¿Has leido todo?</label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
