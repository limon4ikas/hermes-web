import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env['NEXT_PUBLIC_FIREBASE_API_KEY'],
  authDomain: process.env['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
  storageBucket: process.env['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['NEXT_PUBLIC_FIREBASE_APP_ID'],
  measurementId: process.env['NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'],
};

const initApp = () => {
  const clientApp = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApp();

  return clientApp;
};

const initAuth = () => {
  const clientAuth = getAuth();
  clientAuth.setPersistence(browserLocalPersistence);

  return clientAuth;
};

const initFirestore = () => {
  const db = getFirestore();

  return db;
};

// AUTH PROVIDERS
export const googleAuthProvider = new GoogleAuthProvider();

export const clientApp = initApp();
export const clientAuth = initAuth();
export const db = initFirestore();
