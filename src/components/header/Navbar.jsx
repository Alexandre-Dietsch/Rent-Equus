import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';

export default function Navigation() {
  return (
    <div className="header-container">
      <ul>
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