import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import SneakersProductCards from "../Components/SneakersProductCards";
import { client } from "../lib/client";
import HeroSection from "../Components/HeroSection";

export default function Home({products, newlyAddedData}) {
  console.log(newlyAddedData);
  return (
    <>
    <NavBar />
    
   <div className="grid-container">
      <HeroSection newlyAddedData={newlyAddedData}/>
   </div> 

    <div className="product-container">
      
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
