import { loginWithGoogle } from 'lib/auth';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

const Login: NextPage = () => {
  const router = useRouter();

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <div>
        <button onClick={handleLoginWithGoogle}>Login with google</button>
      </div>
    </div>
  );
};

export default Login;
