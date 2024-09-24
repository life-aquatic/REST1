import React, { useState } from "react";

function LisForm() {
  const [inputs, setInputs] = useState({});
  const [serverResponse, setServerResponse] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // POST-pyyntö uuden sanan lisäämiseksi
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:5001/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        setServerResponse(data);
      })
      .catch((error) => {
        setServerResponse({ error: error.message });
      });
  };

  // Lisäyslomake
  return (
    <div className="FormClass">
      <form onSubmit={handleSubmit}>
        <label>
          Fin:
          <input
            type="text"
            name="fin"
            value={inputs.fin || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Eng:
          <input
            type="text"
            name="eng"
            value={inputs.eng || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div className="ServerResponse">
        {serverResponse && (
          <div>
            {serverResponse.error
              ? `Virhe: ${serverResponse.error}`
              : `${serverResponse.message}`}
          </div>
        )}
      </div>
    </div>
    // Näytetään palvelimen vastaus tai virheviesti
  );
}

export default LisForm;
