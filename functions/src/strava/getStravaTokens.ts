import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_GRANT_TYPE,
} from '../env';
import { stravaAPI } from './stravaAPI';
import { bootstrapExpress } from '../utils';

const app = bootstrapExpress();

app.post<{}, {}, string>('/', async (request, response) => {
  try {
    const { idToken, stravaToken } = JSON.parse(request.body);

    // 1. Check auth token
    const user = await admin.auth().verifyIdToken(idToken);

    // 2. Retrieve strava tokens
    const { data } = await stravaAPI.post(
      `/oauth/token?client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}&code=${stravaToken}&grant_type=${STRAVA_GRANT_TYPE}`
    );

    // 3. Add strava tokens to firestore
    await admin.firestore().doc(`/users/${user.uid}`).update(data);

    // 4. Add tokens to firestore
    return response.sendStatus(200);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return response
        .status(500)
        .json({ type: 'ERROR', message: error.message, data: request.body });
    }

    console.error(error);
    return response.status(500).json({ type: 'ERROR' });
  }
});

export const stravaTokens = functions
  .region('europe-west1')
  .https.onRequest(app);
