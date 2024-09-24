// HakuForm.js
import React, { useState } from "react";
import Haku from "./Haku";

const HakuForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Hakulomake
  return (
    <div className="FormClass">
      <form>
        <label>
          Hae suomenkielinen sana:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      </form>
      <div className="ResponseBox">
        <Haku fin={inputValue} />
      </div>
    </div>
  ); // Näytetään hakutulokset syötetyn sanan perusteella
};

export default HakuForm;
