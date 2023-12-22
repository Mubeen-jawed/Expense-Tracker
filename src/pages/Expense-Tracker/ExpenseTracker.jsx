import React from "react";
import InputForm from "./components/InputForm";
import Expenses from "./components/Expenses";
import TopNavbar from "../../nav/TopNavbar";

const ExpenseTracker = () => {
  return (
    <>
      <TopNavbar />

      <div className="max-w-4xl m-auto px-2">
        <InputForm />
        <Expenses />
      </div>
    </>
  );
};

export default ExpenseTracker;
