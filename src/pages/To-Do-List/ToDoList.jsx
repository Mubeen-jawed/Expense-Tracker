import React from "react";
import TopNavbar from "../../nav/TopNavbar";
import ToDoListInput from "./components/ToDoListInput";
import ToDoListForm from "./components/ToDoListForm";

const ToDoList = () => {
  return (
    <div className="">
      <TopNavbar />
      <div className="max-w-4xl m-auto px-2">
        <ToDoListInput />
        <ToDoListForm />
      </div>
    </div>
  );
};

export default ToDoList;
