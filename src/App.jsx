import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Rating } from "./components/Rating";
import OfferSlider from "./components/Offer";
import { SplitContent } from "./components/SplitContent";
import TemplateSlider from "./components/Template";
import { TwoColumnLayout } from "./components/TwoColumnLayout";
import { Testimonial } from "./components/Testimonial";
import { CallToAction } from "./components/CallToAction";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Rating/>
      <OfferSlider/>
      <SplitContent/>
      {/* <TemplateSlider/> */}
      <TwoColumnLayout/>
      <Testimonial/>
      <CallToAction/>
    </>
  );
}

export default App;
