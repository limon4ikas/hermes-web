import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import tw, { TwStyle } from 'twin.macro';

export enum InputTypes {
  Primary = 'primary',
}

const inputTypesMap: Record<InputTypes, TwStyle> = {
  [InputTypes.Primary]: tw`block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring`,
};

export interface InputProps extends ComponentPropsWithRef<'input'> {
  variant?: InputTypes | 'primary';
}

export const Input: FC<InputProps> = forwardRef((props, ref) => {
  const { variant = InputTypes.Primary } = props;

  return <input ref={ref} {...props} css={[inputTypesMap[variant]]} />;
});

Input.displayName = 'BaseInput';
