import React from 'react'
import SneakersProductCards from '../../Components/SneakersProductCards';
import { client, urlFor } from '../../lib/client'

const ProductDetail = ({product, products}) => {
  const {name, details, price } = product;
  const imageOfProduct = product.image[0].asset._ref;
  return (
    <div>
    <div className='main-product-wrapper'>
        <div className='product-detail-container'>
                <div className='image-container'>
                  <img src={urlFor(imageOfProduct)} className='product-detail-image'/>
                </div>
                <div className='detail-specs'>
                  <h2 id='details'>{name}</h2>
                  <p id='details'>${price}</p>
                  <div className='details-container'>
                    <p id='details'>{details}</p>
                  </div>
                  <div className='button-container'>
                    <button type="button" className='buy-now'>Buy Now!</button>
                  </div>
                </div>
        </div>
    </div>

    <div className='featured-title-container'>
          <h3>Products You May Also Like</h3>
    </div>
    <div className='featured-products'>
        
        <div className='products-featured'>
          {
            products?.map((items) => <SneakersProductCards  key={items._id} products={items} />)
          }
        </div>
    </div>
  </div>
  )
}


export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
`

const products = await client.fetch(query);

const paths = products.map((product) => ({
  params: {
    slug: product.slug.current
  }
}))

return {
  paths,
  fallback: 'blocking'
}
}

export const getStaticProps = async ({params: {slug}}) => {
  const query = `*[_type == "sneakers" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  const queryProducts = '*[_type =="sneakers"]';
  const products = await client.fetch(queryProducts);

  return {
    props: { product , products }
  }
};

export default ProductDetail;