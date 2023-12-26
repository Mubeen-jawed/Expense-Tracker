import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../../../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.carForm.name,
      cost: state.carForm.cost,
    };
  });

  function handleCarName(e) {
    const carName = e.target.value;
    dispatch(changeName(carName));
  }

  function handleCarCost(e) {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      addCar({
        name,
        cost,
      })
    );
  }

  return (
    <div>
      <h2 className="capitalize font-serif text-4xl mb-5">Write your cars</h2>

      <form onSubmit={handleSubmit}>
        <label className="cursor-default flex flex-col items-start capitalize">
          <caption className="font-semibold">Car name</caption>
          <input
            className=" capitalize hover:bg-gray-200 cursor-default border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow"
            type="text"
            spellCheck={false}
            onChange={handleCarName}
            value={name || ""}
          />
        </label>
        <label className="cursor-default flex flex-col items-start capitalize mt-3">
          <caption className="font-semibold">Car Cost</caption>
          <input
            className="hover:bg-gray-200 capitalize cursor-default border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow"
            type="text"
            spellCheck={false}
            onChange={(e) => handleCarCost(e)}
            value={cost}
          />
        </label>

        <div>
          <button className="border-2 border-solid border-black text-lg font-semibold rounded-full outline-none active-shadow-btn w-full p-1 mt-10 bg-white transition-all duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
