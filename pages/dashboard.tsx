import { NextPage } from 'next';
import Head from 'next/head';
import { withAuth, logout } from '@hermes/auth';
import { Button } from '@hermes/components';
import { StravaConnectButton } from '@hermes/features/strava-connect';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div>
        <Button onClick={logout}>LOGOUT</Button>
        <StravaConnectButton />
      </div>
    </>
  );
};

export default withAuth()(Dashboard);
