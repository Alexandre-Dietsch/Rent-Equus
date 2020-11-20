import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
import logo from '../../images/logorent.png'

export default function Navigation() {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="logo" />
      <ul className="navbar-flex">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/horse-library">
            Horses
          </Link>
        </li>
      </ul>
    </div>
  );
}