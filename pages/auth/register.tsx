import { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '@hermes/types/page';
import { RegisterPage } from '@hermes/features/register';

const Register: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/dashboard');
  }, [router]);

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <RegisterPage />
    </>
  );
};

export default Register;

Register.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {page}
    </div>
  );
};
