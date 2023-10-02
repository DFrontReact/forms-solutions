import React from 'react';
import './style.css';

export default function App() {
  const inputRef = React.useRef('');

  const handleSubmit = (event) => {
    const form = new FormData(event.target);
    console.log(form.get('name'));
    alert('A name was submitted: ' + inputRef.current.value);
    event.preventDefault();
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
