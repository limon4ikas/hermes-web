import { NextPage } from 'next';
import Head from 'next/head';
import { withAuth, logout } from '@hermes/auth';
import { Button } from '@hermes/components';
import { StravaSync } from '@hermes/features/StravaSync';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div>
        <Button onClick={logout}>LOGOUT</Button>
        <StravaSync />
      </div>
    </>
  );
};

export default withAuth()(Dashboard);
