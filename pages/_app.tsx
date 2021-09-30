import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { AuthProvider } from '@hermes/auth';
import { store } from '@hermes/state';
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
