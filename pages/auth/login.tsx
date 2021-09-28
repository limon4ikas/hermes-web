import { useState, MouseEvent } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { loginWithGoogle, loginWithEmailAndPassword } from 'lib/auth';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLoginWithGoogle = async (e: MouseEvent) => {
    e.preventDefault();

    try {
      router.prefetch('/dashboard');
      await loginWithGoogle();
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithPasswordAndEmail = async (e: MouseEvent) => {
    e.preventDefault();

    try {
      router.prefetch('/dashboard');
      await loginWithEmailAndPassword(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Hermes
        </h1>

        <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            label="Email"
            name="email"
          />
          <div className="mt-4">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
            />
            <Link href="/auth/forgot">
              <a className="mt-2 flex justify-end text-xs font-light text-gray-400">
                Forgout you password?
              </a>
            </Link>
          </div>

          <div className="mt-6">
            <Button onClick={handleLoginWithPasswordAndEmail}>Login</Button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
            onClick={handleLoginWithGoogle}
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don&apos;t have an account? <br />
          <Link href="/auth/register">
            <a className="font-medium text-gray-800 dark:text-gray-200 hover:underline">
              Create One
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;