import React from 'react';
import '../../styles/reservation.css'

export default function Reservation() {
  return (
    <div className="cart-container">
      <div className='reservation-container'>
        <div className="cart-product">
          <div className="product-image">
            <img className='product-image' src='https://placedog.net/500'
              alt='horse selected' />
          </div>
          <div className="cart-info">
            <div className="product-description">
              <h2>Tonnerre</h2>
              <p>10june at 12june</p>
            </div>
            <div className="product-price">
              <span>10ecu/hour</span>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <div className="cart-summary-description">
            <p>TOTAL</p>
          </div>
          <div className="cart-summary-price">
            <span>10 ecu</span>
          </div>
        </div>

        <div className="cart-contract">
          <span>
            Maintenance and food are at your expense.
        </span>
        </div>

        <div className="cart-button">
          <button className='rent-button' type='submit'>Rent</button>
        </div>
      </div>
    </div>
  )
}