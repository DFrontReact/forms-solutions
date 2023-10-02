import * as React from 'react';
import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    age: Yup.number()
      .min(18, 'Age should be 18 at least')
      .max(30, 'Age should be less than 30')
      .required('Required'),
    password: Yup.string().required('Required'),
    genre: Yup.string().required('Required'),
    allAccepted: Yup.boolean().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          setFormValues(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Nombre</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="age">Edad</label>
            <Field type="number" name="age" />
            <ErrorMessage name="age" component="div" />
            <label htmlFor="password">Contraseña</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="genre">Sexo</label>
            <Field as="select" name="genre">
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </Field>
            <ErrorMessage name="genre" component="div" />
            <Field type="checkbox" name="allAccepted" />
            <label htmlFor="allAccepted">¿Has leido todo?</label>
            <ErrorMessage name="allAccepted" component="div" />
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
