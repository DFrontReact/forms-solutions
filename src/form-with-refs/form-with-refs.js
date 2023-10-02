import React, { useRef, useState } from 'react';
import './style.css';
import { formValidation, validateValue } from './utils';

function App() {
  const [errors, setErrors] = useState({});

  let nameRef = useRef();
  let ageRef = useRef();
  let passwordRef = useRef();
  let emailRef = useRef();
  let genreRef = useRef();
  let acceptRef = useRef();

  const validateField = (name, value) => {
    setErrors({
      ...errors,
      [name]: validateValue(value, formValidation[name]),
    });
  };

  const handleButtonClick = () => {
    const data = {
      name: nameRef?.current?.value,
      age: ageRef?.current?.value,
      password: passwordRef?.current?.value,
      email: emailRef?.current?.value,
      genre: genreRef?.current?.value,
      allAccepted: acceptRef?.current?.checked,
    };
    const aux = {};
    Object.entries(data).forEach(([key, value]) => {
      aux[key] = validateValue(value, formValidation[key]);
    });
    setErrors(aux);
  };
  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <form>
        <label for="name">Nombre</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onBlur={() => validateField('name', nameRef?.current?.value)}
        />
        {errors?.name?.length > 0 && <p>{errors?.name}</p>}
        <label for="age">Edad</label>
        <input
          ref={ageRef}
          type="number"
          id="age"
          onBlur={() => validateField('age', ageRef?.current?.value)}
        />
        {errors?.age?.length > 0 && <p>{errors?.age}</p>}
        <label for="password">Contraseña</label>
        <input
          onBlur={() => validateField('password', passwordRef?.current?.value)}
          ref={passwordRef}
          type="password"
          id="password"
        />
        {errors?.password?.length > 0 && <p>{errors?.password}</p>}
        <label for="email">Email</label>
        <input
          onBlur={() => validateField('email', emailRef?.current?.value)}
          ref={emailRef}
          type="email"
          id="email"
        />
        {errors?.email?.length > 0 && <p>{errors?.email}</p>}
        <label for="genre">Sexo</label>
        <select
          onBlur={() => validateField('genre', ageRef?.current?.value)}
          ref={genreRef}
          id="genre"
        >
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>
        {errors?.genre?.length > 0 && <p>{errors?.genre}</p>}
        <input
          onChange={() =>
            validateField('allAccepted', acceptRef?.current?.checked)
          }
          ref={acceptRef}
          type="checkbox"
          id="allAccepted"
        />
        <label for="allAccepted">¿Has leido todo?</label>
        {errors?.allAccepted?.length > 0 && <p>{errors?.allAccepted}</p>}
      </form>
      <button onClick={handleButtonClick}>Enviar</button>
    </div>
  );
}

export default App;
