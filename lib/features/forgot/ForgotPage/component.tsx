import { FC } from 'react';
import 'twin.macro';
import { useRouter } from 'next/router';
import { Form, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { sendPasswordResetMail } from '@hermes/features/auth';
import { Button, TextField } from '@hermes/components';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

export interface ForgotPageProps {}

export const ForgotPage: FC<ForgotPageProps> = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatedPassword: '',
    },
    onSubmit: async (values) => {
      try {
        await sendPasswordResetMail(values.email);
        router.push('/auth/login');
      } catch (error) {
        console.error(error);
      }
    },
    validationSchema: ForgotPasswordSchema,
  });

  return (
    <div tw="flex h-screen items-center justify-center bg-gray-100">
      <div tw="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div tw="px-6 py-4">
          <h2 tw="text-3xl font-bold text-center text-gray-700 dark:text-white">
            Hermes
          </h2>

          <p tw="mt-1 text-center text-gray-500 dark:text-gray-400">
            Please enter your email and we will send you link to create new
            password
          </p>
          <FormikProvider value={formik}>
            <Form>
              <div tw="w-full mt-4">
                <TextField
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>

              <div tw="flex items-center justify-between mt-4">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={formik.isSubmitting}
                  disabled={formik.isSubmitting}
                >
                  Send
                </Button>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};
