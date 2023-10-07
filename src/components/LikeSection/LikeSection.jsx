import likeImg2 from "../../assets/like2.jpg";
import likeImg3 from "../../assets/like3.jpg";
import likeImg4 from "../../assets/r6.jpg";
import { AiOutlineLine } from "react-icons/ai";

const LikeSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-20 my-12 text-3xl text-custom-color text-center">
        <AiOutlineLine />
        <h4>YOU MAY ALSO LIKE</h4>
        <AiOutlineLine />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div data-aos="slide-up" className="flex flex-col items-center">
          <img
            src={likeImg4}
            alt="Shoes"
            className=" h-[200px] w-[300px] lg:h-[300px] lg:w-[400px]"
          />
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl  text-custom-color">
              Garden Retreat
            </h2>
            <p>
              Experience tranquility in our Garden Retreat. Nestled amidst lush
              greenery, this room features a private garden patio, a spa-like
              bathroom, and easy access to our serene outdoor spaces.
            </p>
            <button className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2">
              BOOK NOW
            </button>
          </div>
        </div>

        <div data-aos="slide-up" className="flex flex-col items-center">
          <img
            src={likeImg2}
            alt="Shoes"
            className=" h-[200px] w-[300px] lg:h-[300px] lg:w-[400px]"
          />
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl  text-custom-color">
              THREE BEDROOM PENTHOUSE
            </h2>
            <p>
              Enjoy the opulence of the Wedding Canvas three bedroom penthouse
              which offers ultimate luxury spread over 2 floors at 364 m2.
              Located on the 7th floor, the rooftop terrace and pool offer
              panoramic views of the Dubai City Skyline
            </p>
            <button className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2">
              BOOK NOW
            </button>
          </div>
        </div>

        <div data-aos="slide-up" className="flex flex-col items-center">
          <img
            src={likeImg3}
            alt="Shoes"
            className=" h-[200px] w-[300px] lg:h-[300px] lg:w-[400px]"
          />
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl  text-custom-color">
              LONG STAY SERVICED RESIDENCES
            </h2>
            <p>
              Ideal for longer stays in Dubai, our Versace-designed apartments
              can be leased for a period of 30 days or more. Choose between our
              Two Bedroom and Three Bedroom Residences and enjoy a host of
              benefits designed to make your long stay comfortable, with
              five-star hotel facilities and services at your fingertips.
            </p>
            <button className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeSection;
