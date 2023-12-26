import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDescription,
  changeCategory,
  changeExpense,
  addExpense,
} from "../../../store";

const InputForm = () => {
  const dispatch = useDispatch();

  const { description, expense, category } = useSelector((state) => {
    return state.expenseForm;
  });

  function handleDescription(e) {
    dispatch(changeDescription(e.target.value));
  }

  function handleCategory(e) {
    dispatch(changeCategory(e.target.value));
  }

  function handleExpense(e) {
    dispatch(changeExpense(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addExpense({
        description,
        category,
        expense,
      })
    );
  }

  return (
    <div>
      <h2 className="capitalize font-serif text-4xl mt-20">
        write your expenses
      </h2>

      <form className="mt-5" onSubmit={handleSubmit}>
        <label className=" cursor-default flex flex-col items-start" htmlFor="">
          <caption className="font-semibold">Description</caption>
          <input
            className="hover:bg-gray-200 cursor-default capitalize border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow"
            type="text"
            spellCheck={false}
            onChange={handleDescription}
            value={description}
          />
        </label>
        <label
          className="flex cursor-default flex-col items-start mt-5"
          htmlFor=""
        >
          <caption className="font-semibold">Expense</caption>
          <input
            className="hover:bg-gray-200 capitalize cursor-default border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow"
            type="number"
            spellCheck={false}
            onChange={handleExpense}
            value={expense}
          />
        </label>
        <label
          className="flex cursor-default flex-col items-start mt-5 "
          htmlFor=""
        >
          <caption className="font-semibold">Category</caption>
          <select
            onChange={handleCategory}
            className="hover:bg-gray-200 capitalize cursor-default border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow"
          >
            <option value=""></option>
            <option value="shopping">Shopping</option>
            <option value="food">Food</option>
            <input type="text" placeholder="add a category" />
          </select>
        </label>

        <div className="w-full">
          <button
            className="border-2 border-solid border-black text-lg font-semibold rounded-full outline-none active-shadow-btn w-full p-1 mt-10 bg-white transition-all duration-200"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
