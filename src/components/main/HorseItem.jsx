import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../data/horses.json';
import '../../styles/horseItem.css';

export default function HorseItem() {
  const { index } = useParams();

  return (
    <div className="card-container">
      <section className="img-container">
        <img className="horse-img" src={data[index].image} alt={data[index].name} />
      </section>
      <section className="info-container">
        <section className="data-container">
          <p>Name : {data[index].name}.</p>
          <p>Race :  {data[index].race}.</p>
          <p>Age :  {data[index].age} years old. </p>
          <p>Utility : {data[index].utility}.</p>
        </section>
      <section className="price-container">
        <p className="troudeballe">Price : {data[index].price} ecu.</p>
        <Link to={`/reservation/${index}`}>
          <button className="button" type='submit'>Rent {data[index].name}</button>
        </Link>
      </section>
      </section>
    </div>
  )
}