import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const carsData = useSelector(({ cars: { searchTerm, data } }) => {
    if (searchTerm) {
      return data.filter((car) => {
        if (car.name.includes(searchTerm)) {
          return data;
        }
      });
    } else {
      return data;
    }
  });

  const price = carsData.reduce((accumulator, currentCar) => {
    return accumulator + currentCar.cost;
  }, 0);

  return (
    <div>
      <div className="w-full flex justify-end items-center text-2xl ">
        <span className="mr-1 text-3xl">Total: </span> ${price}
      </div>
    </div>
  );
};

export default CarValue;
