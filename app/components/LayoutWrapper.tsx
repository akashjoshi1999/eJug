// app/components/LayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup');

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="min-h-screen px-4 py-6 bg-white">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
