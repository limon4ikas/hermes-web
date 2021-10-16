import { NextPage } from 'next';
import { withAuth } from '@hermes/features/auth';
import { ConnectPage } from '@hermes/features/strava';

const Connect: NextPage = () => {
  return <ConnectPage />;
};

export default withAuth()(Connect);
