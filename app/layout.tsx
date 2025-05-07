// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import LayoutWrapper from './components/LayoutWrapper'; // 👈 use client wrapper

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My E-commerce Store',
  description: 'Buy amazing products at the best prices',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
