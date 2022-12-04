import React from 'react';
import { useStateContext } from '../context/StateManagement';
import {FcPrevious} from 'react-icons/fc'
import { urlFor } from '../lib/client';

const Cart = () => {
  const {totalPrice, totalQuantities, setShowCart, cartItems, onRemove} = useStateContext();
  return (
    <div className='cart-wrapper'>
    <div className='cart-container'>
      <FcPrevious onClick={() => setShowCart(false)} size={25}/>
      <h2>Your cart ({totalQuantities})</h2>
      {cartItems.length < 1 && (
        <div className='empty-cart'>
        <h3>Your shopping bag is empty</h3>
        </div>
      )}
      <div className='cart-product-container'>
        {cartItems.length >= 1 && cartItems.map((item, index) => (
          <div className='cart-product' key={item._id}>
            <img src={urlFor(item?.image[0])} className="cart-product-image"/>
            <div className='item-desc'>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
            </div>
            <button onClick={() => onRemove(item)}>
              click me
            </button>
          </div>
        ))}
      </div>
      <div className='total-price-container'>
        <h3>
          Total Price ${totalPrice}
        </h3>
      </div>
    </div>
    </div>
  )
}

export default Cart