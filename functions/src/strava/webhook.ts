import * as functions from 'firebase-functions';
import express = require('express');
import cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

// CREATE SUBSCRIPTION
app.get('/', (req, res) => {
  const VERIFY_TOKEN = 'HERMES_FIREBASE_APP';

  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).json({ 'hub.challenge': challenge });
    } else {
      res.sendStatus(403);
    }
  }
});

// HANDLE EVENTS
app.post('/', (req, res) => {
  // const example = {
  // 	aspect_type: 'update',
  // 	event_time: 1516126040,
  // 	object_id: 1360128428,
  // 	object_type: 'activity',
  // 	owner_id: 134815,
  // 	subscription_id: 120475,
  // 	updates: {
  // 		title: 'Messy'
  // 	}
  // };

  console.log(req.body.aspect_type);

  res.sendStatus(200);
});

export const stravaWebhook = functions
  .region('europe-west1')
  .https.onRequest(app);
