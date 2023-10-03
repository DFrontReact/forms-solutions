import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
          {...register('name', {
            required: 'Obligatorio',
            maxLength: {
              value: 20,
              message: '¿De verdad tienes un nombre tan largo?',
            },
          })}
        />
        {errors.name && <p role="alert">{errors.name?.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
