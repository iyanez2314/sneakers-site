import React from 'react'

const Cart = () => {
  // everything in this component will be rendered dynamicly 
  return (
    <div className='cart-wrapper'>
    <div className='cart-container'>
      <h3 className='heading'>Your cart</h3>
      <span className='cart-num-items'>total items</span>
      <div className='product-container'>
        {/*  Here we will put products that have been added to cart but this will be dynamiclly rendered */}
      </div>
    </div>
    </div>
  )
}

export default Cart