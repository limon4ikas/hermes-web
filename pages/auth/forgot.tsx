import { NextPage } from 'next';
import Head from 'next/head';
import { ForgotPage } from '@hermes/features/forgot';

const Forgot: NextPage = () => {
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
