import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { clientAuth } from '@firebase/client';
import '../styles/globals.css';
import { store } from '@state';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const unsubscribe = clientAuth.onAuthStateChanged(async (user) => {
      console.log(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;
