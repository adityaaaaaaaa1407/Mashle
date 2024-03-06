import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/all_images/watch_2.webp";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Play your beat",
    title: "on repeat",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Looks so good",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Stay Connected ",
    title: "Every Call Matters",
    title2: "watches",
  },
];
const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slideToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    // autoplay: true,
    pauseOnFocus: true,
  };

  return (
    <div className="container pt-4 bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="overflow-hidden min-h-[550px] sm:min-h-[650px] rounded-3xl  hero-bg-color  flex justify-center items-center ">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left  order-2 sm:order-1 relative z-10">
                    <h1 className="text-3xl sm:text-6xl lg:text-5xl font-medium text-wrap sm:text-nowrap ">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1
                      className="text-4xl uppercase text-white dark:text-white/5 pt-5
                    sm:text-[60px] md:text-[80px] xl-text-[120px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div className="mt-5 sm:text-5xl text-xl pt-6 rounded-xl ">
                      <Button
                        text="SHOP NOW"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>

                  {/* Image section */}

                  <div className="order-1 sm:order-2 ">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[450px] h-[300px]  sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
