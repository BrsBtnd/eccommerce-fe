import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';
import { SideMenuItems } from '@/lib/constants';

export interface Product {
  id: string;
  name: string;
  description: string;

  price: number;
  manufacturer: string;
  category: SideMenuItems;
  lock?: string;
}

const initialState: {
  products: Product[];
  favorites: string[];
  basket: string[];
  isFavoritesOpen: boolean;
} = {
  products: [],
  favorites: [],
  basket: [],
  isFavoritesOpen: false,
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
    toggleFavoritesOpen: (state, action: PayloadAction<boolean>) => {
      state.isFavoritesOpen = action.payload;
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
  toggleFavoritesOpen,
} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export const selectProductById = createSelector(
  [selectProducts, (state, productId) => productId],
  (products, productId) => products.find((product) => product.id === productId),
);

export const selectFavorites = (state: RootState) => state.products.favorites;

export const selectFavoritesProducts = createSelector(
  [selectFavorites, selectProducts],
  (favorites, products) => {
    return products.filter((product) => favorites.includes(product.id));
  },
);

export const selectIsFavoritesOpen = (state: RootState) =>
  state.products.isFavoritesOpen;

export const selectBasket = (state: RootState) => state.products.basket;

export default productsSlice;
