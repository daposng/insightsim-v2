import type { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 md:pb-6">
      {children}
    </main>
  );
}
