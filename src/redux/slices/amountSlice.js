import { createSlice, createSelector } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: 0,
  reducers: {
    addAmount: (state, action) => state + action.payload,
    withdarwAmount: (state, action) => state + action.payload,
  },
});

export const getAmountSelector = createSelector(
  (state) => state.amount,
  (state) => state
);

export const { addAmount, withdarwAmount } = amountSlice.actions;

export default amountSlice.reducer;
