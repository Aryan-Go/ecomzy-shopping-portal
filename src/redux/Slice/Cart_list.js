import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart_list : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      remove_item_cart: (state, action) => {
          console.log("Data has been successfully reomved from the cart list")
        let item = {
          name: action.payload.name,
          description: action.payload.description,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.cart_list = state.cart_list.filter((citem) => {citem != item})
    },

    add_item_cart: (state, action) => {
        let item = {
            name: action.payload.name,
            description: action.payload.description,
            image: action.payload.image,
            price: action.payload.price
        }
        state.cart_list.push(item)
        console.log("Data has been added to cart list successfully")
    },
  },
});

export const { remove_item_cart, add_item_cart } = cartSlice.actions;
export default cartSlice.reducer;
