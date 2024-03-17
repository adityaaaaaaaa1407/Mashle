import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./root/pages/Home"; // Import your page components
import About from "./root/pages/About";

import Products from "./root/pages/Products";

import Footer from "./components/Footer/Footer"; // Import your footer component
import BlogPage from "./root/pages/BlogPage";
import LoginPage from "./auth/forms/LoginPage";
import SignupPage from "./auth/forms/SignupPage";
import Wishlist from "./root/pages/Wishlist";

import AuthLayout from "./auth/AuthLayout";
import Categories from "./components/Categories/Categories";
import SingleProduct from "./components/Product/SingleProduct";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto width: 100% bg-white dark:bg-gray-900 dark:text-white ">
        {/* Navigation bar (replace with your component or styles) */}

        <Navbar />

        <Routes>
          {/* public routes here */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:id" element={<Categories />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products" element={<Products />} />

          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* private routes here */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>

          {/* Add routes for other pages if needed */}
        </Routes>
      </div>
      <hr className=" border-spacing-10 border-black dark:border-white" />
      <Footer className="" /> {/* Display footer on all pages */}
    </Router>
  );
};

export default App;
