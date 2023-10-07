// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
//
const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch("slide.json")
      .then(res => res.json())
      .then(result => setSliderData(result));
  }, []);
  //   console.log(sliderData);
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
    </div>
  );
};

export default Slider;
