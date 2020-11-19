import React from 'react';
import './styles/app.css';
import HorseItem from './componants/HorseItem';
import bouton_dor from './data/horses.json';
import Horses from './componants/Horses';


export default function App() {
  return (
    <div className="App">
      <h1>Rent Equus</h1>
      <HorseItem />
      <Horses />
    </div>
  );
}

