import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import productsSlice from '@/app/store/productsSlice';
import sideMenuItemsSlice from '@/app/store/sideMenuItemsSlice';

const rootReducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
  [sideMenuItemsSlice.name]: sideMenuItemsSlice.reducer,
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
