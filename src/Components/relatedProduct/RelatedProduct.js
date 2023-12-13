import React from 'react';
import './relatedProduct.css';
import data_product from '../Assets/data';
import Items from '../items/Items';

const RelatedProduct = () => {
  return (
    <div className='relatedProducts'>
        <h1>Related Product</h1>
        <hr/>
        <div className='related-products-items'>
            {data_product.map((item,i)=>{
                return (
                <Items 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price}
                old_price={item.old_price}
            />
                )
            })}
        </div>
    </div>
  )
}

export default RelatedProduct
