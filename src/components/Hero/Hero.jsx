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
        data-aos-duration="700"
        className="text-center my-20 text-6xl text-custom-color font-stylishFont"
      >
        Make Your Wedding <br />
        Memorable
        <p className="text-2xl text-custom-color">
          With <br />
          <span className="border-y border-[#bc9b6a] font-logoFont">
            The Wedding Canvas
          </span>
        </p>
      </h3>
      <div data-aos="slide-down" data-aos-duration="1000">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Hero;
