import React from 'react';
import './styles/app.css';
import HorseItem from './HorseItem';
import bouton_dor from './data/horses.json';


export default function App() {
  return (
    <div className="App">
      <h1>Rent Equus</h1>
      <HorseItem />
    </div>
  );
}

