import React, { useState } from 'react';

const initialFleet = [
  { id: '24A', driver: 'A. Rivera', status: 'On Route', lastPing: '15s', occupancy: 62 },
  { id: '52', driver: 'M. Chen', status: 'Delayed', lastPing: '1m', occupancy: 88 },
  { id: '12B', driver: 'S. Patel', status: 'Idle', lastPing: '3m', occupancy: 12 },
];

const statusColors = {
  'On Route': 'bg-green-100 text-green-700',
  'Delayed': 'bg-amber-100 text-amber-700',
  'Idle': 'bg-slate-100 text-slate-700',
};

const OperatorDashboard = () => {
  const [fleet, setFleet] = useState(initialFleet);

  const toggleDelay = (id) => {
    setFleet((prev) => prev.map((b) => (b.id === id ? { ...b, status: b.status === 'Delayed' ? 'On Route' : 'Delayed' } : b)));
  };

  return (
    <section id="dashboard" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Operator Dashboard</h2>
            <p className="text-slate-600">Monitor fleet status and occupancy in real time.</p>
          </div>
          <button className="rounded-md bg-slate-900 text-white px-4 py-2">Export CSV</button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Bus</th>
                <th className="px-4 py-3">Driver</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Last Ping</th>
                <th className="px-4 py-3">Occupancy</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {fleet.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">{b.id}</td>
                  <td className="px-4 py-3">{b.driver}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${statusColors[b.status]}`}>{b.status}</span>
                  </td>
                  <td className="px-4 py-3">{b.lastPing}</td>
                  <td className="px-4 py-3">
                    <div className="w-40 bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: `${b.occupancy}%` }} />
                    </div>
                    <span className="text-xs text-slate-500 ml-2">{b.occupancy}%</span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button onClick={() => toggleDelay(b.id)} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100">Toggle Delay</button>
                    <button className="rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm hover:bg-blue-700">Ping</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OperatorDashboard;
