import React from 'react';
import { urlFor } from '../lib/client';

const SneakersProductCards = ({sneakersData}) => {
console.log('hi', sneakersData[0].image[0].asset._ref);
  return (
    <div className='sneakers-product-card-container'>
    <img  src={urlFor(sneakersData[0].image[0].asset._ref)} className='sneakers-product-image' alt="image of shoes"/>
    </div>
  )
}

export default SneakersProductCards