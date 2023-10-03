import * as React from 'react';
import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { formValidation, validateValue } from './utils.js';

export default function App() {
  const [formValues, setFormValues] = React.useState('');
  const initialValues = {
    name: '',
    age: 0,
    password: '',
    email: '',
    genre: 'male',
    allAccepted: false,
  };

  const validate = (values) => {};

  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <Formik>
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Nombre</label>
            <label htmlFor="age">Edad</label>
            <label htmlFor="password">Contraseña</label>
            <label htmlFor="email">Email</label>
            <label htmlFor="genre">Sexo</label>
            <label htmlFor="allAccepted">¿Has leido todo?</label>
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
      <p>Los valores recogidos del formulario son: {formValues}</p>
    </div>
  );
}
