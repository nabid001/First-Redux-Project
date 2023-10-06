// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // Your reducer actions here
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
