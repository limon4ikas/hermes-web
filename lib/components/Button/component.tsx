import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { TailwindCSS } from '@hermes/types';
import { Spinner } from '../Spinner';
import clsx from 'clsx';

export enum BUTTON_TYPES {
  PRIMARY = 'primary',
  GOOGLE = 'google',
}

export enum BUTTON_SIZES {
  MEDIUM = 'medium',
  BIG = 'big',
}

const buttonSizeMap: Record<BUTTON_SIZES, TailwindCSS> = {
  [BUTTON_SIZES.MEDIUM]: 'px-4 py-2',
  [BUTTON_SIZES.BIG]: 'px-6 py-2',
};

export const buttonTypeMap: Record<BUTTON_TYPES, TailwindCSS> = {
  [BUTTON_TYPES.PRIMARY]:
    'leading-5 text-white bg-gray-700 rounded hover:bg-gray-600',
  [BUTTON_TYPES.GOOGLE]:
    'mx-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400',
};

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: BUTTON_TYPES | 'primary' | 'google';
  size?: BUTTON_SIZES | 'medium' | 'big';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = BUTTON_TYPES.PRIMARY,
      size = BUTTON_SIZES.MEDIUM,
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
