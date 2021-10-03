import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_GRANT_TYPE,
} from '../env';
import { stravaAPI } from './stravaAPI';
import { bootstrapExpress } from '../utils';
import { camelizeKeys } from 'humps';

const app = bootstrapExpress();

interface StravaTokensAPIResponse {
  data: {
    accessToken: string;
    expiresAt: string;
    expirestIn: string;
    refreshToken: string;
    tokenType: string;
    athlete: Record<string, any>;
  };
}

app.post<{}, {}, any>('/', async (request, response) => {
  try {
    const { idToken, stravaToken } = request.body;

    // 1. Check auth token
    const user = await admin.auth().verifyIdToken(idToken);

    // 2. Retrieve strava tokens
    const { data } = await stravaAPI.post<{}, StravaTokensAPIResponse>(
      '/oauth/token',
      {},
      {
        params: {
          client_id: STRAVA_CLIENT_ID,
          client_secret: STRAVA_CLIENT_SECRET,
          code: stravaToken,
          grant_type: STRAVA_GRANT_TYPE,
        },
      }
    );

    const { athlete, expirestIn, tokenType, ...restData } = data;

    // 3. Add strava tokens to firestore
    await admin
      .firestore()
      .collection('stravaTokens')
      .doc(user.uid)
      .set(camelizeKeys(restData));

    // 4. Complete
    return response.status(200).json({
      type: 'SUCCESS',
      message: 'Strava tokens acquired successfully',
    });
  } catch (error) {
    if (error instanceof Error) {
      functions.logger.error(error.message);
      return response
        .status(500)
        .json({ type: 'ERROR', message: error.message });
    }

    functions.logger.error(error);
    return response.sendStatus(500);
  }
});

export const stravaTokens = functions
  .region('europe-west1')
  .https.onRequest(app);