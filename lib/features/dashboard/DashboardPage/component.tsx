import React, { FC } from 'react';
import { logout } from '@hermes/features/auth';
import { Button } from '@hermes/components';
import { StravaConnectButton } from '@hermes/features/strava';

export const DashboardPage: FC = () => {
  return (
    <div>
      <Button onClick={logout}>LOGOUT</Button>
      <StravaConnectButton />
    </div>
  );
};
