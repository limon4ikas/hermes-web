import React, {
  ButtonHTMLAttributes,
  ComponentPropsWithRef,
  DetailedHTMLProps,
  forwardRef,
} from 'react';
import { Spinner } from '../Spinner';

type ButtonVariant = 'primary' | 'google';

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'px-4 py-2 leading-5 text-white w-full transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none',
  google:
    'flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none',
};

export type ButtonProps = ComponentPropsWithRef<'button'> &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    variant?: ButtonVariant;
    isLoading?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', isLoading, className = '', children, ...rest },
    ref
  ) => {
    return (
      <button
        {...rest}
        className={`flex items-center justify-center gap-2 ${buttonVariants[variant]} ${className}`}
        ref={ref}
      >
        {children}
        {isLoading && <Spinner />}
      </button>
    );
  }
);

Button.displayName = 'Button';
