import { FC } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="h-screen w-full">{children}</main>
      <Footer />
    </div>
  );
};
