import { configureStore } from '@reduxjs/toolkit';
import { functionsApi } from '@hermes/services/functionsApi';

export const store = configureStore({
  reducer: {
    [functionsApi.reducerPath]: functionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    functionsApi.middleware,
  ],
  devTools: true,
  enhancers: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
