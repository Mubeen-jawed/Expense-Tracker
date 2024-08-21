import { createSlice } from "@reduxjs/toolkit";

const ToDoListFormSlice = createSlice({
  name: "toDoListForm",
  initialState: {
    toDoList: "",
  },

  reducers: {
    changeToDoList(state, action) {
      state.toDoList = action.payload;
    },
  },
});

export const { changeToDoList } = ToDoListFormSlice.actions;
export const ToDoListFormReducer = ToDoListFormSlice.reducer;
