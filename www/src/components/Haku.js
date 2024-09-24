// Haku.js
import React, { useEffect, useState } from "react";

const Haku = ({ fin }) => {
  const [wordDetails, setWordDetails] = useState(null);

  useEffect(() => {
    if (fin) {
      fetch(`http://127.0.0.1:5001/words/${fin}`)
        .then((response) => response.json())
        .then((data) => setWordDetails(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [fin]);

  if (!wordDetails)
    return (
      <div>
        <p className="Placeholder">Käännös</p>
      </div>
    );

  return (
    <div>
      <p>{wordDetails}</p>
    </div>
  );
};

export default Haku;
