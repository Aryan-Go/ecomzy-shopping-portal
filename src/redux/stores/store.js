import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../Slice/button_name.js"
import cartSlice from "../Slice/Cart_list.js"

const store = configureStore({
    reducer: {
      button: buttonSlice,
      cart: cartSlice,
  },
});

export default store
