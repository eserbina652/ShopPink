import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface IBasketItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  count: number;
}

interface IBasket {
  basketList: IBasketItem[];
}

const initialState: IBasket = {
  basketList: [
    {
      id: 0,
      title: "",
      description: "",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "",
      category: "",
      thumbnail: "",
      images: [""],
      count: 0,
    },
  ],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    onAdd: (state, action) => {
      if (state.basketList[0]?.id === 0) {
        state.basketList = [];
      }
      state.basketList = [...state.basketList, { ...action.payload, count: 1 }];
      return state;
    },
    onSave: (state, action) => {
      state.basketList = action.payload;
      return state;
    },
    onIncreace: (state, action) => {
      let temp2 = {
        ...action.payload.data,
        count: action.payload.count + 1,
      };
      const index = state.basketList.findIndex(
        (el) => el.id === action.payload.data.id
      );
      state.basketList[index] = temp2;
      return state;
    },
    onDecreace: (state, action) => {
      let temp2 = { ...action.payload.data, count: action.payload.count - 1 };

      const index = state.basketList.findIndex(
        (el) => el.id === action.payload.data.id
      );
      state.basketList[index] = temp2;
      return state;
    },
    onDeleteEl: (state, action) => {
      state.basketList = state.basketList.filter(
        (el) => el.id !== action.payload
      );
      return state;
    },
  },
});

export const { onAdd, onDeleteEl, onDecreace, onIncreace, onSave } =
  basketSlice.actions;

export default basketSlice.reducer;
