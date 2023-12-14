import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const carsData = useSelector((state) => {
    return state.cars.data;
  });

  const price = carsData.reduce((accumulator, currentCar) => {
    return accumulator + currentCar.cost;
  }, 0);

  console.log(price);

  return (
    <div>
      <div className="w-full flex justify-end items-center text-2xl ">
        <span className="mr-1 text-3xl">Total: </span> ${price}
      </div>
    </div>
  );
};

export default CarValue;
