import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FUNCTIONS_BASE_URL } from '@hermes/env';

export const functionsApi = createApi({
  reducerPath: 'functionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FUNCTIONS_BASE_URL,
  }),
  endpoints: (builder) => ({
    connectToStrava: builder.query<
      void,
      { idToken: string; stravaToken: string }
    >({
      query: (tokens) => ({
        url: 'stravaTokens',
        method: 'POST',
        body: tokens,
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useLazyConnectToStravaQuery } = functionsApi;
