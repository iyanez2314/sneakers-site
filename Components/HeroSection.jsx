import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroSection = ({sneakersData}) => {
console.log(sneakersData)
    
  return (
    <div className='hero-section-container'>
        <div>
        <div className='latest-drop-container'>
            <h1>Latest Drop</h1>
        </div>
        <div className='item-name'>
            <p>{sneakersData[0].name}</p>
        </div>
        <div className='btn-container'>
                <Link href="/">
                    <button type='button'>Buy now</button>
                </Link>
            </div>
            <div className='desc'>
                    <h5>
                        ${sneakersData[0].price}
                    </h5>
                </div>
            <div className='sneakers-container'>   
                <img src={urlFor(sneakersData[0].image[0].asset._ref)} className="hero-banner-image" alt="Picture of shoes"/>
            </div> 
            <div>
               
            </div>
        </div>
    </div>
  )
}

export default HeroSection