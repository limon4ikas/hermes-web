import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const StravaSyncSuccess: NextPage = () => {
  const [redirectTime, setRedirectTimer] = useState(5);
  const router = useRouter();

  // 1. Call an API with code to exchange for tokens

  // 2. Call an API to fully sync all activities from strava

  // 3. If is success then redirect to dashboard

  return (
    <div className="flex flex-col items-center justify-center bg-blue-300 h-screen w-screen">
      <h1>Sync with strava is successful</h1>
      <h1>Redirect in {redirectTime}</h1>
    </div>
  );
};

export default StravaSyncSuccess;
