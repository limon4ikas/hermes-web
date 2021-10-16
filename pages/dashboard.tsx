import { NextPage } from 'next';
import Head from 'next/head';
import { withAuth } from '@hermes/features/auth';
import { DashboardPage, DashboardShell } from '@hermes/features/dashboard';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardPage />
    </>
  );
};

export default withAuth({
  PageShell: <DashboardShell />,
})(Dashboard);
