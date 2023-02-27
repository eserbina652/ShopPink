import { createSlice } from "@reduxjs/toolkit";
import { Nullable } from "../../../utils/types";
import { ISearchedProduct } from "../../../api/productApi/types/productTypes";
//TODO add interface for initial state
interface IPopups {
  isOpen: boolean;
  isOpenSuccess: boolean;
  isOpenDelete: boolean;
  item: Nullable<ISearchedProduct>;
  deletedId: Nullable<ISearchedProduct>;
}

const initialState: IPopups = {
  isOpen: false,
  isOpenSuccess: false,
  isOpenDelete: false,
  item: null,
  deletedId: null,
};

export const popupSlice = createSlice({
  name: "popups",
  initialState: initialState,
  reducers: {
    onOpen: (state, action) => {
      state.item = action.payload;
      state.isOpen = true;
      return state;
    },
    onClose: (state) => {
      state.isOpen = initialState.isOpen;
      state.item = initialState.item;
      return state;
    },
    onOpenDelete: (state, action) => {
      state.isOpenDelete = true;
      state.deletedId = action.payload;
      return state;
    },
    onCloseDelete: (state) => {
      state.isOpenDelete = initialState.isOpenDelete;
      return state;
    },
  },
});

export const { onOpen, onClose, onCloseDelete, onOpenDelete } =
  popupSlice.actions;

export default popupSlice.reducer;
