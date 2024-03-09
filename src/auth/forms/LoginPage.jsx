/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"; // Optional for subtle animations (install `framer-motion`)
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Replace with actual form submission logic (e.g., API call)
    setIsSuccess(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Optional animation
      className="signin-form flex justify-center items-center h-screen bg-stone-200  dark:bg-black dark:text-white shadow-md rounded-lg "
    >
      <div className="w-full max-w-md p-8 ">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        {isSuccess ? (
          <p>You have successfully logged in.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium mt-4"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-xl w-full sm:text-sm px-3 py-2 border border-gray-300 dark:text-black"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="error text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium mt-4 "
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm px-3 py-2 border border-gray-300 dark:text-black rounded-xl"
              {...register("password", {
                required: "Please enter a password",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="error text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
            >
              Sign In
            </button>

            <p className="mt-5">
              {" "}
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="hover:text-blue-400 dark:hover:text-blue-700"
              >
                Sign Up
              </NavLink>
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default LoginPage;
