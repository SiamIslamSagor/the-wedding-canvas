import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";

const Services = () => {
  const { services } = useContext(AuthContext);
  console.log(services);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto">
      <p data-aos="slide-up" className="text-5xl font-bold text-center my-20">
        Our Services
      </p>
      <div className="grid px-4 gap-4 md:gap-6 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <div
            data-aos="slide-up"
            data-aos-duration="600"
            data-aos-anchor-placement="top-center	"
            key={service.id}
            className="card  bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={service.image}
                alt="Shoes"
                className="rounded-xl h-[200px] w-[300px] lg:h-[300px] lg:w-[400px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-stylishFont text-custom-color">
                {service.name}
              </h2>
              <p>{service.price}</p>
              <p>{service.short_description}</p>
              <div className="card-actions">
                <button className="py-2 font-medium text-custom-color px-4 border-2 border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2">
                  View Details{" "}
                  <BsFillArrowThroughHeartFill></BsFillArrowThroughHeartFill>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
