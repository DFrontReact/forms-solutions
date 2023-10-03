import * as React from 'react';
import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function App() {
  const [formValues, setFormValues] = React.useState('');
  const initialValues = {
    name: '',
  };

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Required').min(3),
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
