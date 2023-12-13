import React from 'react'
import './hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
            <h2>New arrivals only</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={hand_icon} alt='handicon'></img>
                </div>
                <p>Collection</p>
                <p>For everyone</p>
            </div>
            <div className='hero-latest-button'>
                <div>latest-collection</div>
                    <img src={arrow_icon} alt='arrow' />
            </div>
      </div>
      <div className='hero-right'>
       
        <img src={hero_image} alt='hero_image'></img>
        
      </div>
    </div>
  )
}

export default Hero
