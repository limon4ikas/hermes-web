import { ReactElement } from 'react';
import Head from 'next/head';
import { ForgotPage } from '@hermes/features/forgot';
import { NextPageWithLayout } from '@hermes/types/page';

const Forgot: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>

      <ForgotPage />
    </>
  );
};

export default Forgot;

Forgot.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {page}
    </div>
  );
};
