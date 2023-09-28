import React from 'react';
import './style.css';
import { useFormik } from 'formik';

export default function App() {
  // Creación de función validate donde podemos meter las validaciones
  const validate = (values) => {
    // Inicialización de la variable para almacenar el error
    const errors = {};
    // Validación del campo nombre
    if (!values.name) {
      errors.name = 'Campo requerido';
    }
    return errors;
  };

  // Destructuramos el hooks userFormik sus propiedades
  const { handleSubmit, handleChange, values, errors } = useFormik({
    // Instancia del objeto literal para los valores iniciales
    initialValues: {
      name: '',
      age: '',
      password: '',
      email: '',
      genre: 'macho',
      allAccepted: false,
    },
    validate: validate, // Referenciamos el validate de formik con nuestra función validate
    onSubmit: (values) => console.log(values), // Control del envio del formulario
  });

  return (
    <div className="container">
      <h1>Título del formulario</h1>
      {/* Pasamos al atributo onSubmit al elemento form, handleSubmit se ejecutara cuando el usuario
      haga click en el botón enviar */}
      <form onSubmit={handleSubmit}>
        <label for="name">Nombre</label>
        {/* Formik maneja los eventos con el handleChange que nos proporciona */}
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={values.name}
        />
        {/* El objeto error se genera cuando se realiza una validación detecta errores en el formulario
        Comprobamos si tenemos un error asociado en ese caso lo mostramos si no lo tenemos no lo muestra */}
        {errors.name && <div className="error">{errors.name}</div>}
        <label for="age">Edad</label>

        <input
          type="number"
          min="0"
          id="age"
          onChange={handleChange}
          value={values.age}
        />
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={values.email}
        />
        <label for="genre">Sexo</label>
        <select id="genre" onChange={handleChange} value={values.genre}>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>
        <input
          type="checkbox"
          id="allAccepted"
          onChange={handleChange}
          value={values.allAccepted}
        />
        <label for="allAccepted">¿Has leido todo?</label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
