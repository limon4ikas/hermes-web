import { NextPage } from 'next';
import { withAuth, logout } from '@hermes/auth';
import { Button } from '@hermes/components';

// STRAVA
const redirectAfterAuthURL = 'http://localhost:3000/strava-sync';

// const params = {
//   client_id: process.env['NEXT_PUBLIC_STRAVA_CLIENT_ID'],
//   response_type: 'code',
//   redirect_uri: redirectAfterAuthURL,
//   approval_prompt: 'force',
//   scope: 'activity:read_all',
// };

// const queryParams = queryString.stringify(params);

// <a
// href={`https://www.strava.com/oauth/authorize?${queryParams}`}
// rel="external"
// >
// Authorize Strava
// </a>

const Dashboard: NextPage = () => {
  return (
    <div>
      <Button onClick={logout}>LOGOUT</Button>
      <Button onClick={logout}>Strava sync</Button>
    </div>
  );
};

export default withAuth()(Dashboard);
