import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import SneakersProductCards from "../Components/SneakersProductCards";


export default function Home() {
  return (
    <>
    <NavBar />
   <div className="section">
   
      <div class="content">
        <SneakersProductCards/>
      </div>
   </div> 
   <Footer />
   </>
  )
}
