import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">TT</div>
          <span className="text-xl font-semibold text-slate-800">TransitTrack</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#track" className="hover:text-slate-900 transition">Track</a>
          <a href="#dashboard" className="hover:text-slate-900 transition">Dashboard</a>
          <a href="#support" className="hover:text-slate-900 transition">Support</a>
        </nav>
        <a href="#dashboard" className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">Sign In</a>
      </div>
    </header>
  );
};

export default Navbar;
