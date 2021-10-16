import { forwardRef, ComponentPropsWithRef } from 'react';
import { useField, FieldHookConfig } from 'formik';

export type TextFieldProps = ComponentPropsWithRef<'div'> &
  FieldHookConfig<string> & {
    label?: string;
  };

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const [field, meta, helpers] = useField(props);
    const { label, type, placeholder } = props;

    const renderLabel = () => {
      if (label) {
        return (
          <label
            className="block text-sm text-gray-800 dark:text-gray-200"
            htmlFor={field.name}
          >
            {label}
          </label>
        );
      }
    };

    const renderError = () => {
      if (meta.touched && meta.error) {
        return <p className="text-red-500">{meta.error}</p>;
      }
    };

    return (
      <div ref={ref}>
        {renderLabel()}
        <input
          {...field}
          id={field.name}
          type={type}
          placeholder={placeholder}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
        {renderError()}
      </div>
    );
  }
);

TextField.displayName = 'Input';
