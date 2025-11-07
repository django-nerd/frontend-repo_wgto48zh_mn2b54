import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tracker from './components/Tracker';
import OperatorDashboard from './components/OperatorDashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Tracker />
      <OperatorDashboard />
      <Footer />
    </div>
  );
}

export default App;
