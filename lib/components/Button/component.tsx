import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { Spinner } from '../Spinner';

export enum ButtonType {
  PRIMARY = 'primary',
  GOOGLE = 'google',
}

export type ButtonTypeValue = 'primary' | 'google';

export enum ButtonSize {
  MEDIUM = 'medium',
  BIG = 'big',
}

export type ButtonSizeValue = 'medium' | 'big';

const buttonSizeMap: Record<ButtonSize, string> = {
  [ButtonSize.MEDIUM]: 'px-4 py-2',
  [ButtonSize.BIG]: 'px-6 py-2',
};

export const buttonTypeMap: Record<ButtonType, string> = {
  [ButtonType.PRIMARY]:
    'leading-5 text-white bg-gray-700 rounded hover:bg-gray-600',
  [ButtonType.GOOGLE]:
    'mx-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400',
};

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonType | ButtonTypeValue;
  size?: ButtonSize | ButtonSizeValue;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = ButtonType.PRIMARY,
      size = ButtonSize.MEDIUM,
      isLoading,
      children,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={`flex items-center justify-center gap-2 w-full duration-200 transition-colors transform focus:outline-none ${buttonSizeMap[size]} ${buttonTypeMap[variant]}`}
        {...rest}
      >
        {children}
        {isLoading && <Spinner />}
      </button>
    );
  }
);

Button.displayName = 'Button';
