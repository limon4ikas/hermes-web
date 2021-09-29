import { FC, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const buttonVariants = {
  primary:
    'px-4 py-2 leading-5 text-white w-full transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none',
  google:
    'flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none',
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isLoading?: boolean;
  variant?: keyof typeof buttonVariants;
};

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  isLoading,
  children,
  className = '',
  ...props
}) => {
  return (
    <button {...props} className={`${buttonVariants[variant]} ${className}`}>
      {isLoading ? <span>Loading...</span> : children}
    </button>
  );
};
