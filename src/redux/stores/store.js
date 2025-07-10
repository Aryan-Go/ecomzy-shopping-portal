import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../Slice/button_name.js"
import cartSlice from "../Slice/Cart_list.js"
import countSlice from "../Slice/Count_items.js"
import priceSlice from "../Slice/Total_price.js"

const store = configureStore({
    reducer: {
      button: buttonSlice,
      cart: cartSlice,
      count: countSlice,
      price: priceSlice,
  },
});

export default store
