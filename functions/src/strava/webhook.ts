import * as functions from 'firebase-functions';
import { STRAVA_VERIFY_TOKEN } from '../env';
import { bootstrapExpress } from '../utils';

const app = bootstrapExpress();

app.get('/', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === STRAVA_VERIFY_TOKEN) {
      res.status(200).json({ 'hub.challenge': challenge });
    } else {
      res.sendStatus(403);
    }
  }
});

app.post('/', (req, res) => {
  res.sendStatus(200);
});

export const stravaWebhook = functions
  .region('europe-west1')
  .https.onRequest(app);
