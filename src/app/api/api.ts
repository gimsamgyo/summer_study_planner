import { createSelector, createSlice } from '@reduxjs/toolkit';

import baseApi from '@/app/api/baseApi';
import { RootState } from '@/app/store';

export const api = baseApi
  .enhanceEndpoints({
    addTagTypes: ['user'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation<
        {
          status: number;
          token: string;
          message?: string;
        },
        {
          email: string;
          password: string;
        }
      >({
        query: (arg) => ({
          url: '/login',
          method: 'POST',
          body: {
            email: arg.email,
            password: arg.password,
          },
        }),
      }),
      signUp: builder.mutation<any, any>({
        query: (args) => ({
          url: '/signup',
          method: 'POST',
          body: args,
        }),
      }),
      logout: builder.mutation<undefined, void>({
        queryFn: () => ({
          data: undefined,
        }),
      }),
    }),
  });

type AuthState = {
  token: string | null;
};

const initialAuthState = { token: null } as AuthState;
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
      })
      .addMatcher(api.endpoints.logout.matchFulfilled, () => initialAuthState);
  },
});

export const isLoginSelector = createSelector(
  (state: RootState) => state.auth.token,
  (token) => token !== null,
);

export const isAdminLoginSelector = createSelector(
  (state: RootState) => state.auth.token,
  (token) => token !== null,
);
