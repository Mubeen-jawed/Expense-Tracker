import { useState } from "react";
import InputForm from "./InputForm";
import Expenses from "./Expenses";
import TopNavbar from "./nav/TopNavbar";
import "./assets/style.css";

function App() {
  return (
    <>
      <TopNavbar />

      <div className="max-w-4xl m-auto">
        <InputForm />
        <Expenses />
      </div>
    </>
  );
}

export default App;
