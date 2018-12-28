import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        OSBRAS
      </Link>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/import-xls">
          Importar XLS
        </NavLink>
        <NavLink className="nav-item nav-link" to="/consult-moves">
          Consultar movimentos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
