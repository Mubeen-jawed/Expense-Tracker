import { configureStore } from "@reduxjs/toolkit";
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
} from "./slices/carsSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeSearchTerm, addCar, removeCar, changeCost, changeName };
