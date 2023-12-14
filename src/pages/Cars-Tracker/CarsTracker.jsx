import React from "react";
//compoents
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import TopNavbar from "../../nav/TopNavbar";

const CarsTracker = () => {
  return (
    <div>
      <TopNavbar />
      <div className="max-w-4xl m-auto mt-20 mb-10">
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </div>
  );
};

export default CarsTracker;
