import React from 'react';
import '../../styles/home.css';
import { Link } from "react-router-dom";
import imghome from "../../images/imghome.svg"

export default function Home() {
  return (
    <div className='home-container'>
      <h1>Need a horse? Rent a horse!</h1>
      <Link to="/horse-library">
        <p>Click here to see available horses!</p>
      </Link>
      <div>
        <img className="img" src={imghome} alt="home" />
      </div>
    </div>
  );
}