import { forwardRef, ComponentPropsWithRef } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { TextFieldError } from './TextFieldError/TextFieldError';
import { Label } from '../Label';
import { Input } from '../Input/component';

export type TextFieldProps = ComponentPropsWithRef<'div'> &
  FieldHookConfig<string> & {
    label?: string;
  };

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const [field, meta, helpers] = useField(props);
    const { label, type, placeholder } = props;

    return (
      <div ref={ref}>
        {label && <Label htmlFor={field.name}>{label}</Label>}
        <Input
          {...field}
          id={field.name}
          type={type}
          placeholder={placeholder}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
        {meta.touched && meta.error && (
          <TextFieldError>{meta.error}</TextFieldError>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
