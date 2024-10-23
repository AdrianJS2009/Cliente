import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [contador, setContador] = useState(2);
  const [isOpen, setIsOpen] = useState(true);
  function handleNext() {
    if (contador < 3) setContador((previousState) => previousState + 1);
  }

  function handlePrevious() {
    if (contador > 1) setContador((previousState) => previousState - 1);
  }

  function handleOpen() {
    setIsOpen((previousState) => !previousState);
  }

  return (
    <>
      <button onClick={handleOpen} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${contador >= 1 && "active"}`}>1</div>
            <div className={`${contador >= 2 && "active"}`}>2</div>
            <div className={`${contador >= 3 && "active"}`}>3</div>
          </div>
          <div className="message">
            Contador {contador} : {messages[contador - 1]}
          </div>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ color: "#fff", backgroundColor: "#7950f2" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ color: "#fff", backgroundColor: "#7950f2" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
