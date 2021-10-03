import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { bootstrapExpress } from '../utils';
import { camelizeKeys } from 'humps';
import { getStravaTokens } from './helpers';
import { StravaTokenAuthBody } from '@hermes/types';

const app = bootstrapExpress();

// TODO: Make express middleware to check for auth token header
// TODO: Add to firestore athlete id
app.post<{}, {}, StravaTokenAuthBody>('/', async (request, response) => {
  try {
    const { idToken, stravaAuthCode } = request.body;

    // 1. Check auth token
    const user = await admin.auth().verifyIdToken(idToken);

    // 2. Retrieve strava tokens
    const tokens = await getStravaTokens(stravaAuthCode);

    // 3. Add strava tokens to firestore
    await admin
      .firestore()
      .collection('stravaTokens')
      .doc(user.uid)
      .set(camelizeKeys(tokens));

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
    return response
      .status(500)
      .json({ type: 'ERROR', message: 'Something went wrong...' });
  }
});

export const stravaTokens = functions
  .region('europe-west1')
  .https.onRequest(app);
