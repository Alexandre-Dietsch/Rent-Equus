import React, { useState } from 'react';
import Reservation from './Reservation';
import ConfirmationDisplay from './ConfirmationDisplay';

export default function ReservationContainer() {
  const [open, setOpen] = useState(false);

  const popupHandler = () => {
    setOpen(!open)
  }



  return (
    <div>
      <Reservation popupHandler={popupHandler} />
      {
        open && (
          <ConfirmationDisplay popupHandler={popupHandler} />
        )
      }
    </div>
  )
}