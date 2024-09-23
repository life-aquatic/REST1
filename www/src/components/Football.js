import React from "react";

const Football = () => {
  const shoot = (a, b) => {
    alert(a);
    alert(b.type);
  };

  return <button onClick={(e) => shoot("Goal", e)}>Take the shot!</button>;
};

export default Football;
