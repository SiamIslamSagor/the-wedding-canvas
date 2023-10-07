import slide1 from "../../assets/hero 2.jpg";
import slide2 from "../../assets/hero 3.jpg";
import slide3 from "../../assets/hero 4.jpg";
import slide4 from "../../assets/hero 6.jpg";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//
const Slider = () => {
  return (
    <div className="container mx-auto">
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
        <SwiperSlide>
          <img
            className="h-[40vh] sm:h-[70vh] lg:h-[90vh] w-screen"
            src={slide1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[40vh] sm:h-[70vh] lg:h-[90vh] w-screen"
            src={slide2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[40vh] sm:h-[70vh] lg:h-[90vh] w-screen"
            src={slide3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[40vh] sm:h-[70vh] lg:h-[90vh] w-screen"
            src={slide4}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
