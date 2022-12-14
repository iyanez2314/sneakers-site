import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import SneakersProductCards from "../Components/SneakersProductCards";
import { client } from "../lib/client";
import HeroSection from "../Components/HeroSection";

export default function Home({products, newlyAddedData}) {
  return (
    <>
   <div className="grid-container">
      <HeroSection newlyAddedData={newlyAddedData}/>
   </div> 

    <div className="product-title-container">
      <h4 className="product-container-title">Featured Products</h4>
    </div>
    
    <div className="product-container">
      {products?.map((product) => <SneakersProductCards key={product._id} products={product}/>)}
    </div>
   </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type =="sneakers"]';
  const products = await client.fetch(query);

  const newlyAddedQuery = '*[_type == "newlyAdded"]';
  const newlyAddedData = await client.fetch(newlyAddedQuery);

  return {
    props: {products, newlyAddedData}
  }
}
