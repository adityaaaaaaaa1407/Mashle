import { Link } from "react-router-dom"; // Assuming React Router
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Assuming you've installed Font Awesome

  const socialMediaLinks = [
    {
      icon: (
        <i className="fab fa-instagram">
          <FaGithub />
        </i>
      ),
      link: "https://www.instagram.com/_aditya__1421/",
    },
    {
      icon: (
        <i className="fab fa-linkedin">
          <FaLinkedin />
        </i>
      ),
      link: "https://www.linkedin.com/in/aditya-sagavekar-9696ba265/",
    },
    {
      icon: (
        <i className="fab fa-github">
          <FaInstagram />
        </i>
      ),
      link: "https://github.com/adityaaaaaaaa1407",
    },
    {
      icon: (
        <i className="fab fa-github">
          <FaTwitter />
        </i>
      ),
      link: "https://twitter.com/AdityaSagavekar",
    },
  ];

  return (
    <footer className="container mx-auto py-8 bg-white dark:bg-gray-900 dark:text-white">
      <div className="text-sm  text-black dark:text-white">
        <p className="sm:text-3xl text-xl font-bold mb-2"> MASHLE</p>
        <p className=" pr-2"> Copyright &copy; {new Date().getFullYear()}</p>
      </div>
      <div>
        <nav className="flex justify-between pt-4">
          <ul className="list-none">
            <li className="inline-block px-4">
              <Link
                to="/about"
                className=" text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
              >
                About Us
              </Link>
            </li>
            <li className="inline-block px-4">
              <Link
                to="/contact"
                className=" text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
            <li className="inline-block px-4">
              <Link
                to="/help"
                className=" text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
              >
                Help
              </Link>
            </li>
            <li className="inline-block px-4">
              <Link
                to="/faq"
                className=" text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
              >
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="flex sm:flex-row list-none">
            {socialMediaLinks.map((socialLink) => (
              <li
                key={socialLink.link}
                className="inline-block sm:text-3xl text-xl mx-2"
              >
                <a
                  href={socialLink.link}
                  className=" text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
                >
                  {socialLink.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
