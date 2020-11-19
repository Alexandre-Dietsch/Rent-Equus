import React from 'react';
import './styles/app.css'
import ReservationContainer from './components/reservation/ReservationContainer';

export default function App() {
  return (
    <div className="App">
      <h1>Rent Equus</h1>
      <ReservationContainer />
    </div>
  );
}

