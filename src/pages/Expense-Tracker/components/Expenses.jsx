import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import { removeExpense } from "../../../store";

const Expenses = () => {
  const dispatch = useDispatch();

  const expenses = useSelector((state) => {
    return state.expenses;
  });

  function handleDelete(expense) {
    dispatch(removeExpense(expense.id));
    console.log(expense.id, "expense");
  }

  const returnedExpenses = expenses.map((expense) => (
    <div
      className="flex items-center mt-2 capitalize sm:text-md text-sm"
      key={expense.id}
    >
      <p className="w-1/2">{expense.description}</p>
      <p className="w-1/4">{expense.category}</p>
      <p className="w-1/6">${expense.expense}</p>
      <div
        className="cursor-pointer w-1/12"
        onClick={() => handleDelete(expense)}
      >
        <FaTrashAlt className="" />
      </div>
    </div>
  ));

  return (
    <div className="mt-20 mb-10">
      <h2 className="capitalize font-serif text-4xl">your expenses</h2>

      <div className="flex flex-col border border-solid border-gray-500 rounded-md p-4 mt-5">
        <div className="flex capitalize px-1">
          <h4 className="sm:text-lg text-sm font-semibold w-1/2">
            Description
          </h4>
          <h4 className="sm:text-lg text-sm font-semibold w-1/4">category</h4>
          <h4 className="sm:text-lg text-sm font-semibold w-1/6">price</h4>
        </div>

        <div className="border-b  border-gray-400 my-3"></div>

        <div className="py-1">{returnedExpenses}</div>
      </div>
    </div>
  );
};

{
  /* <div className="w-3/6">
<h4 className="text-lg font-semibold">Description</h4>
<p>buy some clothes</p>
</div>
<div className="w-1/4">
<h4 className="text-lg font-semibold">Category</h4>
<p>Shopping</p>
</div>
<div className="w-1/4">
<h4 className="text-lg font-semibold">Expense</h4>
<p>$40</p>
</div> */
}

export default Expenses;
