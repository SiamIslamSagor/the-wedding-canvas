import { useContext, useEffect } from "react";
import room1 from "../../assets/r1.jpg";
import room2 from "../../assets/r2.jpg";
import room3 from "../../assets/r3.jpg";
import room5 from "../../assets/r5.jpg";
import room6 from "../../assets/r6.jpg";
import room7 from "../../assets/r7.jpg";
import room8 from "../../assets/r8.jpg";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
const Rooms = () => {
  const { handleBook } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container my-20 mx-auto">
      <Helmet>
        <title>Wedding Canvas | Rooms</title>
      </Helmet>
      <h3
        data-aos="slide-down"
        data-aos-duration="700"
        className="text-center my-20 text-6xl text-custom-color font-stylishFont"
      >
        We Provided Luxury Rooms & Suites for Wedding
      </h3>

      <div className="flex flex-col items-center lg:flex-row lg:justify-around px-4 gap-5 my-14 lg:my-24">
        <div data-aos="fade-right">
          <img
            className="w-full md:h-[450px] md:w-[780px] "
            src={room1}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col lg:w-[350px] space-y-6"
        >
          <h3 className="text-3xl text-custom-color font-medium max-lg:mx-auto">
            Royal Suite
          </h3>
          <p>
            Experience the epitome of luxury in our Royal Suite. This spacious
            retreat offers opulent furnishings, a private terrace with panoramic
            views, and personalized concierge service. Perfect for those seeking
            a regal escape.
          </p>
          <div className="max-lg:mx-auto">
            <button
              onClick={handleBook}
              className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around px-4 gap-5 my-14 lg:my-24">
        <div data-aos="fade-right">
          <img
            className="w-full md:h-[450px] md:w-[780px] "
            src={room2}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col lg:w-[350px] space-y-6"
        >
          <h3 className="text-3xl text-custom-color font-medium max-lg:mx-auto">
            Presidential Hideaway
          </h3>
          <p>
            Indulge in the height of sophistication with our Presidential
            Hideaway. This exclusive suite boasts a private jacuzzi, a
            fully-equipped bar, and breathtaking vistas. Ideal for a romantic
            getaway or special occasions.
          </p>
          <div className="max-lg:mx-auto">
            <button
              onClick={handleBook}
              className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-around px-4 gap-5 my-14 lg:my-24">
        <div data-aos="fade-right">
          <img
            className="w-full md:h-[450px] md:w-[780px] "
            src={room3}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col lg:w-[350px] space-y-6"
        >
          <h3 className="text-3xl text-custom-color font-medium max-lg:mx-auto">
            Executive Oasis
          </h3>
          <p>
            Unwind in style in our Executive Oasis. This sleek and modern room
            features a cozy fireplace, a deluxe king-size bed, and a private
            balcony. A sanctuary for relaxation and rejuvenation.
          </p>
          <div className="max-lg:mx-auto">
            <button
              onClick={handleBook}
              className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around px-4 gap-5 my-14 lg:my-24">
        <div data-aos="fade-right">
          <img
            className="w-full md:h-[450px] md:w-[780px] "
            src={room5}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col lg:w-[350px] space-y-6"
        >
          <h3 className="text-3xl text-custom-color font-medium max-lg:mx-auto">
            Luxury Loft
          </h3>
          <p>
            Elevate your stay in our Luxury Loft. With its contemporary design,
            high ceilings, and chic decor, this room offers a trendy urban
            escape. Ideal for couples or solo travelers.
          </p>
          <div className="max-lg:mx-auto">
            <button
              onClick={handleBook}
              className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-around px-4 gap-5 my-14 lg:my-24">
        <div data-aos="fade-right">
          <img
            className="w-full md:h-[450px] md:w-[780px] "
            src={room6}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col lg:w-[350px] space-y-6"
        >
          <h3 className="text-3xl text-custom-color font-medium max-lg:mx-auto">
            Garden Retreat
          </h3>
          <p>
            Experience tranquility in our Garden Retreat. Nestled amidst lush
            greenery, this room features a private garden patio, a spa-like
            bathroom, and easy access to our serene outdoor spaces.
          </p>
          <div className="max-lg:mx-auto">
            <button
              onClick={handleBook}
              className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around px-4 gap-5 my-14 lg:my-24">
        <div data-aos="fade-right">
          <img
            className="w-full md:h-[450px] md:w-[780px] "
            src={room7}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col lg:w-[350px] space-y-6"
        >
          <h3 className="text-3xl text-custom-color font-medium max-lg:mx-auto">
            Oceanfront Haven
          </h3>
          <p>
            Wake up to the soothing sounds of the ocean in our Oceanfront Haven.
            Enjoy direct beach access, a private terrace, and breathtaking sea
            views. Perfect for beach lovers.
          </p>
          <div className="max-lg:mx-auto">
            <button
              onClick={handleBook}
              className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-around px-4 gap-5 my-14 lg:my-24">
        <div data-aos="fade-right">
          <img
            className="w-full md:h-[450px] md:w-[780px] "
            src={room8}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col lg:w-[350px] space-y-6"
        >
          <h3 className="text-3xl text-custom-color font-medium max-lg:mx-auto">
            Honeymoon Hideout
          </h3>
          <p>
            Begin your journey as a married couple in our Honeymoon Hideout.
            This intimate suite offers a heart-shaped jacuzzi, a romantic
            fireplace, and all the amenities for an unforgettable honeymoon.
          </p>
          <div className="max-lg:mx-auto">
            <button
              onClick={handleBook}
              className="py-2 text-custom-color px-6 border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Rooms;
