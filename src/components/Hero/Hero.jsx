import heroImg from "../../assets/hero_img.jpeg";

const Hero = () => {
  const bannerBgStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={bannerBgStyle}>
      <div className="h-[85vh]  text-white">
        <div className="h-full flex flex-col justify-start ">
          <div className="ml-[5vw] lg:ml-[20vw] max-w-[345px] xl:max-w-[455px] space-y-5">
            <p className="mt-36 md:mt-48">Welcome to Yogabest</p>
            <p className="text-4xl lg:text-6xl font-normal text-white">
              Yoga Enhances Your Life
            </p>
            <p className="text-[17px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
