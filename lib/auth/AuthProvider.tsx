import { createContext, FC, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { clientAuth } from '@firebase/client';

type AuthState = 'loading' | 'authenticated' | 'unauthenticated';

interface AuthContext {
  user: User | null;
  authState: AuthState;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  authState: 'loading',
});

// TODO: Set id token cookie
export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authState, setAuthState] = useState<AuthState>('loading');

  useEffect(() => {
    const unsubscribe = clientAuth.onAuthStateChanged((user) => {
      if (user) {
        setAuthState('authenticated');
        setUser(user);
      } else {
        setAuthState('unauthenticated');
      }
    });

    return () => unsubscribe();
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
