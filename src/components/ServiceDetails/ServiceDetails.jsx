import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getIdInLS } from "../../localStorage";
import { AiOutlineLine } from "react-icons/ai";

const ServiceDetails = () => {
  const { services } = useContext(AuthContext);
  const clickedID = getIdInLS();
  const [clickedService, setClickedService] = useState({});
  // const clickedService = services.find(service => service.id === clickedID);
  console.log(clickedService);
  const {
    image,
    long_description,
    name,
    price,
    service_details,
    short_description,
  } = clickedService;

  useEffect(() => {
    const clickedService = services.find(service => service.id === clickedID);
    setClickedService(clickedService);
  }, [services, clickedID]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around px-4 gap-5 my-14 lg:my-24">
        <div data-aos="slide-down">
          <img
            className="w-full md:h-[450px] md:w-[780px] "
            src={image}
            alt=""
          />
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col max-lg:text-center lg:w-[350px] space-y-6"
        >
          <h3 className="text-3xl text-custom-color font-medium max-lg:mx-auto">
            {name}
          </h3>
          <p>{short_description}</p>
          <p>{service_details}</p>
          <p>Price: {price}</p>
          <div className="max-lg:mx-auto">
            <button
              data-aos="slide-up"
              className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20 my-12 text-3xl text-custom-color text-center">
        <AiOutlineLine />
        <h4>SERVICE DESCRIPTION</h4>
        <AiOutlineLine />
      </div>
      <p>{long_description}</p>
    </div>
  );
};

export default ServiceDetails;
