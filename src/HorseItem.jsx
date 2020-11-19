import React from 'react';
import './HorseItem.css';

const HorseItem = ({horseInfo}) => {
  const {bouton_dor: horse } = horseInfo

  return(
    <div  className="card-container">
    <section className="head-container">
      <h1>{horse.name}</h1>
      
    </section>
    <section className="data-container">
      <p>Name : {horse.name} .</p>
      <p>Race : {horse.race} .</p>
      <p>Age : {horse.age} years old. </p>
      <p>Utility : {horse.utility}</p>
      <p>Price : {horse.price}</p>
      
    </section>
    </div>
  )
}

export default HorseItem;

/* <div className="button-container">
        <Link to={`//${}`}>
          <p>Gallerie</p>
        </Link>
      </div> */