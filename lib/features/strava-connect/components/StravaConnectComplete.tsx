import { useLazyConnectToStravaQuery } from '@hermes/api';
import { useAuth } from '@hermes/auth/useAuth';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

export const StravaConnectComplete: FC = () => {
  const {
    query: { code },
  } = useRouter();
  const [redirectTime, setRedirectTimer] = useState(5);
  const { user } = useAuth();

  const [
    tryConnectToStrava,
    { isError, isLoading, isSuccess, error },
  ] = useLazyConnectToStravaQuery();

  useEffect(() => {
    const startStravaConnect = async () => {
      if (user && code) {
        const idToken = await user.getIdToken();
        tryConnectToStrava({ idToken, stravaToken: code as string });
      }
    };

    startStravaConnect();
  }, [code, tryConnectToStrava, user]);

  return (
    <div className="flex flex-col items-center justify-center bg-blue-300 h-screen w-screen">
      {isLoading && <h1>Please wait...</h1>}
      {isSuccess && (
        <>
          <h1>Sync with strava is successful</h1>
          <h1>Redirect in {redirectTime}</h1>
        </>
      )}
      {isError && <h1>Something went wrong...</h1>}
      {isError && JSON.stringify(error)}
    </div>
  );
};
