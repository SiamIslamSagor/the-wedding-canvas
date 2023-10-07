import { BsArrowUpCircle } from "react-icons/bs";
import Hero from "../Hero/Hero";
import Offer from "../Offer/Offer";
import Services from "../Services/Services ";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
  const { handleTop } = useContext(AuthContext);
  return (
    <div>
      <Hero></Hero>
      <Offer></Offer>
      <Services></Services>
      <div className="text-right container mx-auto">
        <button
          onClick={handleTop}
          className="btn bg-white text-custom-color my-20"
        >
          <BsArrowUpCircle></BsArrowUpCircle>
          BACK TO TOP
        </button>
      </div>
    </div>
  );
};

export default Home;
