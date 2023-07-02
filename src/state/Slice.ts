import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

const initialState: Product[] = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<string>) => {
      return state.filter(x => x.sku === action.payload);
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
  },
});

export const {addProduct, updateProduct, deleteProduct, getProduct} = productSlice.actions;
export default productSlice.reducer;
