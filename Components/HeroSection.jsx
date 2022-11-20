import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroSection = ({newlyAddedData}) => {

    console.log(newlyAddedData);
  return (
    <div className='hero-section-container'>
        <div className='left-section'>
            <div className='latest-drop-container'>
                <h1>Latest Drop</h1>
            </div>
            <div className='item-name'>
                <p>{newlyAddedData[0].product}</p>
            </div>
             <div className='desc'>
                <h5>
                    ${newlyAddedData[0].price}
                </h5>
            </div>
            <div className='btn-container'>
                <Link href="/">
                    <button type='button'>{newlyAddedData[0].buttonText}</button>
                </Link>
            </div>
        </div>
            <div className='sneakers-image-container'>   
                <img src={urlFor(newlyAddedData[0].image.asset._ref)} className="hero-banner-image" alt="Picture of shoes"/>
            </div> 
        </div>
  )
}

export default HeroSection