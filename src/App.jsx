import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SplashScreen from './components/Splash';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Dashboard from './components/Investors';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [exitSplash, setExitSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExitSplash(true);
      setTimeout(() => {
        setShowSplash(false);
      }, 1000); // Matches animation duration
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app">
        {showSplash ? (
          <div className={`splash-container ${exitSplash ? 'slide-out' : ''}`}>
            <SplashScreen />
          </div>
        ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
