import { BsArrowUpCircle } from "react-icons/bs";
import Hero from "../Hero/Hero";
import Offer from "../Offer/Offer";
import Services from "../Services/Services ";
import ScrollTop from "../ScrollTop/ScrollTop";
import KeyFeatures from "../KeyFeatures/KeyFeatures";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Offer></Offer>
      <Services></Services>
      <KeyFeatures></KeyFeatures>
      <div className="text-right container mx-auto">
        <ScrollTop></ScrollTop>
      </div>
    </div>
  );
};

export default Home;
