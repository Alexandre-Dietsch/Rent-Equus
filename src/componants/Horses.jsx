import React from 'react';
import data from '../data/horses.json'


export default function Horses() {
  return(
    <div>
    {
      data.map(horse => (
        <div>
          <h1>{horse.name}</h1>
      <button type='submit' name={horse.name} onClick={(event) => console.log(event.target.name)}>horse {horse.name}</button>
        </div>
      ))
    }
    </div>
  );
}