import { stravaAPI } from './stravaAPI';
import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_GRANT_TYPE,
} from '../env';
import { StravaTokenResponse } from '@hermes/types';

export const getStravaTokens = async (stravaAuthCode: string) => {
  const { data } = await stravaAPI.post<{}, { data: StravaTokenResponse }>(
    '/oauth/token',
    {},
    {
      params: {
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        code: stravaAuthCode,
        grant_type: STRAVA_GRANT_TYPE,
      },
    }
  );

  const { athlete, expiresIn, tokenType, ...accessAndRefreshToken } = data;

  return accessAndRefreshToken;
};

export const readStravaTokens = async () => {};

export const refreshStravaTokens = async () => {};

export const checkStravaTokens = async () => {
  // 1. Read access & refresh token from db
};

export const fetchStravaActivities = async (accessToken: string) => {
  // 1. Read access & refresh token from db
  // 2. Check expiration date for access token
  // 3. Make request or try to refresh token
  // 4. Add activities to db
};
