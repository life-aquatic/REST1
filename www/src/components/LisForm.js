import React, { useState } from "react";

function LisForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

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
      .then((inputs) => console.log(inputs))
      .catch((error) => console.error("Error:", error));
  };

  return (
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
      <input type="submit" />
    </form>
  );
}

export default LisForm;
