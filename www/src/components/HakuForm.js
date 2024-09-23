// HakuForm.js
import React, { useState } from "react";
import Haku from "./Haku";

const HakuForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <Haku fin={inputValue} />
    </div>
  );
};

export default HakuForm;
