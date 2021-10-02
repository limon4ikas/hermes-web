import { NextPage } from 'next';
import { withAuth } from '@hermes/auth/authHOC';
import { StravaConnectComplete } from '@hermes/features/strava-connect';

const Connect: NextPage = () => {
  return <StravaConnectComplete />;
};

export default withAuth()(Connect);
