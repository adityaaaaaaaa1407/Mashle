// For navigation within the page

// import Hero from "../../components/Hero/Hero";
import Category from "@/components/Hero/Category";
import ImageSlider from "../../components/Hero/ImageSlider";

import HeroCards from "@/components/Hero/HeroCards";

const Home = () => {
  return (
    <div className="home-page min-h-screen">
      {/* slider Section */}
      <section id="imageSlider">


        
        <ImageSlider />
      </section>

      {/* Category Section */}
      <section id="category">
        <p className="md:text-3xl text-xl flex flex-col items-center sm:mb-6 mb-4 sm:mt-6 mt-4">
          Categories
        </p>
        <Category />
      </section>

      <section id="heroCards">
        <p className="md:text-3xl text-xl flex flex-col items-center sm:mb-6 mb-4 sm:mt-6 mt-4">
          Featured
        </p>
        <HeroCards />
      </section>
    </div>
  );
};

export default Home;
