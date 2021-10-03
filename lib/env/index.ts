export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_TEST = process.env.NODE_ENV === 'test';

export const BASE_URL = IS_PROD
  ? 'https://hermes-seven.vercel.app'
  : 'http://localhost:3000';

export const FUNCTIONS_BASE_URL = '/api';
