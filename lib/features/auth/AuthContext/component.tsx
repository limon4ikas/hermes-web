import { createContext, FC, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { clientAuth } from '@hermes/firebase';
import { getTokenCookie, setTokenCookie } from '../utils';

export enum AuthState {
  Init = 'init',
  Expect = 'expect',
  Authenticated = 'authenticated',
  Unauthenticated = 'unauthenticated',
}

export interface AuthContext {
  user: User | null;
  authState: AuthState | null;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  authState: AuthState.Init,
});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authState, setAuthState] = useState<AuthState | null>(AuthState.Init);

  useEffect(() => {
    getTokenCookie()
      ? setAuthState(AuthState.Expect)
      : setAuthState(AuthState.Unauthenticated);

    const unsubscribe = clientAuth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setTokenCookie(token);
        setAuthState(AuthState.Authenticated);
        setUser(user);
      } else {
        setAuthState(AuthState.Unauthenticated);
      }
    });

    const unsubscribeToken = clientAuth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setTokenCookie(token);
      } else {
        setTokenCookie('');
      }
    });

    return () => {
      unsubscribeToken();
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authState: authState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
