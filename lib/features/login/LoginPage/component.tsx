import { FC, MouseEvent, useEffect } from 'react';
import 'twin.macro';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  loginWithGoogle,
  loginWithEmailAndPassword,
} from '@hermes/features/auth';
import { TextField, Button, GoogleIcon } from '@hermes/components';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import 'twin.macro';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

export interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }) => {
      try {
        await loginWithEmailAndPassword(email, password);
        router.push('/dashboard');
      } catch (error) {
        console.error(error);
      }
    },
    validationSchema: LoginSchema,
  });

  return (
    <div tw="flex h-screen items-center justify-center bg-gray-100">
      <div tw="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 tw="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Hermes
        </h1>
        <FormikProvider value={formik}>
          <Form tw="mt-6">
            <TextField name="email" label="Email" type="text" />
            <div tw="mt-4">
              <TextField name="password" type="password" label="Password" />
              <Link href="/auth/forgot">
                <a tw="mt-2 flex justify-end text-xs font-light text-gray-400 hover:text-gray-500 hover:underline">
                  Forgot you password?
                </a>
              </Link>
            </div>

            <div tw="mt-6">
              <Button
                type="submit"
                variant="primary"
                size="medium"
                disabled={formik.isSubmitting}
                isLoading={formik.isSubmitting}
              >
                Login
              </Button>
            </div>
          </Form>
        </FormikProvider>
        <div tw="flex items-center justify-between mt-4">
          <span tw="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p tw="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </p>

          <span tw="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div tw="flex items-center mt-6 -mx-2">
          <Button
            type="button"
            variant="google"
            size="big"
            onClick={handleLoginWithGoogle}
          >
            <GoogleIcon />
            <span tw="hidden mx-2 sm:inline">Sign in with Google</span>
          </Button>
        </div>

        <p tw="mt-8 text-xs font-light text-center text-gray-400">
          Don&apos;t have an account? <br />
          <Link href="/auth/register">
            <a tw="font-medium text-gray-800 dark:text-gray-200 hover:underline">
              Create One
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};
