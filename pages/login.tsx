import { LoginForm } from '@components/LoginForm';
import { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <div className="flex h-screen">
      <LoginForm />
    </div>
  );
};

export default Login;
