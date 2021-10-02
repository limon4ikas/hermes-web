import * as functions from 'firebase-functions';

export const STRAVA_GRANT_TYPE = 'authorization_code';
export const STRAVA_CLIENT_ID = functions.config().strava.client_id;
export const STRAVA_CLIENT_SECRET = functions.config().strava.client_secret;
export const STRAVA_VERIFY_TOKEN = 'HERMES_FIREBASE_APP';
