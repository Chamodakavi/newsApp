import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          NewsMag
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/business">
            business
            </Link>
            <Link className="nav-link" to="/entertainment">
            entertainment
            </Link>
            <Link className="nav-link" to="#">
            general
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
