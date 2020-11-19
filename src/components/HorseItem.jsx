import React from 'react';
import {useParams} from 'react-router-dom';
import Data from '../data/horses.json';
import HorsesLibrary from './HorsesLibrary';

const HorseItem =  ()  => {

  const name = useParams();

  console.log(name{0});

  return(
    <div  className="card-container">
    <section className="head-container">
      <h1>Le cheval, des sensations bien.</h1>
      </section>
    <section className="data-container">
      <p>Name : {name.name} .</p>
      <p>Race :  .</p>
      <p>Age :  years old. </p>
      <p>Utility : .</p>
      <p>Price : .</p>
      
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