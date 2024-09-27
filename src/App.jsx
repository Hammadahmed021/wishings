import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Rating } from "./components/Rating";
import OfferSlider from "./components/Offer";
import { SplitContent } from "./components/SplitContent";
import { Template } from "./components/Template";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Rating/>
      <OfferSlider/>
      <SplitContent/>
      <Template/>
    </>
  );
}

export default App;
