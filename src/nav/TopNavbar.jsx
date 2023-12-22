import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="">
      <ul className=" shadow-lg flex items-center justify-between w-full fixed top-0 px-12 py-3 bg-white">
        <Link to="/" className="flex cursor-pointer">
          <FaPencilAlt className="text-4xl mr-1" />
          <h2 style={{ fontFamily: "cursive" }} className="text-4xl">
            {" "}
            Diary
          </h2>
        </Link>

        <div className="w-3/5 flex justify-evenly">
          <Link
            to="/expense-tracker"
            className="hover-underline-animation cursor-pointer"
          >
            Expense Tracker
          </Link>
          <Link
            to="/cars-tracker"
            className="hover-underline-animation cursor-pointer"
          >
            Cars Tracker
          </Link>
          <Link className="hover-underline-animation cursor-pointer">
            To-Do List
          </Link>
          <Link className="hover-underline-animation cursor-pointer">
            Notes Keeping
          </Link>
          <Link className="hover-underline-animation cursor-pointer">
            Cars Tracker
          </Link>
        </div>

        <div className="flex items-center">
          <li className="mr-5">
            <button className="hover-underline-animation">Login</button>
          </li>
          <li>
            <button className="border-2 border-solid border-black rounded-full py-2 px-4 flex justify-center items-center active-shadow-btn">
              Sign Up
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default TopNavbar;
