import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/ProductModel";

const initialState: Product[] = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: (_state, action: PayloadAction<Product[]>) => {
      return action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((item) => item.sku === action.payload.sku);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.sku === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    filterFavouriteProducts: (state) => {
      return state.filter(item => item.isFavourite);
    } 
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  setProductList,
  filterFavouriteProducts
} = productSlice.actions;
export default productSlice.reducer;
