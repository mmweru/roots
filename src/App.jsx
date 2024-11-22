import React, { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './components/Splash';
import Home from './components/Home';

function App() {
  const [showSplash, setShowSplash] = useState(true); // Controls whether the splash screen is visible
  const [exitSplash, setExitSplash] = useState(false); // Controls the exit animation for the splash screen

  useEffect(() => {
    const timer = setTimeout(() => {
      setExitSplash(true); // Trigger the exit animation
      setTimeout(() => {
        setShowSplash(false); // Remove splash screen after animation
      }, 1000); // Duration of the exit animation
    }, 3000); // 30-second delay for the splash screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {showSplash ? (
        <div className={`splash-container ${exitSplash ? 'slide-out' : ''}`}>
          <SplashScreen />
        </div>
      ) : (
        <div className="home-container slide-in">
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
