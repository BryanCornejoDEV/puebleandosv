import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './pages/home/Hero';
import BentoGrid from './pages/home/BentoGrid';
import InfoStrip from './pages/home/InfoStrip';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <InfoStrip />
      </main>
      <Footer />
    </div>
  );
}

export default App;