import React from 'react'
import './newsletter.css'
const Newsletter = () => {
  return (
    <div className='news-letter'>
      <h1>Get exclusive offers on your email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type='email' placeholder='enter your email'></input>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter;
