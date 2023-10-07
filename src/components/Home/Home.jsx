import Hero from "../Hero/Hero";
import Offer from "../Offer/Offer";
import Services from "../Services/Services ";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Offer></Offer>
      <Services></Services>
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Home;
