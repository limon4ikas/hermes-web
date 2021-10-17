import { ComponentPropsWithRef, FC, forwardRef } from 'react';

export enum InputType {
  PRIMARY = 'primary',
}

export type InputTypeValue = 'primary';

const InputVariantsMap: Record<InputType, string> = {
  [InputType.PRIMARY]:
    'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring',
};

export interface InputProps extends ComponentPropsWithRef<'input'> {
  variant?: InputTypeValue | InputTypeValue;
}

export const Input: FC<InputProps> = forwardRef((props, ref) => {
  const { variant = InputType.PRIMARY } = props;

  return (
    <input ref={ref} {...props} className={`${InputVariantsMap[variant]}`} />
  );
});

Input.displayName = 'BaseInput';
