import { FC, ReactNode } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';
import { AuthState } from './AuthProvider';

interface WithAuthHOCConfig {
  redirectURL?: string;
  PageShell?: ReactNode;
}

const DEFAULT_REDIRECT_URL = '/auth/login';

const DEFAULT_AUTH_CONFIG: WithAuthHOCConfig = {
  redirectURL: '/auth/login',
};

const DefaultPageShell: FC = () => {
  return (
    <div className="w-screen h-screen bg-yellow-500 flex items-center justify-center">
      <h1>Page shell</h1>
    </div>
  );
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
