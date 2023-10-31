import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  manufacturer: string;
  category: string;
}

const initialState: {
  products: Product[];
} = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice;
