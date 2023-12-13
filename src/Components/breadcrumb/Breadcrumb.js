import React from 'react'
import './breadcrumb.css';
import arrow_icon from '../Assets/arrow.png';


const Breadcrumb = (props) => {
    const {product} = props;

  return (
    <div className='breadcrumb'>
        Home 
        <img src={arrow_icon} alt='arrow'></img>
        Shop
        <img src={arrow_icon} alt='arrow'></img>
        {product.category}
        <img src={arrow_icon} alt='arrow'></img>
        {product.name}
    </div>
  )
}

export default Breadcrumb;
