import React, { useContext } from 'react'
import './productDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext)
  
  return (
    <div className='product-display'>
      <div className='product-display-left'>
        <div className='product-display-img-list'>
          <img src={product.image} alt='product'></img>
          <img src={product.image} alt='product'></img>
          <img src={product.image} alt='product'></img>
          <img src={product.image} alt='product'></img>
        </div>
        <div className='product-display-img'>
          <img className="product-display-main-img" src={product.image} alt='product'></img>
        </div>
      </div>
      <div className='product-display-right'>
        <h1>{product.name}</h1>
        <div className='product-display-right-stars'>
          <img src={star_icon} alt='product'></img>
          <img src={star_icon} alt='product'></img>
          <img src={star_icon} alt='product'></img>
          <img src={star_icon} alt='product'></img>
          <img src={star_dull_icon} alt='product'></img>
          <p>(122)</p>
        </div>
        <div className='product-display-right-prices'>
          <div className='product-display-right-price-old'>$ {product.old_price}</div>
          <div className='product-display-right-price-new'>$ {product.new_price}</div>
        </div>
        <div className='product-display-right-description'>
          This product may vary from image.
        </div>
        <div className='product-display-right-size'>
          <h1>Select size</h1>
          <div className='product-display-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>Xl</div>
            <div>XXL</div>
          </div>
        </div>
          <button onClick={()=>addToCart(product.id)}>Add to cart</button>
          <p className='product-display-right-category'>
            <span>category: </span>
            Mens. T-shirt, Polo t-shirt
          </p>
          <p className='product-display-right-category'>
            <span>Tags: </span>
            Modern , Latest
          </p>
      </div>
    </div>
  )
}

export default ProductDisplay
