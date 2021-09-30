import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

interface WithAuthConfig {}

export const withAuth = (config?: WithAuthConfig) => (Page: NextPage) => {
  const WithAuth = (props: any) => {
    const { authState } = useAuth();
    const router = useRouter();

    // 1. Redirect to login path if user is not authenticated
    if (authState === 'unauthenticated') {
      router.replace('auth/login');
      return <h1>REDIRECTING...</h1>;
    }

    // 3. Render page
    return <Page {...props} />;
  };

  WithAuth.displayName = 'WithAuthHOC';
  return WithAuth;
};
