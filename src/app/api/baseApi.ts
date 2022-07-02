import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { RootState } from '@/app/store';

export interface IPaginationResponse<T> {
  page: number | null;
  size: number | null;
  content: T[];
}

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.cola.or.kr',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('Authentication', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});

export default baseApi;
