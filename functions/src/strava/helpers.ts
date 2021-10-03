import { stravaAPI } from './stravaAPI';
import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_GRANT_TYPE,
} from '../env';
import { Activity, StravaTokenResponse } from '@hermes/types';
import * as admin from 'firebase-admin';
import { camelizeKeys } from 'humps';
import * as functions from 'firebase-functions';

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

export const addTokensToDb = async (userUID: string, tokens: any) => {
  await admin
    .firestore()
    .collection('stravaTokens')
    .doc(userUID)
    .set(camelizeKeys(tokens));
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

export const fetchAllActivities = async (
  userUID: string,
  stravaAccessToken: string
) => {
  const { data } = await stravaAPI.get<Activity[]>(
    'api/v3/athlete/activities',
    {
      headers: {
        Authorization: `Bearer ${stravaAccessToken}`,
      },
    }
  );

  functions.logger.warn({
    STRAVA_TOKEN_IS: stravaAccessToken,
    USER_ID: userUID,
  });

  const camelizedData = camelizeKeys(data);

  const batch = admin.firestore().batch();

  camelizedData.forEach((activity) => {
    const userActivitiesRef = admin
      .firestore()
      .collection(`users/${userUID}/activities`)
      .doc();

    batch.set(userActivitiesRef, activity);
  });

  await batch.commit();
};
