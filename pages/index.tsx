import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return <h1>HOME</h1>;
};

export default Home;
