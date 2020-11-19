import React from 'react';
import '../../styles/confirmation.css'

export default function ConfirmationDisplay({ popupHandler }) {
  return (
    <div className="popup">
      <div className="pop-up-container">
        <div className="pop-up-content">
          <button className="button-close" type="button" onClick={popupHandler}>
            <i className="fas fa-times" />
          </button>
          <h1>Thank you so much for yor reservation</h1>
          <p>order n°5165</p>
        </div>
      </div>
    </div>
  )
}