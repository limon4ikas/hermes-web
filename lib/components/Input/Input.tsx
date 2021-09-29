import { FC } from 'react';
import { useField, FieldHookConfig } from 'formik';

export type InputProps = FieldHookConfig<string> & {
  label?: string;
};

export const Input: FC<InputProps> = (props) => {
  const [field, meta, helpers] = useField(props);
  const { label, type, placeholder } = props;

  return (
    <div>
      {label && (
        <label className="block text-sm text-gray-800 dark:text-gray-200">
          {label}
        </label>
      )}

      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      />

      {meta.touched && meta.error ? (
        <p className="text-red-600">{meta.error}</p>
      ) : null}
    </div>
  );
};
