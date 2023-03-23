import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";

export default function App() {
  const { register,  formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => { 
    console.log(data) 
  };

  return (
    <div className="container">
      <h1>Título del formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" {...register("name", { required: "Obligatorio", maxLength:{value: 20, message: "¿De verdad tienes un nombre tan largo?"}})} />
        {errors.name && <p role="alert">{errors.name?.message}</p>}

        <label htmlFor="age">Edad</label>
        <input type="number" id="age" {...register("age", { 
          required: "Obligatorio", min:{value:18, message: "Aún demasiado peque"}, max: {value:120, message: "Te has colado"} })} />
        {errors.age && <p role="alert">{errors.age?.message}</p>}

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" {...register("password", )} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="genre">Genero</label>
        <select id="genre" {...register("genre")}>
          <option value="male">Macho</option>
          <option value="female">Hembra</option>
          <option value="other">Otro</option>
        </select>

        <input type="checkbox" id="allAccepted" {...register("accepted")} />
        <label htmlFor="allAccepted">¿Has leido todo?</label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
