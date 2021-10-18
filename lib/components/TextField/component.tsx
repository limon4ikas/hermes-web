import { ComponentPropsWithRef, forwardRef } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { Input } from '../Input/component';

export type TextFieldProps = ComponentPropsWithRef<'div'> &
  FieldHookConfig<string> & {
    label?: string;
  };

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const { label, type, placeholder } = props;
    const [field, meta, helpers] = useField(props);

    return (
      <div ref={ref}>
        {label && (
          <label
            tw="block mb-2 text-sm text-gray-800 dark:text-gray-200"
            htmlFor={field.name}
          >
            {label}
          </label>
        )}
        <Input
          {...field}
          id={field.name}
          type={type}
          placeholder={placeholder}
        />
        {meta.touched && meta.error && <p tw="text-red-500">{meta.error}</p>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
