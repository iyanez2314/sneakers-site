import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import SneakersProductCards from "../Components/SneakersProductCards";
import { client } from "../lib/client";
import HeroSection from "../Components/HeroSection";

export default function Home({products, sneakersData}) {
  return (
    <>
    <NavBar />
    
   <div className="grid-container">
      <HeroSection sneakersData={sneakersData}/>
   </div> 
   </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type =="sneakers"]';
  const products = await client.fetch(query);

  const sneakersQuery = '*[_type == "sneakers"]';
  const sneakersData = await client.fetch(sneakersQuery);

  return {
    props: {products, sneakersData}
  }
}
