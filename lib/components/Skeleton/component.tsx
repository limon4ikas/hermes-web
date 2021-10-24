import { FC } from 'react';

export interface SkeletonProps {}

export const Skeleton: FC<SkeletonProps> = (props) => {
  return (
    <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
      <div className="w-12 h-12 bg-gray-300 rounded-full" />
      <div className="w-36 h-6 bg-gray-300 rounded-md" />
    </div>
  );
};
