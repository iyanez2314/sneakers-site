import React, {useContext} from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart';
import { useStateContext } from '../context/StateManagement';


const NavBar = () => {
  const {totalQuantities, showCart, setShowCart} = useStateContext();

  return (
    <div className='navbar-container'>
      <div className='logo'>
        <Link href='/'>
          <p className='shoe-store-logo-text'>Shoe Store</p>
        </Link>
      </div>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default NavBar;