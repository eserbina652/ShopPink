import { createSlice } from "@reduxjs/toolkit";
import { Nullable } from "../../../utils/types";
import { User } from "../../../api/usersApi/types/types";

interface IInitialState {
  user: Nullable<User>;
}

const initialState: IInitialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    onLogin: (state, action) => {
      state.user = action.payload;
      return state;
    },
  },
});

export const { onLogin } = authSlice.actions;

export default authSlice.reducer;
