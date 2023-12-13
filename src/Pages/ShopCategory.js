import React, { useContext } from 'react'
import './CSS/shopCategory.css';
import {ShopContext} from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/items/Items';
const ShopCategory = (props) => {

  const {all_product} =  useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img src={props.banner} className='shopCategory-banner' alt='banner'/>
      <div className='shopCategory-indexSort'>
        <p><span>Showing 1-12</span></p>
        <div className='shopCategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
        <div className='shopCategory-products'>
          {all_product.map((item,i)=>{
            if(props.category === item.category){
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
            } else {
              return null;
            }
          })}
        </div>
        <div className='shopCategory-loadMore'>
          Explore more...
        </div>
    </div> 
  )
}

export default ShopCategory;
