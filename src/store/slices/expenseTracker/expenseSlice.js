import { createSlice, nanoid } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: [],

  reducers: {
    addExpense(state, action) {
      // action.payload === object of description, category, expense
      state.push({
        description: action.payload.description,
        category: action.payload.category,
        expense: action.payload.expense,
        id: nanoid(),
      });
    },

    removeExpense(state, action) {
      // action.payload === expense-to-remove id
      const filteredExpense = state.filter((expense) => {
        console.log(expense.id);
        return expense.id != action.payload;
      });

      return (state = filteredExpense);
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export const expenseReducer = expenseSlice.reducer;
