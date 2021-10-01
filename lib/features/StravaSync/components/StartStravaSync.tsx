import { FC } from 'react';
import { BASE_URL } from '@hermes/env';
import { Button } from '@hermes/components/Button';
import queryString from 'query-string';

const redirectAfterAuthURL = `${BASE_URL}/strava/sync-success`;

const params = {
  client_id: process.env['NEXT_PUBLIC_STRAVA_CLIENT_ID'],
  response_type: 'code',
  redirect_uri: redirectAfterAuthURL,
  approval_prompt: 'force',
  scope: 'activity:read_all',
};

const queryParams = queryString.stringify(params);

export interface StravaSyncProps {}

export const StartStravaSync: FC<StravaSyncProps> = () => {
  return (
    <a
      href={`https://www.strava.com/oauth/authorize?${queryParams}`}
      rel="external"
    >
      <Button>Sync with strava</Button>
    </a>
  );
};
