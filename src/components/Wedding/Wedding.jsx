// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { LuPackage } from "react-icons/lu";
import { Helmet } from "react-helmet-async";
//

const Wedding = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch("wedding.json")
      .then(res => res.json())
      .then(result => setSliderData(result));
  }, []);
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Wedding Canvas | Wedding</title>
      </Helmet>
      <h3
        data-aos="slide-down"
        data-aos-duration="700"
        className="text-center my-20 text-6xl text-custom-color font-stylishFont"
      >
        Weddings At The Wedding Canvas
      </h3>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {sliderData.map(obj => (
          <SwiperSlide key={obj.id}>
            <img
              className="h-[40vh] sm:h-[70vh] lg:h-[90vh] w-screen"
              src={obj.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center my-12 space-y-5">
        <h3 className="text-2xl text-custom-color">
          Your Dream Wedding Hotel in Dubai
        </h3>
        <p>
          Palazzo Versace Dubai stands as one of the most distinguished wedding
          hotels in Dubai. offering exceptional cultivated venues with the
          finest facilities. Your wedding day will be backdropped with
          unobstructed views of Dubai Creek in a setting that features a unique
          mix of Versace’s Italian heritage with the local Arabian culture.
          Whether you choose to have your wedding indoors or outdoors, we are
          able to cater to your exclusive requests with our elegantly designed
          spaces, flexible planning, and custom decorations that will allow you
          to have a completely personalized wedding day.
        </p>
        <p>
          Choosing from a traditional three-course meal or a sampling of various
          delicacies, you and your guests will have an unforgettable culinary
          experience. We will work to cater the menu to your specific needs and
          tastes, providing the availability of our chefs and catering team to
          ensure your dining experience is in line with all your dining
          preferences.
        </p>
        <p>
          Our team will assist you in all necessary arrangements to relieve you
          of the task of planning each intricate detail. From floral
          arrangements, a dedicated wedding planner, and customized menus to
          couples’ spa treatments, wedding cake designs, and photography –
          Palazzo Versace Dubai will take care to make sure your day runs
          smoothly.
        </p>
        <h4 className="text-2xl text-custom-color">
          We have pre-designed wedding packages that are categorized into
          different budgets.
        </h4>
      </div>
      <div className="flex items-center justify-center gap-2  my-20">
        <button className="py-2 font-medium text-custom-color px-4 border-2 border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2">
          EVENT PACKAGES <LuPackage></LuPackage>
        </button>
        <button className="py-2 font-medium text-custom-color px-4 border-2 border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2">
          CALL US <BsTelephoneInbound></BsTelephoneInbound>
        </button>
      </div>
    </div>
  );
};

export default Wedding;
