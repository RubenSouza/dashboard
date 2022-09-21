import {
  BagSimple,
  Users,
  UserGear,
  Bookmarks,
  Tote,
  Gear,
} from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

const items = [
  { rota: "/", icone: <BagSimple size={22} />, titulo: "Pedidos" },
  { rota: "/clientes", icone: <Users size={22} />, titulo: "Clientes" },
  { rota: "/categorias", icone: <Bookmarks size={22} />, titulo: "Categorias" },
  { rota: "/produtos", icone: <Tote size={22} />, titulo: "Produtos" },
  {
    rota: "/configurações",
    icone: <Gear size={22} />,
    titulo: "Configurações",
  },
  { rota: "/perfil", icone: <UserGear size={22} />, titulo: "Pedido" },
];

function ListItems({ open, history }) {
  return (
    <div className="items-wrapper">
      {items.map((item, index) => {
        return (
          <Link to={item.rota} key={index}>
            <div className="menu-item flex horizontal">
              <div className="flex-1 flex flex-center">{item.icone}</div>
              {open && (
                <div className="flex-2 flex flex-start">
                  <span>{item.titulo}</span>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ListItems;
