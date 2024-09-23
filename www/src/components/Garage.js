import React from "react";
import Car from "./Haku.js";

const Garage = () => {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <div>
      <Car brand={carInfo.name} model={carInfo.model} />
    </div>
  );
};

export default Garage;
