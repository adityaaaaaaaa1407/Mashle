import { Link } from "react-router-dom"; // Assuming React Router

const Footer = () => {
  // Assuming you've installed Font Awesome

  const socialMediaLinks = [
    {
      icon: <i className="fab fa-instagram"></i>,
      link: "https://www.instagram.com/your-company/",
    },
    {
      icon: <i className="fab fa-linkedin"></i>,
      link: "https://www.linkedin.com/company/your-company",
    },
    {
      icon: <i className="fab fa-github"></i>,
      link: "https://github.com/your-username",
    },
  ];

  return (
    <footer className="container mx-auto py-8 bg-white dark:bg-gray-900 dark:text-white">
      <p className="text-sm text-gray-600">
        Copyright &copy; {new Date().getFullYear()} Your Company Name
      </p>
      <nav className="flex justify-between pt-4">
        <ul className="list-none">
          <li className="inline-block px-4">
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link to="/help" className="text-gray-700 hover:text-blue-500">
              Help
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link to="/faq" className="text-gray-700 hover:text-blue-500">
              FAQ
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link to="/terms" className="text-gray-700 hover:text-blue-500">
              Terms & Conditions
            </Link>
          </li>
        </ul>
        <ul className="flex list-none">
          {socialMediaLinks.map((socialLink) => (
            <li key={socialLink.link} className="inline-block mx-2">
              <a
                href={socialLink.link}
                className="text-gray-700 hover:text-blue-500"
              >
                {socialLink.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
