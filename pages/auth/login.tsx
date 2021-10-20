import React, { ReactElement } from 'react';
import Head from 'next/head';
import { LoginPage } from '@hermes/features/login';
import { NextPageWithLayout } from '@hermes/types/page';

const Login: NextPageWithLayout = () => {
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

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {page}
    </div>
  );
};
