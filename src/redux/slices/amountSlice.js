import { createSlice, createSelector } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: 0,
  reducers: {
    addAmount: (state, action) => state + action.payload,
    resetAmount: (state, action) => 0,
  },
});

export const getAmountSelector = createSelector(
  (state) => state.amount,
  (state) => state
);

export const { addAmount, resetAmount } = amountSlice.actions;

export default amountSlice.reducer;
