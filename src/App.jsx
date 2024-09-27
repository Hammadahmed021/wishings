import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Rating } from "./components/Rating";
import OfferSlider from "./components/Offer";
import { SplitContent } from "./components/SplitContent";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Rating/>
      <OfferSlider/>
      <SplitContent/>
    </>
  );
}

export default App;
