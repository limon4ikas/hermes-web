import { ComponentPropsWithRef, FC, forwardRef, HTMLProps } from 'react';

export type LabelProps = ComponentPropsWithRef<'label'>;

export const Label: FC<LabelProps> = forwardRef(
  ({ children, ...rest }, ref) => {
    return (
      <label
        className="block text-sm text-gray-800 dark:text-gray-200"
        {...rest}
        ref={ref}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'BaseLabel';
