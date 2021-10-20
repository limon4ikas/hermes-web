import React, { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';
import { Spinner } from '../Spinner';

export enum ButtonTypes {
  Primary = 'primary',
  Google = 'google',
}

export enum ButtonSizes {
  medium = 'medium',
  Big = 'big',
}

const buttonSizeMap: Record<ButtonSizes, string> = {
  [ButtonSizes.medium]: 'px-4 py-2',
  [ButtonSizes.Big]: 'px-6 py-2',
};

export const buttonTypeMap: Record<ButtonTypes, string> = {
  [ButtonTypes.Primary]:
    'leading-5 text-white bg-gray-700 rounded hover:bg-gray-600',
  [ButtonTypes.Google]:
    'mx-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400',
};

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonTypes | 'primary' | 'google';
  size?: ButtonSizes | 'medium' | 'big';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = ButtonTypes.Primary,
      size = ButtonSizes.medium,
      isLoading,
      children,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={clsx(
          'flex items-center justify-center gap-2 w-full duration-200 transition-colors transform focus:outline-none',
          buttonSizeMap[size],
          buttonTypeMap[variant]
        )}
        {...rest}
      >
        {children}
        {isLoading && <Spinner />}
      </button>
    );
  }
);

Button.displayName = 'Button';
