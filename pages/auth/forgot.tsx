import { NextPage } from 'next';
import { useState, MouseEvent } from 'react';

const Forgot: NextPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e: MouseEvent) => {
    e.preventDefault();
  };
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

          <form>
            <div className="w-full mt-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                className="px-4 py-2 leading-5 text-white w-full transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                onClick={handleForgotPassword}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
