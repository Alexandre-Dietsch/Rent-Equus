import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../data/horses.json';
import '../../styles/horseItem.css';

export default function HorseItem() {
  const { index } = useParams();

  return (
    <div className="card-container">
      <section className="head-container">
        <h1>Le cheval, des sensations bien.</h1>
      </section>
      <section className="data-container">
        <img src={data[index].image} alt={data[index].name} />
        <p>Name : {data[index].name}</p>
        <p>Race :  {data[index].race}.</p>
        <p>Age :  {data[index].age} years old. </p>
        <p>Utility : {data[index].utility}.</p>
        <p>Price : {data[index].price} ecu.</p>
      </section>
      <div className='button'>
        <Link to={`/reservation/${index}`}>
          <button type='submit'>Rent {data[index].name}</button>
        </Link>
      </div>
    </div>
  )
}