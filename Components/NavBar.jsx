import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'


const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <Link href='/'>
          <p className='shoe-store-logo-text'>Shoe Store</p>
        </Link>
      </div>
      <button type='button' className='cart-icon' onClick={() => console.log("Cart CLicked")}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default NavBar;