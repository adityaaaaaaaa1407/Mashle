import { Link } from "react-router-dom";
import img1 from "../../assets/blogs/blog1.webp";
import img2 from "../../assets/blogs/blog2.webp";
import img3 from "../../assets/blogs/blog4.webp";
import img4 from "../../assets/blogs/blog3.webp";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Noise-Cancelling Earphones for Audiophiles in 2024",
      imageSrc: img1,
      excerpt:
        "Looking for the ultimate listening experience without background noise? Check out our top picks for noise-cancelling earphones that deliver superior audio quality.",
      author: "John Doe",
      date: "March 5, 2024",
      category: "Earphones",
    },
    {
      id: 2,
      title:
        "The Ultimate Guide to Choosing the Right Smartwatch for Your Needs",
      imageSrc: img2, // Replace with actual image URL
      excerpt:
        "Smartwatches come in all shapes and sizes, with a variety of features. This guide will help you narrow down your options and find the perfect smartwatch for you.",
      author: "Jane Smith",
      date: "February 20, 2024",
      category: "Smartwatches",
    },
    {
      id: 3,
      title: "5 Fitness Trackers with Built-in GPS for Active Lifestyles",
      imageSrc: img3,
      excerpt:
        "Stay on top of your fitness goals with these smartwatches featuring built-in GPS for accurate distance and pace tracking during your workouts.",
      author: "David Lee",
      date: "January 12, 2024",
      category: "Smartwatches",
    },
    {
      id: 4,
      title:
        "Wireless Earbuds vs. Wired Earphones: Which One is Right for You?",
      imageSrc: img4, // Replace with actual image URL
      excerpt:
        "Debating between the convenience of wireless earbuds or the sound quality of wired earphones? This comparison will help you decide.",
      author: "Sarah Jones",
      date: "December 15, 2023",
      category: "Earphones",
    },
  ];

  return (
    <div className="min-h-screen  grid md:grid-cols-2 grid-col-1 items-center gap-2">
      {blogPosts.map((data) => (
        <div key={data.id}>
          <Link to="/products">
            <img
              id={data.id}
              src={data.imageSrc}
              className=" rounded-xl gap-2"
            />
          </Link>
          <div className="p-3 pl-0 mb-4">
            <p className="font-bold sm:text-lg text-sm ">{data.title}</p>
            <p>{data.excerpt}</p>

            <p className="from-neutral-700">{data.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
