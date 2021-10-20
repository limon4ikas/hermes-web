import { FC } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { Label } from './Label';
import { Input } from '../Input/component';
import { TextFieldError } from './Error';

export type TextFieldProps = FieldHookConfig<string> & {
  label?: string;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const { label, type, placeholder } = props;
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <Input {...field} id={field.name} type={type} placeholder={placeholder} />
      {meta.touched && meta.error && (
        <TextFieldError>{meta.error}</TextFieldError>
      )}
    </div>
  );
};

TextField.displayName = 'TextField';
