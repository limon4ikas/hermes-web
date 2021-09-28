import { NextPage } from 'next';
import { withAuth, logout } from '@auth';

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
      <button onClick={logout}>LOGOUT</button>
      <a onClick={logout}>LOGOUT</a>
    </div>
  );
};

export default withAuth()(Dashboard);
