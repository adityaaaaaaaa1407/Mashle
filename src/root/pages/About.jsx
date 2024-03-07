import { motion } from "framer-motion";
import image1 from "../../assets/website/earbuds-removebg-preview.png";
import profile from "../../assets/website/image-removebg-preview.png";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8"
      >
        About Us
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="prose max-w-2xl sm:text-xl text-md"
        >
          {/* About Us Description */}
          <p>
            Welcome to MASHLE! We are a passionate team dedicated to providing
            high-quality electronics products such as earphones , smart watches,
            and speakers to you sell at competitive prices. Our mission is to
            give everyone the best possible shopping experience.
          </p>
          <br />
          <p>
            We believe in the power of trust and values, e.g., excellent
            customer service, sustainable practices, innovation. We are
            committed to offering a positive shopping experience for all our
            customers.
          </p>
          {/* Optional: Add a call to action button */}
          <a href="#" className="btn btn-primary mt-4">
            Learn More
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          {/* About Us Image */}
          <img
            src={image1}
            alt="About Us"
            className="rounded-3xl shadow-lg w-full h-auto border border-none object-cover bg-zinc-400 "
          />
        </motion.div>
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Loop through team member data (replace with your data) */}
        {[
          {
            name: "Aditya Sagavekar",
            title: "CEO",
            image: profile,
          },
          {
            name: "Rohit Vishwakarma",
            title: "Marketing Manager",
            image: profile,
          },
          {
            name: "Bharat Gupta",
            title: "Head of Product",
            image: profile,
          },
        ].map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center rounded-2xl w-full h-auto border-none object-cover bg-zinc-300 dark:bg-slate-700"
          >
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <p className="text-lg font-semibold text-black dark:text-white">
              {member.name}
            </p>
            <p className=" text-black dark:text-white mb-5">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
