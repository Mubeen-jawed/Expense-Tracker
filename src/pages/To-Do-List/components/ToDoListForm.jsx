import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import { removeToDoList } from "../../../store";

const ToDoListForm = () => {
  const dispatch = useDispatch();

  const [checked, isChecked] = useState({});

  function handleCheck(id) {
    isChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  function handleDelete(id) {
    dispatch(removeToDoList(id));
  }

  const toDoLists = useSelector((state) => {
    return state.toDoLists;
  });

  console.log(toDoLists);

  const returnedToDoList = toDoLists.map(({ toDoList, timeSent, id }) => {
    return (
      <div
        onClick={() => handleCheck(id)}
        className="py-1 flex justify-between items-center"
        key={id}
      >
        <div className="flex">
          <input
            className="mr-3"
            type="checkbox"
            readOnly
            checked={!!checked[id]}
          />
          <p className={checked[id] && "line-through"}>{toDoList}</p>
        </div>

        <div className="flex items-center">
          <p className="text-gray-500 text-xs mr-4">{timeSent}</p>
          <div onClick={() => handleDelete(id)}>
            <FaTrashAlt className="text-sm cursor-pointer" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-20 mb-10">
      <h2 className="capitalize font-serif text-4xl">your to-dos</h2>

      <div className="flex flex-col border border-solid border-gray-500 rounded-md p-4 mt-5 select-none">
        {returnedToDoList}
      </div>
    </div>
  );
};

export default ToDoListForm;
