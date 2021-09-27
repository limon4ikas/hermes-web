import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from 'firebase/auth';
import { clientAuth, googleAuthProvider } from '@firebase/client';

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

export const changePasswordFromRest = (
  confirmationCode: string,
  newPassword: string
) => {
  return confirmPasswordReset(clientAuth, confirmationCode, newPassword);
};
