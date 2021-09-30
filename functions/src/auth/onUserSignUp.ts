import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const onUserSignUp = functions
  .region('europe-west1')
  .auth.user()
  .onCreate(async (user) => {
    const {
      uid,
      displayName,
      email,
      emailVerified,
      phoneNumber,
      photoURL,
    } = user;

    await admin.firestore().collection('users').doc(uid).set({
      uid,
      displayName,
      email,
      emailVerified,
      phoneNumber,
      photoURL,
    });
  });
