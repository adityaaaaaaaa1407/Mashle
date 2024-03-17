import Slider from "react-slick/lib/slider";

import { imagesForSlider } from "@/root/DB/data";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  /*
  screens: {
    'sm': '576px',
    // => @media (min-width: 576px) { ... }
  
    'md': '768px',
    // => @media (min-width: 768px) { ... }
  
    'lg': '992px',
    // => @media (min-width: 992px) { ... }
  
    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
  },
  */
  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Enable infinite loop
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll by 1 slide
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (optional)
    responsive: [
      {
        breakpoint: 2000, // for even bigger screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1500, // for even bigger screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // for even bigger screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // Responsive settings for larger screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Responsive settings for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Responsive settings for even smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {imagesForSlider.map((image) => (
          <div key={image.id} className="slider-item">
            <Link to="/products">
              <img id={image.id} src={image.src} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
