import React from 'react';

const Footer = () => {
  return (
    <footer id="support" className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">TT</div>
            <span className="text-lg font-semibold text-slate-800">TransitTrack</span>
          </div>
          <p className="mt-3 text-slate-600 text-sm">Reliable, real-time bus tracking for riders and operators.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-700 uppercase mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-slate-900">About</a></li>
            <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            <li><a href="#" className="hover:text-slate-900">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-700 uppercase mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
            <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            <li><a href="#" className="hover:text-slate-900">System Status</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} TransitTrack. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
