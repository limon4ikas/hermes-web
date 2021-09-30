import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>HOME</h1>
    </>
  );
};

export default Home;
