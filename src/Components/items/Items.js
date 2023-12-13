import React from 'react';
import './items.css'
import { Link } from 'react-router-dom';

const Items = (props) => {

  return (
    <div className='items'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })} src={props.image} alt='imageone' />
      </Link>
      <p>{props.name}</p>
      <div className='item-price'>
        <div className='item-price-new'>
          $ {props.new_price}
        </div>
        <div className='item-price-old'>
          $ {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items;
