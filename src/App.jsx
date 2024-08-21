import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./assets/style.css";

//pages

import Home from "./pages/Home/Home";
import ExpenseTracker from "./pages/Expense-Tracker/ExpenseTracker";
import CarsTarcker from "./pages/Cars-Tracker/CarsTracker";
import ToDoList from "./pages/To-Do-List/ToDoList";
import Signup from "./pages/SignUp/Signup";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/cars-tracker" element={<CarsTarcker />} />
          <Route path="/to-do-list" element={<ToDoList />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
