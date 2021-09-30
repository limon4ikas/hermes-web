import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const onUserDelete = functions
  .region('europe-west1')
  .auth.user()
  .onDelete(async (user) => {
    const { uid } = user;

    await admin.firestore().collection('users').doc(uid).delete();
  });
