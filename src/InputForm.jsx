import React from "react";

const InputForm = () => {
  return (
    <div>
      <h2 className="capitalize font-serif text-4xl mt-20">
        write your expenses
      </h2>

      <form className="mt-5">
        <label className=" cursor-default flex flex-col items-start" htmlFor="">
          <caption className="font-semibold">Description</caption>
          <input
            className="hover:bg-gray-200 cursor-default border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow"
            type="text"
            spellCheck={false}
          />
        </label>
        <label
          className="flex cursor-default flex-col items-start mt-5"
          htmlFor=""
        >
          <caption className="font-semibold">Expense</caption>
          <input
            className="hover:bg-gray-200 cursor-default border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow"
            type="number"
            spellCheck={false}
            defaultValue="$"
          />
        </label>
        <label
          className="flex cursor-default flex-col items-start mt-5 "
          htmlFor=""
        >
          <caption className="font-semibold">Category</caption>
          <select className="hover:bg-gray-200 cursor-default border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow">
            <option value=""></option>
            <option value="shopping">Shopping</option>
            <option value="food">Food</option>
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
