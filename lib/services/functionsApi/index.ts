import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FUNCTIONS_BASE_URL } from '@hermes/env';
import { StravaTokenAuthBody, StravaTokenAuthResponse } from '@hermes/types';

export const functionsApi = createApi({
  reducerPath: 'functionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FUNCTIONS_BASE_URL,
  }),
  endpoints: (builder) => ({
    connectToStrava: builder.query<
      StravaTokenAuthResponse,
      StravaTokenAuthBody
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
