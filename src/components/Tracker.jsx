import React, { useEffect, useMemo, useState } from 'react';

const mockBuses = [
  { id: '24A', route: 'Downtown Loop', lat: 37.7749, lng: -122.4194, eta: 3 },
  { id: '52', route: 'Uptown Express', lat: 37.7849, lng: -122.4094, eta: 8 },
  { id: '12B', route: 'Harbor Line', lat: 37.7649, lng: -122.4294, eta: 12 },
];

const Tracker = () => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const results = useMemo(() => {
    return mockBuses.filter(
      (b) => b.id.toLowerCase().includes(query.toLowerCase()) || b.route.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    if (!selected && results.length) setSelected(results[0]);
  }, [results, selected]);

  return (
    <section id="track" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Find your bus</h2>
            <p className="text-slate-600">Search by route or bus number to see live status.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search routes or bus numbers..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ul className="mt-4 divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden">
              {results.map((b) => (
                <li
                  key={b.id}
                  onClick={() => setSelected(b)}
                  className={`p-3 cursor-pointer hover:bg-slate-50 ${selected?.id === b.id ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-800">{b.id} • {b.route}</div>
                      <div className="text-sm text-slate-500">ETA: {b.eta} min</div>
                    </div>
                    <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">On time</span>
                  </div>
                </li>
              ))}
              {results.length === 0 && (
                <li className="p-3 text-slate-500">No results</li>
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200">
              <iframe
                title="map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-122.52%2C37.70%2C-122.35%2C37.82&layer=mapnik&marker=${selected?.lat || 37.7749}%2C${selected?.lng || -122.4194}`}
                className="w-full h-full"
              />
            </div>
            {selected && (
              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-slate-900 font-semibold">{selected.id} • {selected.route}</div>
                    <div className="text-slate-600 text-sm">Current ETA to your stop: {selected.eta} minutes</div>
                  </div>
                  <button className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">Set Alert</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracker;
