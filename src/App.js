import React, { useState } from 'react';
import './style.css';

export default function App() {
  // Esta recibe objeto con el nombre de las etiquetas
  const [values, setValues] = useState({
    name: '',
    age: '',
    password: '',
    email: '',
    genre: 'hombre',
    allAccepted: false,
  });
  // Función para prevenir el comportamiento por defecto del formulario
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Aquí podriamos meter información que necesitaramos enviar o validaciones

    emailValidate();
  };

  const emailValidate = () => {
    const { email } = values;
    // Expresión regular para validar el correo electronico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Validación de el email
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      emailMessage.classList.remove('hidden');
      emailMessage.classList.add('show');
      return;
    }
    emailMessage.classList.remove('show');
    emailMessage.classList.add('hidden');
  };

  // Función manejadora del evento
  const handleChanges = ({ target }) => {
    const { name, type, checked, value } = target;
    /*
      Variable que almacena si es de tipo value o de tipo checked
    */
    const newValue = type === 'checkbox' ? checked : value;

    /*
      1- Clona nuestro estado actual
      2- remplaza solo el valor del input que se ejecuta en el evento
    */
    const newValues = {
      ...values,
      [name]: newValue,
    };

    // Volvemos a sincronizar el estado de nuevo
    setValues(newValues);
  };
  console.log(values);

  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <form>
        <label for="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChanges}
        />
        <label for="age">Edad</label>
        <input
          type="number"
          name="age"
          id="age"
          min="0"
          value={values.age}
          onChange={handleChanges}
        />
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChanges}
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          id="email"
          onChange={handleChanges}
        />
        <div id="emailMessage" class="hidden">
          Correo electrónico no válido
        </div>
        <label for="genre">Sexo</label>
        <select
          id="genre"
          name="genre"
          value={values.genre}
          onChange={handleChanges}
        >
          <option value="male">Hombre</option>
          <option value="female">Mujer</option>
        </select>
        <input
          type="checkbox"
          name="allAccepted"
          checked={values.allAccepted}
          id="allAccepted"
          onChange={handleChanges}
        />
        <label for="allAccepted" value="true">
          ¿Has leido todo?
        </label>
      </form>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
