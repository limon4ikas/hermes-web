import { forwardRef } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { TextFieldError } from './TextFieldError/TextFieldError';
import { Label } from '../Label';
import { Input } from '../Input/component';

export type TextFieldProps = FieldHookConfig<string> & {
  label?: string;
};

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const { label, type, placeholder } = props;
    const [field, meta, helpers] = useField(props);

    return (
      <div ref={ref}>
        {label && <Label htmlFor={field.name}>{label}</Label>}
        <Input
          {...field}
          id={field.name}
          type={type}
          placeholder={placeholder}
        />
        {meta.touched && meta.error && (
          <TextFieldError>{meta.error}</TextFieldError>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
