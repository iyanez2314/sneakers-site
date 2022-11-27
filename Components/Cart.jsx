import React from 'react';
import { useStateContext } from '../context/StateManagement';
import { urlFor } from '../lib/client';

const Cart = () => {
  const {totalPrice, totalQuantities, setShowCart, cartItems} = useStateContext();
  // everything in this component will be rendered dynamicly 
  return (
    <div className='cart-wrapper'>
    <div className='cart-container'>
      <h3 className='heading'>Your cart</h3>
      <span className='cart-num-items'>{totalQuantities}</span>
      {cartItems < 1 && (
          <div>Your cart is empty</div>
        )}
      <div className='cart-product-container'>
        {
          cartItems >= 1 && (
            cartItems.map((items, i) => {
              <div className='cart-product' key={items._id}>
                <img src={urlFor(items?.image[0])} className='product-cart-image'/>
              </div>
            })
          )
        }
      </div>
    </div>
    </div>
  )
}

export default Cart