import { doc, getDoc } from 'firebase/firestore';
import { User } from '@hermes/types';
import { db } from '@hermes/firebase/client';

export const getFirestoreUser = async (userUID: string) => {
  const docRef = doc(db, 'users', userUID);
  const docSnap = await getDoc(docRef);

  return docSnap.data() as User | undefined;
};

export const getStravaAccessToken = async (userUID: string) => {};

export const getUserActivities = async (userUID: string) => {};
