 // For navigation within the page

// import Hero from "../../components/Hero/Hero";
import ImageSlider from "../../components/Hero/ImageSlider";

import HeroCards from "@/components/Hero/HeroCards";
// import Category from "@/components/Category/Category";

const Home = () => {
  return (
    <div className="home-page min-h-screen ">
      {/* slider Section */}
      <section id="imageSlider">
        <ImageSlider />
      </section>

      {/* Category Section */}
      <section id="category">{/* <Category /> */}</section>

      <section id="heroCards">
        <HeroCards />
      </section>

      <nav className="home-navigation">
        <ul>
          <li></li>

          {/* Add other navigation links if needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
