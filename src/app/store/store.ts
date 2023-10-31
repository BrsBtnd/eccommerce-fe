import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import productsSlice from '@/app/store/productsSlice';
// import { persistReducer } from 'redux-persist';
// import storage from '@/app/store/storage';

// const productsPersistConfig = {
//   key: productsSlice.name,
//   storage: storage,
//   whitelist: ['value'],
// };

const rootReducer = combineReducers({
  // [productsSlice.name]: persistReducer(
  //   productsPersistConfig,
  //   productsSlice.reducer,
  // ),
  [productsSlice.name]: productsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = typeof store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
