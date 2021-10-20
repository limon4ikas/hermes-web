import { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLazyConnectToStravaQuery } from '@hermes/services/functionsApi';
import { useAuth } from '@hermes/features/auth';
import { Button } from '@hermes/components/Button';

export const ConnectPage: FC = () => {
  const {
    query: { code },
  } = useRouter();
  const { user } = useAuth();

  const [
    tryConnectToStrava,
    { isError, isLoading, isSuccess, isUninitialized },
  ] = useLazyConnectToStravaQuery();

  useEffect(() => {
    const startStravaConnect = async () => {
      if (user && code) {
        const idToken = await user.getIdToken();

        tryConnectToStrava({ idToken, stravaAuthCode: code as string });
      }
    };

    startStravaConnect();
  }, [code, tryConnectToStrava, user]);

  return (
    <>
      <Head>
        <title>
          Sync - {isUninitialized || isLoading ? 'In Progress' : null}
          {isError ? 'Failed' : null}
          {isSuccess ? 'Success' : null}
        </title>
      </Head>

      <div className="flex flex-col items-center justify-center bg-blue-300 h-screen w-screen">
        {isLoading && <h1>Connecting to strava...</h1>}
        {isSuccess && (
          <>
            <h1>Sync with strava is successful</h1>
            <Link href="/dashboard">
              <a>
                <Button>Go to dashboard</Button>
              </a>
            </Link>
          </>
        )}
        {isError && <h1>Something went wrong...</h1>}
      </div>
    </>
  );
};
