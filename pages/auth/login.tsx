import type { NextPage } from 'next';
import Head from 'next/head';
import { LoginPage } from '@hermes/features/login';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <LoginPage />
    </>
  );
};

export default Login;
