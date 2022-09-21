import React, { Component } from "react";

import Titulo from "../../components/Titulo";
import base from "../HOC/Base";

class Pedidos extends Component {
  render() {
    return (
      <div className="Pedidos">
        <Titulo tipo="h1" titulo="Pedidos"></Titulo>
      </div>
    );
  }
}

export default base(Pedidos);
