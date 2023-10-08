import { useEffect, useState } from "react";

const Gallery = () => {
  const [allImg, setAllImg] = useState([]);

  useEffect(() => {
    fetch("gallery.json")
      .then(res => res.json())
      .then(result => setAllImg(result));
  }, []);
  return (
    <div className="container mx-auto">
      <h3
        data-aos="slide-down"
        className="text-center my-20 text-6xl text-custom-color font-stylishFont"
      >
        OUR GALLERY
      </h3>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allImg.map(img => (
          <div data-aos="flip-left" data-aos-duration="800" key={img.id}>
            <img
              src={img.image}
              alt="Shoes"
              className="w-full cursor-pointer h-[290px]"
            />
            <p className="uppercase text-center my-4">{img?.DESCRIPTION}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
