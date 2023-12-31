import React from "react";

import TopNavbar from "../../nav/TopNavbar";
import Hero from "../../assets/hero.svg";
import PrimaryBtn from "../../components/PrimaryBtn";

const Home = () => {
  return (
    <div>
      <TopNavbar />

      <div className="max-w-7xl m-auto mt-28 mb-10 p-4 xl:p-0">
        <div className="flex sm:items-center justify-between h-full w-full sm:flex-row flex-col-reverse items-center ">
          <div className="w-full mt-14 sm:mt-0 sm:w-1/2">
            <img className="w-full" src={Hero} alt="" />
          </div>
          <div className="w-full sm:w-1/2 sm:mt-14">
            <div>
              <h1 className="lg:text-5xl text-4xl font-semibold font-serif capitalize">
                Be creative and productive with{" "}
                <span
                  className=" font-normal"
                  style={{ fontFamily: "cursive" }}
                >
                  Diary
                </span>
                .
              </h1>
              <p className="capitalize mt-4 text-gray-600 lg:text-base text-sm">
                Organize and monitor your notes and ideas effortlessly with our
                all-in-one tracker. Explore the wide range of tracking options
                available to enhance your note-taking experience.
              </p>
            </div>

            <div className="">
              <PrimaryBtn className="mt-10" text="Explore more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
