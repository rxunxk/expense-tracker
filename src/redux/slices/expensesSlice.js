import { createSlice, createSelector } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: [
    { amount: 100, desc: "book" },
    { amount: -20, desc: "chips" },
  ],
  reducers: {
    addExpense: (state, action) => state.push(action.payload),
    removeExpense: (state, action) => state.pop(action.payload),
  },
});

export const getExpensesSelector = createSelector(
  (state) => state.expenses,
  (state) => state
);

export const { addExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
