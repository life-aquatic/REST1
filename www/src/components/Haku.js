// Haku.js
import React, { useEffect, useState } from "react";

const Haku = ({ fin }) => {
  const [wordDetails, setWordDetails] = useState(null);

  useEffect(() => {
    if (fin) {
      fetch(`http://127.0.0.1:5001/words?word=${fin}`)
        .then((response) => response.json())
        .then((data) => setWordDetails(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [fin]);

  if (!wordDetails) return <div>Loading...</div>;

  return (
    <div>
      <p>Fin: {JSON.stringify(wordDetails)}</p>
    </div>
  );
};

export default Haku;
