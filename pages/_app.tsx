import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@state';
import { AuthProvider } from 'lib/auth';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
};
export default MyApp;
