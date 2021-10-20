import React, { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';
import { Spinner } from '../Spinner';

export enum ButtonTypes {
  Login = 'login',
  Primary = 'primary',
  Secondary = 'secondary',
  Google = 'google',
}

export enum ButtonSizes {
  Medium = 'medium',
  Big = 'big',
}

const buttonSizeMap: Record<ButtonSizes, string> = {
  [ButtonSizes.Medium]: 'px-4 py-2',
  [ButtonSizes.Big]: 'px-6 py-2',
};

const base =
  'flex items-center justify-center gap-2 w-full duration-200 transition-colors transform focus:outline-none';

export const buttonTypeMap: Record<ButtonTypes, string> = {
  [ButtonTypes.Login]:
    'leading-5 text-white bg-gray-700 rounded hover:bg-gray-600',
  [ButtonTypes.Google]:
    'mx-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400',
  [ButtonTypes.Primary]:
    'font-medium text-white transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80',
  [ButtonTypes.Secondary]:
    'text-sm text-gray-600 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40',
};

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonTypes | 'primary' | 'google' | 'login' | 'secondary';
  size?: ButtonSizes | 'medium' | 'big';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = ButtonTypes.Primary,
      size = ButtonSizes.Medium,
      isLoading,
      children,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={clsx(base, buttonSizeMap[size], buttonTypeMap[variant])}
        {...rest}
      >
        {children}
        {isLoading && <Spinner />}
      </button>
    );
  }
);

Button.displayName = 'Button';
