import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/reservation.css'
import data from '../../data/horses.json';

export default function Reservation({ popupHandler, index }) {
  return (
    <div className="cart-container">
      <div className='reservation-container'>
        <div className="cart-product">
          <div className="product-image">
            <img className='product-image' src={data[index].image}
              alt='horse selected' />
          </div>
          <div className="cart-info">
            <div className="product-description">
              <h2>{data[index].name}</h2>
              <p>june 10th to june 12th</p>
            </div>
            <div className="product-price">
              <span>{data[index].price} ecu</span>
            </div>
          </div>
        </div>
        <div className="cart-summary">
          <div className="cart-summary-description">
            <p>Total : </p>
          </div>
          <div className="cart-summary-price">
            <span>{data[index].price} ecu</span>
          </div>
        </div>
        <div className="cart-contact">
          <span>
            Maintenance and food are at your expense.
        </span>
        </div>
        <div className="cart-button">
          <button className='rent-button' type='submit' onClick={popupHandler}>Rent</button>
        </div>
      </div>
    </div>
  )
}

Reservation.propTypes = {
  popupHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}