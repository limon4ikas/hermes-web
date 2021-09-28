import { createContext, FC, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { clientAuth } from '@firebase/client';
import { getTokenCookie, setTokenCookie } from './utils';

type AuthState =
  | 'init'
  | 'loading'
  | 'expect'
  | 'authenticated'
  | 'unauthenticated';

interface AuthContext {
  user: User | null;
  authState: AuthState | null;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  authState: 'loading',
});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authState, setAuthState] = useState<AuthState | null>('init');

  useEffect(() => {
    getTokenCookie() ? setAuthState('expect') : setAuthState('loading');

    const unsubscribe = clientAuth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setTokenCookie(token);
        setAuthState('authenticated');
        setUser(user);
      } else {
        setAuthState('unauthenticated');
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
