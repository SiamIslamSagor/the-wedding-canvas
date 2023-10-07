import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Services = () => {
  const { services } = useContext(AuthContext);
  console.log(services);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto">
      <p data-aos="slide-up" className="text-3xl font-bold text-center my-20">
        Our Services
      </p>
      <div className="grid px-4 gap-4 md:gap-6 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <div key={service.id} className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={service.image}
                alt="Shoes"
                className="rounded-xl h-[200px] w-[300px] lg:h-[300px] lg:w-[400px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-custom-color">{service.name}</h2>
              <p>{service.price}</p>
              <p>{service.short_description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
