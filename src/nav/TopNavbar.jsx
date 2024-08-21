import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

//elements
import PrimaryBtn from "../components/PrimaryBtn";

const TopNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div
      className={`bg-white shadow-lg top-0 px-6 fixed lg:px-12 w-full flex justify-between ${
        showNavbar ? "" : "items-center"
      } py-3`}
    >
      <Link
        to="/"
        className={`flex cursor-pointer items-center ${
          showNavbar ? "hidden" : "block"
        }`}
      >
        <FaPencilAlt className="text-4xl mr-1" />
        <h2 style={{ fontFamily: "cursive" }} className={"text-4xl"}>
          Diary
        </h2>
      </Link>
      <ul
        className={`${
          showNavbar ? "flex items-end show-nav" : "hidden items-center"
        } lg:flex w-full justify-between`}
      >
        <div className="lg:w-3/5 flex flex-col lg:flex-row lg:justify-evenly mt-4 lg:mt-0 lg:text-base text-sm">
          <Link
            to="/expense-tracker"
            className="hover-underline-animation cursor-pointer mb-2 lg:mb-0"
          >
            Expense Tracker
          </Link>
          <Link
            to="/cars-tracker"
            className="hover-underline-animation cursor-pointer mb-2 lg:mb-0"
          >
            Cars Tracker
          </Link>
          <Link
            to="/to-do-list"
            className="hover-underline-animation cursor-pointer mb-2 lg:mb-0"
          >
            To-Do List
          </Link>
          <Link className="hover-underline-animation cursor-pointer mb-2 lg:mb-0">
            Notes Keeping
          </Link>
          <Link className="hover-underline-animation cursor-pointer mb-2 lg:mb-0">
            Cars Tracker
          </Link>
        </div>

        <div className="flex items-center mt-4 lg:mt-0 text-sm sm:text-base">
          <li className="mr-3 lg:mr-5">
            <button className="hover-underline-animation">Login</button>
          </li>
          <Link to={"/sign-up"}>
            <PrimaryBtn text="sign up" />
          </Link>
        </div>
      </ul>
      <div className="lg:hidden">
        <FiMenu
          onClick={() => {
            if (showNavbar) {
              setShowNavbar(false);
            } else {
              setShowNavbar(true);
            }
          }}
          className="text-2xl"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
