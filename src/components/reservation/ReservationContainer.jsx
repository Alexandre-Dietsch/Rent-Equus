import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Reservation from './Reservation';
import ConfirmationDisplay from './ConfirmationDisplay';

export default function ReservationContainer() {
  const [open, setOpen] = useState(false);
  const { index } = useParams();

  const popupHandler = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Reservation popupHandler={popupHandler} index={parseInt(index)} />
      {
        open && (
          <ConfirmationDisplay popupHandler={popupHandler} />
        )
      }
    </div>
  )
}