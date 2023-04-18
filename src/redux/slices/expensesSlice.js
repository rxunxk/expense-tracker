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
      state.pop(action.payload);
      return state;
    },
  },
});

export const getExpensesSelector = createSelector(
  (state) => state.expenses,
  (state) => state
);

export const { addExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
