import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { clientAuth, googleAuthProvider } from '@hermes/firebase';

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
