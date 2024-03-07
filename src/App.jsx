import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./root/pages/Home"; // Import your page components
import About from "./root/pages/About";

import Products from "./root/pages/Products";
import Blogs from "./root/pages/Blogs";
import Footer from "./components/Footer/Footer"; // Import your footer component

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 dark:text-white">
        {/* Navigation bar (replace with your component or styles) */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* Add routes for other pages if needed */}
        </Routes>
      </div>
      <Footer /> {/* Display footer on all pages */}
    </Router>
  );
};

export default App;
