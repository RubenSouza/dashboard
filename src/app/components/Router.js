import React from "react";
import { Route, Routes } from "react-router-dom";
import Pedidos from "../Pages/Pedidos";
// import base from "../Pages/HOC/Base";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Pedidos />} />
    </Routes>
  );
}
