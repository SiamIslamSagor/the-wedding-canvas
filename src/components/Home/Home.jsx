import Hero from "../Hero/Hero";
import Offer from "../Offer/Offer";
import Services from "../Services/Services ";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import LikeSection from "../LikeSection/LikeSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Wedding Canvas | Home</title>
      </Helmet>
      <Hero></Hero>
      <Offer></Offer>
      <Services></Services>
      <KeyFeatures></KeyFeatures>
      <LikeSection></LikeSection>
    </div>
  );
};

export default Home;
