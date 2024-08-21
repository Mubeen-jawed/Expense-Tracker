import { createSlice, nanoid } from "@reduxjs/toolkit";

const toDoListSlice = createSlice({
  name: "to-do-list",
  initialState: [],
  reducers: {
    addToDoList(state, action) {
      //action.payoad should be an object of todolist items
      state.push({
        toDoList: action.payload.toDoList,
        timeSent: action.payload.timeSent,
        id: nanoid(),
      });
    },

    removeToDoList(state, action) {
      //action.payoad should the id of delete object item

      const filteredToDoList = state.filter((toDoItem) => {
        return toDoItem.id != action.payload;
      });

      return (state = filteredToDoList);
    },
  },
});

export const { addToDoList, removeToDoList } = toDoListSlice.actions;
export const ToDoListReducer = toDoListSlice.reducer;
