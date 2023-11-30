import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = {
        id: action.payload.id,
        name: action.payload.username,
        email: action.payload.email,
      };
    },
    logOut: (state) => {
      state.user = {};
      fetch("https://realestate-api-ec44019958c8.herokuapp.com/users/sign_out", {
        method: "DELETE",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      Cookies.remove("token");
    },
  },
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;
