import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RegisterPage } from '@hermes/features/register';

const Register: NextPage = () => {
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
