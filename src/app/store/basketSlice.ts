// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '@/app/store/store';
// import { SideMenuItems } from '@/lib/constants';
// import { Product } from '@/app/store/productsSlice';
//
// export interface Basket {
//   id: string;
//   userId: string;
//   products: Product[];
// }
//
// const initialState: {
//   basket: Basket;
//   isBasketOpen: boolean;
// } = {
//   basket: {
//     id: '',
//     userId: '',
//     products: [],
//   },
//   isBasketOpen: false,
// };
//
// const basketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {
//     setBasket: (state, action: PayloadAction<Basket[]>) => {
//       console.log('setBasket', action.payload);
//       // state.basket = action.payload;
//     },
//     isBasketOpen: (state, action: PayloadAction<boolean>) => {
//       state.isBasketOpen = action.payload;
//     },
//     // removeFromFavorites: (state, action: PayloadAction<string>) => {
//     //   state.favorites = state.favorites.filter((id) => id !== action.payload);
//     // },
//     // addToBasket: (state, action: PayloadAction<string[]>) => {
//     //   state.basket = action.payload;
//     // },
//     // removeFromBasket: (state, action: PayloadAction<string>) => {
//     //   state.basket = state.basket.filter((id) => id !== action.payload);
//     // },
//   },
// });
//
// export const {
//   setProducts,
//   addToFavorites,
//   removeFromFavorites,
//   addToBasket,
//   removeFromBasket,
// } = basketSlice.actions;
//
// export const selectProducts = (state: RootState) => state.products.products;
//
// export const selectFavorites = (state: RootState) => state.products.favorites;
//
// export const selectBasket = (state: RootState) => state.products.basket;
//
// export default productsSlice;
