import React from 'react'
import './offers.css';
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offer for you</h1>
        <p>Only on best seller products</p>
        <button>Check now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt='exclusive' />
      </div>
    </div>
  )
}

export default Offers
