import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { Spinner } from '../Spinner';
import tw, { TwStyle } from 'twin.macro';

export enum ButtonTypes {
  Primary = 'primary',
  Google = 'google',
}

export enum ButtonSizes {
  Medium = 'medium',
  Big = 'big',
}

const buttonBase = tw`flex items-center justify-center gap-2 w-full transition-colors transform focus:outline-none`;

const buttonSizeMap: Record<ButtonSizes, TwStyle> = {
  [ButtonSizes.Medium]: tw`px-4 py-2`,
  [ButtonSizes.Big]: tw`px-6 py-2`,
};

export const buttonTypeMap: Record<ButtonTypes, TwStyle> = {
  [ButtonTypes.Primary]: tw`leading-5 text-white bg-gray-700 rounded hover:bg-gray-600`,
  [ButtonTypes.Google]: tw`mx-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400`,
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
        css={[buttonBase, buttonSizeMap[size], buttonTypeMap[variant]]}
        {...rest}
      >
        {children}
        {isLoading && <Spinner />}
      </button>
    );
  }
);

Button.displayName = 'Button';
