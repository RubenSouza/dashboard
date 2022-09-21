import React from "react";
import { Link } from "react-router-dom";
// import Login from "../Pages/Login";

class BarraTopo extends React.Component {
  render() {
    return (
      <div className="flex horizontal between f-width">
        <div className="flex-1 flex-start T-items ">
          <a href="#" className="link">
            Ver loja
          </a>
        </div>
        <div className="flex-1 flex-end T-items">
          <Link to="login">Sair</Link>
        </div>
      </div>
    );
  }
}

export default BarraTopo;
