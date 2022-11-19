import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import SneakersProductCards from "../Components/SneakersProductCards";
import  HeroSection  from "../Components/HeroSection";




export default function Home() {
  return (
    <>
    <NavBar />
    
   <div className="grid-container">
      <SneakersProductCards/>
      <div className="div2">1</div>
   </div> 
   <Footer />
   </>
  )
}
