import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-cente ">
      <img
        className="w-full h-screen relative opacity-90 object-cover"
        src="..\..\src\assets\wave-1.jpg"
        alt="Wave-img"
      />
      <div className="absolute w-full h-screen items-center flex justify-center ">
        {/* <h2 className="text-4xl font-serif font-semibold mb-6">Sign Up</h2> */}
        <form
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <label className="block mb-4">
            <span className="block text-lg font-semibold mb-1">Username</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block text-lg font-semibold mb-1">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block text-lg font-semibold mb-1">Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block mb-6">
            <span className="block text-lg font-semibold mb-1">
              Confirm Password
            </span>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <Link
            to="/"
            className="border-2 border-solid border-black text-lg font-semibold rounded-full outline-none active-shadow-btn w-full p-1 mt-10 bg-white transition-all duration-200 justify-center items-center flex"
            type="submit"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
