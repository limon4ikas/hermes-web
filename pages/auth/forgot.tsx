import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { sendPasswordResetMail } from '@hermes/auth';
import { Button, Input } from '@hermes/components';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

// TODO: #1 Display error if could not send email
const Forgot: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
            Hermes
          </h2>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Please enter your email and we will send you link to create new
            password
          </p>
          <Formik
            initialValues={{
              email: '',
              password: '',
              repeatedPassword: '',
            }}
            onSubmit={async (values) => {
              try {
                await sendPasswordResetMail(values.email);
                router.push('/auth/login');
              } catch (error) {
                console.error(error);
              }
            }}
            validationSchema={ForgotPasswordSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="w-full mt-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Send
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

export default Forgot;
