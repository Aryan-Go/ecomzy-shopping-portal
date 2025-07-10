import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value--;
    },

    increment: (state) => {
      state.value++;
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
