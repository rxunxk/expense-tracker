import { createSlice, createSelector } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeExpense: (state, action) => {
      state = state.filter((expense) => expense.id !== action.payload);
      console.log(state);
      return state;
    },
    resetExpense: (state, action) => [],
  },
});

export const getExpensesSelector = createSelector(
  (state) => state.expenses,
  (state) => state
);

export const { addExpense, removeExpense, resetExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;
