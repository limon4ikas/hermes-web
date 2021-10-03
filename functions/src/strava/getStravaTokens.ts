import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { StravaTokenAuthBody } from '@hermes/types';
import { bootstrapExpress } from '../utils';
import { addTokensToDb, fetchAllActivities, getStravaTokens } from './helpers';

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
    await addTokensToDb(user.uid, tokens);

    // 4. Fetch all activies and add them to user
    await fetchAllActivities(user.uid, tokens.accessToken);

    // 5. Complete
    return response.status(200).json({
      type: 'SUCCESS',
      message: 'Strava tokens acquired successfully',
      data: tokens,
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
