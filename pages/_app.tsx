import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { AuthProvider } from '@hermes/features/auth';
import { store } from '@hermes/state';
import { AppPropsWithLayout } from '@hermes/types/page';
import '../styles/globals.css';
import { Layout } from '@hermes/features/Layout';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Provider store={store}>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </Provider>
    </>
  );
};

export default MyApp;
