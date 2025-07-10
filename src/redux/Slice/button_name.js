import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
    "Add Item",
  ],};

export const buttonSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        remove_item: (state, action) => {
            state.value[action.payload] = "Remove Item"
        },

        add_item: (state,action) => {
            state.value[action.payload] = "Add Item"
        }
    }
})

export const { remove_item, add_item } = buttonSlice.actions;
export default buttonSlice.reducer;
