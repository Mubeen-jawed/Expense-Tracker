import React from "react";

const Expenses = () => {
  return (
    <div className="mt-20 mb-10">
      <h2 className="capitalize font-serif text-4xl">your expenses</h2>

      <div className="flex flex-col border border-solid border-gray-500 rounded-md p-4 mt-5">
        <div className="flex capitalize px-1">
          <h4 className="text-lg font-semibold w-3/5">Description</h4>
          <h4 className="text-lg font-semibold w-1/5">category</h4>
          <h4 className="text-lg font-semibold w-1/5">price</h4>
        </div>

        <div className="border-b  border-gray-400 my-3"></div>

        <div className="p-1">
          <div className="flex">
            <p className="w-3/5">buy some clothes</p>
            <p className="w-1/5">Shopping</p>
            <p className="w-1/5">$40</p>
          </div>
          <div className="flex">
            <p className="w-3/5">buy some clothes</p>
            <p className="w-1/5">Shopping</p>
            <p className="w-1/5">$40</p>
          </div>
        </div>
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
