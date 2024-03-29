import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="https://github.com/Vargazz" target="_blank" rel="noreferrer">
          <img className="logo" src={ logo } alt="logo..." />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={ faBars } style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home <span sNclassName="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre Mim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projetos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#home">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
