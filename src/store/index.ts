import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";
import { basketSlice } from "./reducers/basket";
import { popupSlice } from "./reducers/popups";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    basket: basketSlice.reducer,
    popups: popupSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
