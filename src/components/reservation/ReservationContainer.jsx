import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Reservation from './Reservation';
import ConfirmationDisplay from './ConfirmationDisplay';

export default function ReservationContainer() {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false)
  const { index } = useParams();

  const popupHandler = () => {
    const url = 'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/audio/SxoktnUHBjzy8oizv/trumpet-fanfare1_WM.mp3';
    const audio = new Audio(url);
    setOpen(!open)
    setPlay(!play)
    audio.play()
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