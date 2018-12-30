import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        OSBRAS
      </Link>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/bill-of-lading/import">
          Importar XLS
        </NavLink>
        <NavLink className="nav-item nav-link" to="/bill-of-lading/viewer">
          Consultar Bill of Ladings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
