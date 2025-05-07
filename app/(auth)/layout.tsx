// app/(auth)/layout.tsx

import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <main className="min-h-screen px-4 py-6 bg-white">{children}</main>;
}
