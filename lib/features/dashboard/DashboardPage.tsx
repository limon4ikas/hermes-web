import { logout } from '@hermes/auth/auth';
import { Button } from '@hermes/components';
import React, { FC } from 'react';
import { StravaConnectButton } from '@hermes/features';

export const DashboardPage: FC = () => {
  return (
    <div>
      <Button onClick={logout}>LOGOUT</Button>
      <StravaConnectButton />
    </div>
  );
};
