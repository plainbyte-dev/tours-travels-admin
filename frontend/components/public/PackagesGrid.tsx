'use client';

import { useEffect, useState } from 'react';
import { api, ApiRequestError, resolveImageUrl } from '../../lib/api';
import type { PackageListItem } from '../../lib/types';

export function PackagesGrid() {
  const [packages, setPackages] = useState<PackageListItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const data = await api.get<PackageListItem[]>('/api/packages');
        if (!cancelled) setPackages(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof ApiRequestError ? err.message : 'Failed to load packages');
          setPackages([]);
        }
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (packages === null) {
    return <p className="text-sm text-slate-500">Loading packages…</p>;
  }

  if (error) {
    return <p className="text-sm text-red-600">{error}</p>;
  }

  if (packages.length === 0) {
    return <p className="text-sm text-slate-500">No packages available right now.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg) => (
        <div
          key={pkg._id}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
        >
          {pkg.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={resolveImageUrl(pkg.coverImage)} alt={pkg.title} className="h-48 w-full object-cover" />
          ) : (
            <div className="h-48 w-full bg-slate-100" />
          )}
          <div className="space-y-2 p-4">
            <h3 className="text-lg font-semibold text-slate-900">{pkg.title}</h3>
            <p className="text-sm text-slate-600">{pkg.destinations.join(', ')}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">{pkg.duration} days</span>
              <span className="font-medium text-slate-900">
                {pkg.cost.currency} {pkg.cost.from.toLocaleString()} – {pkg.cost.to.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
