import React from 'react';
import './style.css';

export default function App() {
  const inputRef = React.useRef('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(form.get('name'));
    alert('A name was submitted: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" ref={inputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
