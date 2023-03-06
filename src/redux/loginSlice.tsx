import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  disabled: true,
  notLoged: true,
  showTable: false,
};

export const loginSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    setNotLoged: (state, action) => {
      state.notLoged = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDisabled: (state, action) => {
      state.disabled = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setShowTable: (state, action) => {
      state.showTable = action.payload;
    },
  },
});

export const { setNotLoged, setEmail, setDisabled, setName, setShowTable } =
  loginSlice.actions;
export default loginSlice.reducer;
