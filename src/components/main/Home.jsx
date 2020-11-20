import React from 'react';
import '../../styles/home.css';
import { Link } from "react-router-dom";
import imghome from "../../images/imghome.png"

export default function Home() {
  return (
    <div className='home-container'>
      <h1>In need of a horse? Rent one !</h1>
      <Link to="/horse-library">
        <p>Click here to see available horses!</p>
      </Link>
      <div className="img-home">
        <img  src={imghome} alt="home" />
      </div>
    </div>
  );
}