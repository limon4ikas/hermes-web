import { FC } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';
import { AuthState } from './AuthProvider';

interface WithAuthHOCConfig {
  redirectURL: string;
}

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

export const withAuth = (config: WithAuthHOCConfig = DEFAULT_AUTH_CONFIG) => (
  Page: NextPage
) => {
  const WithAuth = (props: any) => {
    const { authState } = useAuth();
    const router = useRouter();

    // 1. Expect to succseed auth process
    if (authState === AuthState.Init || authState === AuthState.Expect) {
      return <DefaultPageShell />;
    }

    // 2. Redirect with redirect animation
    // TODO: #4 Show redirect animation
    if (authState === 'unauthenticated') {
      router.replace(config.redirectURL);
    }

    // 3. Success auth
    return <Page {...props} />;
  };

  WithAuth.displayName = 'WithAuthHOC';
  return WithAuth;
};
