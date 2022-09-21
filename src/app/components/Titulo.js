/* eslint-disable react/prop-types */
import React from "react";

function Titulo({ tipo, titulo }) {
  switch (tipo) {
    case "h2":
      return <h2 className="Sub-titulo">{titulo}</h2>;
    default:
      return <h1 className="Titulo"> {titulo}</h1>;
  }
}

export default Titulo;
