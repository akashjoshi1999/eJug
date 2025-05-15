'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuthPage = useMemo(() => {
    return (
      pathname.startsWith('/login') ||
      pathname.startsWith('/signup') ||
      pathname.startsWith('/password-reset')
    );
  }, [pathname]);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="min-h-screen px-4 py-6 bg-white" role="main">
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}
