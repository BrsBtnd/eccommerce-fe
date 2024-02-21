import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';
import { faker } from '@faker-js/faker';

const initialState: {
  user: string;
} = {
  user: faker.internet.userName(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectUser = (state: RootState) => state.user.user;

export default userSlice;
