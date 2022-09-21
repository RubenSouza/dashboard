import React, { useState } from "react";
import ListItems from "./ListItems";
import { List } from "phosphor-react";

function Menu({ history }) {
  const [open, setOpen] = useState(true);
  function toogleOPen() {
    setOpen(!open);
  }
  return (
    <div className="Menu">
      <div className="item-top" onClick={() => toogleOPen()}>
        <List size={25} />
      </div>
      <hr />
      <ListItems open={open} history={history} />
    </div>
  );
}

export default Menu;
