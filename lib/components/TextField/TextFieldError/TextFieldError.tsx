import { FC } from 'react';

export const TextFieldError: FC = ({ children }) => {
  return <p tw="text-red-500">{children}</p>;
};

TextFieldError.displayName = 'TextFieldError';
