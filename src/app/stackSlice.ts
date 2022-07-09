import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';

export const stackSlice = createSlice({
  name: 'stack',
  initialState: {
    route: ['/'],
  },
  reducers: {
    pushPage: (state: { route: string[] }, action: PayloadAction<{ path: string }>) => {
      state.route = [...state.route, action.payload.path];
    },
    popPage: (state: { route: string[] }) => {
      state.route = state.route.slice(0, -1);
    },
  },
});

export const stackSelector = (state: RootState) => state.stack.route;

export const { pushPage, popPage } = stackSlice.actions;
