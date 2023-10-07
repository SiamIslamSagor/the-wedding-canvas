//
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "../Slider/Slider";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <h3
        data-aos="slide-down"
        className="text-center my-20 text-6xl text-custom-color font-stylishFont"
      >
        Make Your Wedding <br />
        Memorable
      </h3>
      <Slider></Slider>
    </div>
  );
};

export default Hero;
