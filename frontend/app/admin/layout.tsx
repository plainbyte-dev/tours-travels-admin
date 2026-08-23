import Link from 'next/link';
import type { ReactNode } from 'react';
import { ToastProvider } from '../../components/admin/Toast';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <Link href="/admin/packages" className="text-sm font-semibold tracking-wide text-slate-900">
              Tour Package Admin
            </Link>
            <nav className="text-sm text-slate-600">
              <Link href="/admin/packages" className="hover:text-slate-900">
                Packages
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">{children}</main>
      </div>
    </ToastProvider>
  );
}
