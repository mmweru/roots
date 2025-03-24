import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex w-100vw h-screen bg-white"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Left Form Section */}
      <motion.div
        className="w-1/2 h-full flex flex-col justify-center items-center px-16"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>

          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border-2 border-green-600 rounded-lg shadow-md focus:outline-none focus:border-green-700 transition duration-200"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-2 border-green-600 rounded-lg shadow-md focus:outline-none focus:border-green-700 transition duration-200"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border-2 border-green-600 rounded-lg shadow-md focus:outline-none focus:border-green-700 transition duration-200"
            />
          </div>

          {/* Register Button */}
          <button className="w-full py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-700 transition">
            Register
          </button>

          {/* Already have an account? Login */}
          <p className="mt-4 text-gray-600">
            Already have an account? 
            <span 
              onClick={() => navigate("/login")}
              className="text-green-600 cursor-pointer hover:underline ml-1"
            >
              Login
            </span>
          </p>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-1/2 h-full relative"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Login Button */}
        <div className="absolute top-[10%] -translate-y-1/2 right-[18rem]">
          <button
            onClick={() => navigate("/login")}
            className="bg-green-600 text-white px-6 py-2 rounded-md shadow-lg text-lg font-bold flex items-center hover:bg-green-700 transition"
          >
            <span className="mr-1">Login</span>
          </button>
        </div>

        <img
          src="/log.jpg"
          alt="Register Illustration"
          className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Register;
