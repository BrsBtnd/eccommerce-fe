import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';
import { SideMenuItems } from '@/lib/constants';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  manufacturer: string;
  category: SideMenuItems;
  imageSrc?: string;
}

const initialState: {
  products: Product[];
  favorites: string[];
  basket: string[];
} = {
  products: [],
  favorites: [],
  basket: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    addToBasket: (state, action: PayloadAction<string[]>) => {
      state.basket = action.payload;
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      state.basket = state.basket.filter((id) => id !== action.payload);
    },
  },
});

export const {
  setProducts,
  addToFavorites,
  removeFromFavorites,
  addToBasket,
  removeFromBasket,
} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export const selectFavorites = (state: RootState) => state.products.favorites;

export const selectBasket = (state: RootState) => state.products.basket;

export default productsSlice;
