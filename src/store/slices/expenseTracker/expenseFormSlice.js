import { createSlice } from "@reduxjs/toolkit";

const expenseFormSlice = createSlice({
  name: "expenseForm",
  initialState: {
    description: "",
    expense: "",
    category: "",
  },

  reducers: {
    changeDescription(state, action) {
      state.description = action.payload;
    },

    changeExpense(state, action) {
      state.expense = action.payload;
    },

    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { changeDescription, changeCategory, changeExpense } =
  expenseFormSlice.actions;
export const expenseFormReducer = expenseFormSlice.reducer;
