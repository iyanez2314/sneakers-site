import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'


const NavBar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          <p className='shoe-store-logo-text'>Shoe Store</p>
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={() => console.log("Cart CLicked")}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default NavBar