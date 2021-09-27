import { FC, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
}

export const Input: FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm text-gray-800 dark:text-gray-200"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        {...props}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
    </div>
  );
};
