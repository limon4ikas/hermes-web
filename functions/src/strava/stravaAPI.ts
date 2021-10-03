import axios from 'axios';
import { camelizeKeys } from 'humps';

export const stravaAPI = axios.create({ baseURL: 'https://www.strava.com' });

stravaAPI.interceptors.response.use((response) => {
  if (response.data) {
    response.data = camelizeKeys(response.data) as never;

    return response;
  }

  return response;
});
