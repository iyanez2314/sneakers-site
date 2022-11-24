import React from 'react'
import { client, urlFor } from '../../lib/client'

const ProductDetail = ({product}) => {
  const {name, details, price } = product;
  const imageOfProduct = product.image[0].asset._ref;
  return (
    <div>
        <div className='product-detail-container'>
                <div className='image-container'>
                  <img src={urlFor(imageOfProduct)} className='product-detail-image'/>
                </div>
                <div className='detail-specs'>
                  <h2 id='details'>{name}</h2>
                  <p id='details'>${price}</p>
                  <p id='details'>{details}</p>
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
  return {
    props: {product}
  }
};

export default ProductDetail;