import React from 'react';
import { Link } from "react-router-dom";

export default function Library() {
    return (
      <div>
        <h1>Library</h1>
        <ul>
        <li>
          <Link to="/horse-profile">
            Horse #1
          </Link>
        </li>
        <li>
          <Link to="/horse-profile">
            Horse #2
          </Link>
        </li>
      </ul>
      </div>
    );
  }