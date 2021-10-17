import { FC, useEffect } from 'react';
import 'twin.macro';
import { useRouter } from 'next/router';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { createUser } from '@hermes/features/auth';
import { TextField, Button } from '@hermes/components';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  repeatedPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export interface RegisterPageProps {}

export const RegisterPage: FC<RegisterPageProps> = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/dashboard');
  }, [router]);

  const formik = useFormik({
    initialValues: { email: '', password: '', repeatedPassword: '' },
    onSubmit: async (values) => {
      try {
        await createUser(values.email, values.password);
        router.push('/dashboard');
      } catch (error) {
        console.error(error);
      }
    },
    validationSchema: RegisterSchema,
  });

  return (
    <div tw="flex h-screen items-center justify-center bg-gray-100">
      <div tw="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div tw="px-6 py-4">
          <h2 tw="text-3xl font-bold text-center text-gray-700 dark:text-white">
            Hermes
          </h2>
          <p tw="mt-1 text-center text-gray-500 dark:text-gray-400">
            Create account
          </p>
          <FormikProvider value={formik}>
            <Form>
              <div tw="w-full mt-4">
                <TextField name="email" label="Email" type="text" />
              </div>

              <div tw="w-full mt-4">
                <TextField name="password" label="Password" type="password" />
              </div>

              <div tw="w-full mt-4">
                <TextField
                  name="repeatedPassword"
                  label="Repeat password"
                  type="password"
                />
              </div>

              <div tw="flex items-center justify-between mt-4">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={formik.isSubmitting}
                  isLoading={formik.isSubmitting}
                >
                  Register
                </Button>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};
