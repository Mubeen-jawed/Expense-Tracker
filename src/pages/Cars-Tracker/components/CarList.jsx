import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

import { FaTrashAlt } from "react-icons/fa";
import CarSearch from "./CarSearch";

const CarList = () => {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { searchTerm, data } }) => {
    function filteredCars() {
      if (searchTerm) {
        return data.filter((car) => {
          if (car.name.includes(searchTerm)) {
            return data;
          }
        });
      } else {
        return data;
      }
    }

    return {
      cars: filteredCars(),
      name: form.name,
    };
  });

  const returnedCars = cars.map((car) => {
    const bold = name && car.name.includes(name);
    console.log(bold);
    return (
      <div key={car.id} className="p-1 ">
        <div className="flex capitalize">
          <p className={`${bold ? "font-bold" : "font-normal"} w-3/5`}>
            {car.name}
          </p>
          <p className="w-1/6">${car.cost}</p>
          <button onClick={() => handleDelete(car)} className="w-1/5">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    );
  });

  function handleDelete(car) {
    dispatch(removeCar(car.id));
  }

  return (
    <div className="mt-20 mb-10">
      <h2 className="capitalize font-serif text-4xl">your cars</h2>
      <CarSearch />
      <div className="flex flex-col border border-solid border-gray-500 rounded-md p-4 mt-5">
        <div className="flex capitalize px-1">
          <h4 className="text-lg font-semibold w-3/5 capitalize">car</h4>
          <h4 className="text-lg font-semibold w-1/5">price</h4>
        </div>

        <div className="border-b  border-gray-400 my-3"></div>

        {returnedCars}
        <hr />
      </div>
    </div>
  );
};

export default CarList;
