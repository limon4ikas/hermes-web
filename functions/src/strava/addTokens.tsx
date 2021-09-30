import * as functions from 'firebase-functions';
import express = require('express');
import cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.post('/', (req, res) => res.send());
app.get('/', (req, res) => res.send());

export const stravaTokens = functions.https.onRequest(app);

// accessToken: string;
// 		expiresAt: number;
// 		refreshToken: string;
// 		stravaAthleteId: number;
// 		expiresIn: number;

// await adminFirestore
//   .collection('users')
//   .doc(request.locals.user.uid)
//   .set(
//     {
//       stravaAthleteId,
//       stravaTokens: { accessToken, expiresAt, expiresIn, refreshToken },
//     },
//     { merge: true }
//   );
