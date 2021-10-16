import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';
import { AuthState } from '../AuthContext';
import { DefaultPageShell } from '../DefaultPageShell';

interface WithAuthHOCConfig {
  redirectURL?: string;
  PageShell?: ReactNode;
}

const DEFAULT_REDIRECT_URL = '/auth/login';

const DEFAULT_AUTH_CONFIG: WithAuthHOCConfig = {
  redirectURL: '/auth/login',
};

export const withAuth = ({
  PageShell,
  redirectURL,
}: WithAuthHOCConfig = DEFAULT_AUTH_CONFIG) => (Page: NextPage) => {
  const WithAuth = (props: any) => {
    const { authState } = useAuth();
    const router = useRouter();

    if (authState === AuthState.Init || authState === AuthState.Expect) {
      if (PageShell) return PageShell;

      return <DefaultPageShell />;
    }

    // TODO: #4 Show redirect animation
    if (authState === 'unauthenticated') {
      router.replace(redirectURL || DEFAULT_REDIRECT_URL);
    }

    return <Page {...props} />;
  };

  WithAuth.displayName = 'WithAuthHOC';
  return WithAuth;
};
