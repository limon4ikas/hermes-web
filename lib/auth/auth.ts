import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { clientAuth } from '@hermes/firebase';
import { googleAuthProvider } from './authProviders';

export const loginWithEmailAndPassword = (email: string, password: string) => {
  return signInWithEmailAndPassword(clientAuth, email, password);
};

export const loginWithGoogle = () => {
  return signInWithPopup(clientAuth, googleAuthProvider);
};

export const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(clientAuth, email, password);
};

export const logout = () => {
  return signOut(clientAuth);
};

export const sendPasswordResetMail = (email: string) => {
  return sendPasswordResetEmail(clientAuth, email);
};
