import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { createUser } from '@hermes/auth';
import { Input, Button } from '@hermes/components';

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

// TODO: #2 Display error when could not create new user
const Register: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/dashboard');
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
            Hermes
          </h2>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Create account
          </p>

          <Formik
            initialValues={{
              email: '',
              password: '',
              repeatedPassword: '',
            }}
            onSubmit={async (values) => {
              try {
                await createUser(values.email, values.password);
                router.push('/dashboard');
              } catch (error) {
                console.error(error);
              }
            }}
            validationSchema={RegisterSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="w-full mt-4">
                  <Input name="email" label="Email" type="text" />
                </div>

                <div className="w-full mt-4">
                  <Input name="password" label="Password" type="password" />
                </div>

                <div className="w-full mt-4">
                  <Input
                    name="repeatedPassword"
                    label="Repeat password"
                    type="password"
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                  >
                    Register
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
