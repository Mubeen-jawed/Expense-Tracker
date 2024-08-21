import { configureStore } from "@reduxjs/toolkit";

// Cars Tracker

import {
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
} from "./slices/carsTracker/carsSlice";
import {
  changeName,
  changeCost,
  carFormReducer,
} from "./slices/carsTracker/carFormSlice";

// Expense Tracker

import {
  addExpense,
  removeExpense,
  expenseReducer,
} from "./slices/expenseTracker/expenseSlice";
import {
  changeDescription,
  changeCategory,
  changeExpense,
  expenseFormReducer,
} from "./slices/expenseTracker/expenseFormSlice";

// To-Do List

import {
  addToDoList,
  removeToDoList,
  ToDoListReducer,
} from "./slices/ToDoList/ToDoListSlice";

import {
  changeToDoList,
  ToDoListFormReducer,
} from "./slices/ToDoList/ToDoListFormSlice";

const store = configureStore({
  reducer: {
    carForm: carFormReducer,
    cars: carsReducer,
    expenseForm: expenseFormReducer,
    expenses: expenseReducer,
    toDoListForm: ToDoListFormReducer,
    toDoLists: ToDoListReducer,
  },
});

export {
  store,
  changeSearchTerm,
  addCar,
  removeCar,
  changeCost,
  changeName,
  addExpense,
  removeExpense,
  changeDescription,
  changeExpense,
  changeCategory,
  changeToDoList,
  ToDoListFormReducer,
  addToDoList,
  removeToDoList,
  ToDoListReducer,
};
