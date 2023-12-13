import React, { useContext } from 'react'
import './cartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';


const CartItems = () => {

    const {all_product,cartItems,removeFromCart,getTotalmount } =useContext(ShopContext);
    const total = getTotalmount();
    return (
    <div className='cart-items'>
        <div className='cart-items-formate-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((item,i)=>{
            if(cartItems[item.id]>0){
                return (
                <div key={i}>
                <div className='cart-item-formate cart-items-formate-main'>
                    <img src={item.image} className='cart-icon-product-icon' about='alt'></img>
                    <p>{item.name}</p>
                    <p>{item.new_price}</p>
                    <button className='cart-items-quantity'> {cartItems[item.id]}</button>
                    <p>$ {item.new_price * cartItems[item.id]}</p>
                    <img src={remove_icon} className='remove-icon' onClick={()=> removeFromCart(item.id)}></img>
                </div>
                <hr/>
            </div>
            
            )
            } 
            return null;
        })}
        <div className='cart-items-down'>
            <div className='cart-item-total'>
                <h1>Cart total</h1>
                <div>
                    <div className='carts-items-total-items'>
                        <p>Subtotal</p>
                        <p>${total}</p>
                    </div>
                    <hr></hr>
                    <div className='carts-items-total-items'>
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='carts-items-total-items'>
                        <h3>Total</h3>
                        <h3>${total}</h3>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
                    <div className='cart-items-promocode'>
                        <p>If you have promo code,  Enter here</p>
                        <div className='promobox'>
                            <input type='text' placeholder='Promocode'></input>
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default CartItems
