import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./slices/amountSlice";
import expensesReducer from "./slices/expensesSlice";

export const store = configureStore({
  reducer: { amount: amountReducer, expenses: expensesReducer },
  devTools: true,
});
