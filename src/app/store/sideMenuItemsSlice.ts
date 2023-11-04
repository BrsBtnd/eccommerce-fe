import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';
import { SideMenuItems } from '@/lib/constants';

const initialState: {
  selectedSideMenuItems: SideMenuItems[];
} = {
  selectedSideMenuItems: [],
};

const sideMenuItemsSlice = createSlice({
  name: 'sideMenuItems',
  initialState,
  reducers: {
    setSelectedSideMenuItems: (
      state,
      action: PayloadAction<SideMenuItems[]>,
    ) => {
      state.selectedSideMenuItems = action.payload;
    },
  },
});

export const { setSelectedSideMenuItems } = sideMenuItemsSlice.actions;

export const selectSelectedSideMenuItems = (state: RootState) =>
  state.sideMenuItems.selectedSideMenuItems;

export default sideMenuItemsSlice;
