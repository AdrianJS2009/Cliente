import { useEffect, useState } from "react";

function App() {
  const [urlDog, setUrlDog] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchingData() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (response.ok) {
        const urlPromesa = await response.json();
        setUrlDog(urlPromesa.message);
        setError(null);
      } else {
        setError("error server");
      }
    } catch (error) {
      console.error(error);
      setError("error server ${error}");
    } finally {
      console.log("Estoy en finally");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchingData;
  }, []);

  function handlePerrito() {
    fetchingData();
  }

  return (
    <div className="App">
      {error && <p>Error</p>}
      {isLoading && <p>Estoy cargando</p>}
      {!error && !isLoading && (
        <>
          <img src={urlDog} />
          <button onClick={handlePerrito}>Otro</button>
        </>
      )}
    </div>
  );
}

export default App;
