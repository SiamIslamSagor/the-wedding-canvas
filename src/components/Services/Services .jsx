import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto">
      <p data-aos="slide-up" className="text-3xl font-bold text-center my-20">
        Our Services{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
    </div>
  );
};

export default Services;
