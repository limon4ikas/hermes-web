import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

interface WithAuthConfig {}

// TODO: Add cookies to detect if user is authenticated (to not show unnecessary spinner)
export const withAuth = (config?: WithAuthConfig) => (Page: NextPage) => {
  const WithAuth = (props: any) => {
    const { authState } = useAuth();
    const router = useRouter();

    // 1. Show full page loading spinner if auth is not initialised
    if (authState === 'loading') {
      return <h1>LOADING...</h1>;
    }

    // 2. Redirect to login path if user is not authenticated
    if (authState === 'unauthenticated') {
      router.replace('/login');
      return <h1>REDIRECTING...</h1>;
    }

    // 3. Render page
    return <Page {...props} />;
  };

  WithAuth.displayName = 'WithAuthHOC';
  return WithAuth;
};
