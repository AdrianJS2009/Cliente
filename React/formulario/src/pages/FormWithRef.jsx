import { useRef } from "react";

function FormWithRef() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`El valor ingresado es: ${inputRef.current.value}`);
    inputRef.current.value = "";
    //event.target.reset();
  };

  return (
    <>
      <h2>Formulario con Ref</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese algo:
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default FormWithRef;
