import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { clientAuth, googleAuthProvider } from '@firebase/client';

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const user = signInWithEmailAndPassword(clientAuth, email, password);

  return user;
};

export const loginWithGoogle = async () => {
  const user = signInWithPopup(clientAuth, googleAuthProvider);

  return user;
};

export const createUser = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(
    clientAuth,
    email,
    password
  );

  return user;
};
