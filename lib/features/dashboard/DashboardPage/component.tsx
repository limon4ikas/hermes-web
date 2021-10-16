import { logout } from '@hermes/features/auth/main';
import { Button } from '@hermes/components';
import React, { FC } from 'react';
import { StravaConnectButton } from '@hermes/features/strava';

export const DashboardPage: FC = () => {
  return (
    <div>
      <Button onClick={logout}>LOGOUT</Button>
      <StravaConnectButton />
    </div>
  );
};
