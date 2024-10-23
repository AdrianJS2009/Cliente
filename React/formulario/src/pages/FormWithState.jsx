import { useState } from "react";

function FormWithState() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`El valor ingresado es: ${inputValue}`);
    setInputValue("");
  };

  return (
    <>
      <h2>Formulario con useState</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese algo:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default FormWithState;
