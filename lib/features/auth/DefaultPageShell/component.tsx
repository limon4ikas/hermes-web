import { FC } from 'react';

export const DefaultPageShell: FC = () => {
  return (
    <div className="w-screen h-screen bg-yellow-500 flex items-center justify-center">
      <h1>Page shell</h1>
    </div>
  );
};

DefaultPageShell.displayName = 'DefaultPageShell';
