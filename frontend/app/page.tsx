import { PackagesGrid } from '../components/public/PackagesGrid';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-6 px-6 py-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Explore our tour packages</h1>
        <p className="text-sm text-slate-600">Handpicked trips across Nepal.</p>
      </div>
      <PackagesGrid />
    </main>
  );
}
