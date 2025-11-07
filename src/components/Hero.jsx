import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100" />
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Real-time Bus Tracking for Everyone
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              See where your bus is, get accurate arrival times, and plan your trip with confidence. Built for riders and operators.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#track" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-medium shadow">
                Track a Bus
              </a>
              <a href="#dashboard" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 font-medium border border-slate-200 hover:bg-slate-50">
                Operator Dashboard
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">No signup required to start tracking</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
                alt="City bus"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
