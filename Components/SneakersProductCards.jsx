import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';

const SneakersProductCards = ({products}) => {
  return (
    <Link href="/">
      <div className='product-card'>
          <p>
            {products.name}
          </p>
          <p>
            ${products.price}
          </p>
          <img src={urlFor(products.image[0].asset._ref)}
          width={350}
          height={350}
          className='product-image'/>
        
      </div>
    </Link>
  )
}

export default SneakersProductCards