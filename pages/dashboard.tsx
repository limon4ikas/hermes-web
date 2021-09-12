import { NextPage } from 'next';
import { Button } from '@components/Button';
import queryString from 'query-string';

const redirectAfterAuthURL = 'http://localhost:3000/strava-sync';

const params = {
  client_id: process.env['NEXT_PUBLIC_STRAVA_CLIENT_ID'],
  response_type: 'code',
  redirect_uri: redirectAfterAuthURL,
  approval_prompt: 'force',
  scope: 'activity:read_all',
};

const queryParams = queryString.stringify(params);

export const Dashboard: NextPage = () => {
  return (
    <div>
      <Button />
      <a
        href={`https://www.strava.com/oauth/authorize?${queryParams}`}
        rel="external"
      >
        Authorize Strava
      </a>
    </div>
  );
};

export default Dashboard;
