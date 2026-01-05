import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/home';
import Explorar from './pages/explorar';
import Destinos from './pages/destinos';
import Nosotros from './pages/nosotros';
import Precios from './pages/precios';

function App() {
  const [path, setPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to) => {
    if (to === path) return;
    window.history.pushState({}, '', to);
    setPath(to);
  }, [path]);

  const renderRoute = () => {
    switch (path) {
      case '/explorar':
        return <Explorar onNavigate={navigate} />;
      case '/destinos':
        return <Destinos onNavigate={navigate} />;
      case '/nosotros':
        return <Nosotros onNavigate={navigate} />;
      case '/precios':
        return <Precios onNavigate={navigate} />;
      case '/':
      case '/home':
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      <Navbar onNavigate={navigate} currentPath={path} />
      <main>
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
}

export default App;