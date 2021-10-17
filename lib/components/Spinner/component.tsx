import { FC } from 'react';
import tw, { TwStyle } from 'twin.macro';

export enum SpinnerSizes {
  Small = 'small',
  Medium = 'medium',
}

const sizes: Record<SpinnerSizes, TwStyle> = {
  [SpinnerSizes.Small]: tw`h-2 w-2`,
  [SpinnerSizes.Medium]: tw`h-4 w-4`,
};

export interface SpinnerProps {
  size?: SpinnerSizes | 'medium' | 'small';
}

export const Spinner: FC<SpinnerProps> = (props) => {
  const { size = 'medium' } = props;

  return (
    <svg
      css={[tw`animate-spin`, sizes[size]]}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};
