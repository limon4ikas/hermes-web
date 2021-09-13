import { User } from 'firebase/auth';
import { createContext, FC, useEffect, useState } from 'react';
import { clientAuth } from '../firebase/client';

export const AuthContext = createContext<User | null>(null);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = clientAuth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
