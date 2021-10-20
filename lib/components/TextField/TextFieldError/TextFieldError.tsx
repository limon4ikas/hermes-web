import { FC } from 'react';

export const TextFieldError: FC = ({ children }) => {
  return <p className="text-red-500">{children}</p>;
};

TextFieldError.displayName = 'TextFieldError';
