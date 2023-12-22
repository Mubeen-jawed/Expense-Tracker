import React from "react";
import { changeSearchTerm } from "../store/index";
import { useDispatch, useSelector } from "react-redux";

const CarSearch = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  function handleChange(e) {
    const searchTerm = e.target.value;

    dispatch(changeSearchTerm(searchTerm));
  }

  return (
    <div className="w-full flex justify-end">
      <input
        type="text"
        className="capitalize hover:bg-gray-200 focus:bg-gray-200 cursor-default border border-solid border-gray-500 rounded-md outline-none py-1 px-2"
        placeholder="Search Cars"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default CarSearch;
