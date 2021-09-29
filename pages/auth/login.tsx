import { MouseEvent, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { loginWithGoogle, loginWithEmailAndPassword } from 'lib/auth';
import { Input, Button, GoogleIcon } from '@components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

// TODO: #3 Display error when could not authenticate user
const Login: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/dashboard');
  }, [router]);

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

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Hermes
        </h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async (values) => {
            try {
              await loginWithEmailAndPassword(values.email, values.password);
              router.push('/dashboard');
            } catch (error) {
              console.error(error);
            }
          }}
          validationSchema={LoginSchema}
        >
          {({ isSubmitting }) => (
            <Form className="mt-6">
              <Input name="email" label="Email" type="text" />
              <div className="mt-4">
                <Input name="password" type="password" label="Password" />
                <Link href="/auth/forgot">
                  <a className="mt-2 flex justify-end text-xs font-light text-gray-400 hover:text-gray-500 hover:underline">
                    Forgot you password?
                  </a>
                </Link>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  Login
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <Button
            type="button"
            variant="google"
            onClick={handleLoginWithGoogle}
          >
            <GoogleIcon />
            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </Button>
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
