import { FarmListJson } from "@/Config";
import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const profileSlice = createSlice({
  name: "profile",
  initialState: { 
    token: "",
    // user: {
        id: "",
        username: "",
        // avatar: null,
        email: "",
    //     role: "",
    //     password: ""
    // }
  },
  reducers: {
    addUser: (state, action) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
      // state = action.payload;
  },
    // editprofile: (state, action) => {
    //     state.firstname = action.payload.firstname;
    //     state.email = action.payload.email;
    //     // state = action.payload;
    // }
  },
});

export const { addUser } = profileSlice.actions;

export const profileReducers = profileSlice.reducer;
