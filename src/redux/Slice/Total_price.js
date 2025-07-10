import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pricer: 0,
};

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement_p: (state,action) => {
      state.pricer-=action.payload;
    },
    
    increment_p: (state,action) => {
        state.pricer+=action.payload;
    },
  },
});

export const { increment_p, decrement_p } = countSlice.actions;
export default countSlice.reducer;
