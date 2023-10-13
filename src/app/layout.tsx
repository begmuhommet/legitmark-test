import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FC } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Legitmark test',
  description: 'Legitmark test button and modal components',
};

interface IProps {
  children: React.ReactNode;
}

const RootLayout: FC<IProps> = props => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={clsx('w-screen h-screen', inter.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
