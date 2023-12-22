import React from "react";
//compoents
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";
import TopNavbar from "../../nav/TopNavbar";

const CarsTracker = () => {
  return (
    <>
      <TopNavbar />
      <div className="max-w-4xl m-auto mt-20 mb-10 p-2">
        <CarForm />
        <CarList />
        <CarValue />
      </div>
    </>
  );
};

export default CarsTracker;
