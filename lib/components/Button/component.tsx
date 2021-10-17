import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { TailwindCSS } from '@hermes/types';
import { Spinner } from '../Spinner';
import clsx from 'clsx';

export enum ButtonTypes {
  Primary = 'primary',
  Google = 'google',
}

export enum ButtonSizes {
  Medium = 'medium',
  Big = 'big',
}

const buttonSizeMap: Record<ButtonSizes, TailwindCSS> = {
  [ButtonSizes.Medium]: 'px-4 py-2',
  [ButtonSizes.Big]: 'px-6 py-2',
};

export const buttonTypeMap: Record<ButtonTypes, TailwindCSS> = {
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
      size = ButtonSizes.Medium,
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
