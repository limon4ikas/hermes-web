import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const StravaSyncSuccess: NextPage = () => {
  const [redirectTime, setRedirectTimer] = useState(5);
  const router = useRouter();

  console.log(router.query);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setRedirectTimer((prev) => prev - 1);
  //   }, 1000);

  //   return () => clearInterval(id);
  // }, [router]);

  // useEffect(() => {
  //   router.prefetch('/dashboard');

  //   if (redirectTime === 0) router.push('/dashboard');
  // }, [redirectTime, router]);

  return (
    <div className="flex flex-col items-center justify-center bg-blue-300 h-screen w-screen">
      <h1>Sync with strava is successful</h1>
      <h1>Redirect in {redirectTime}</h1>
    </div>
  );
};

export default StravaSyncSuccess;
