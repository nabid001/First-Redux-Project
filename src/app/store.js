import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cardSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
