import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeToDoList, addToDoList, removeToDoList } from "../../../store";

const ToDoListInput = () => {
  const dispatch = useDispatch();

  const { toDoList } = useSelector((state) => {
    return state.toDoListForm;
  });

  function handleToDoList(e) {
    dispatch(changeToDoList(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const timeSent = `${hours}:${minutes}`;

    dispatch(
      addToDoList({
        toDoList,
        timeSent,
      })
    );
  }

  return (
    <div>
      <h2 className="capitalize font-serif text-4xl mt-20">
        write your To-Dos
      </h2>

      <form className="mt-5" onSubmit={handleSubmit}>
        <label className=" cursor-default flex flex-col items-start" htmlFor="">
          {/* <caption className="font-semibold">Description</caption> */}
          <input
            className="hover:bg-gray-200 cursor-default capitalize border border-solid border-gray-500 rounded-md outline-none p-2 w-full mt-1 active-shadow"
            type="text"
            spellCheck={false}
            onChange={handleToDoList}
            value={toDoList}
          />
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

export default ToDoListInput;
