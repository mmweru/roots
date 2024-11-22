import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`landing-page ${isDarkMode ? "dark" : ""}`}style={{width: "100vw", height: "100vh", left: 0, top: 0, position: 'absolute'}}>
      {/* Navigation Bar */}
      <nav className="navbar">
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {["Home", "Testimonials", "About Us", "Impact"].map((item, index) => (
            <li key={index} style={{ animationDelay: `${index * 0.1}s` }} className={isMenuOpen ? "bounce" : ""}>
              <a href={`#${item.toLowerCase().replace(/\s+/g, "")}`}>{item}</a>
            </li>
          ))}
          <li>
            <button className="btn-outline">Login</button>
          </li>
          <li>
            <button className="btn-primary">Register</button>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
        <div style={{ width: 468, height: 195, left: 293, top: 160, position: 'absolute' }} className='regen-text'>
    <div style={{ width: 128, height: 195, left: 0, top: 0, position: 'absolute' }}>R</div>
    <div style={{ width: 128, height: 195, left: 96, top: 0, position: 'absolute' }}>e</div>
    <div style={{ width: 128, height: 195, left: 170, top: 0, position: 'absolute' }}>g</div>
    <div style={{ width: 128, height: 195, left: 238, top: 0, position: 'absolute' }}>e</div>
    <div style={{ width: 128, height: 195, left: 312, top: 0, position: 'absolute' }}>n</div>
</div>
<div style={{ width: 468, height: 195, left: 393, top: 275, position: 'absolute' }} className='regen-text'>
    <div style={{ width: 128, height: 195, left: 0, top: 0, position: 'absolute' }}>R</div>
    <div style={{ width: 128, height: 195, left: 88, top: 0, position: 'absolute' }}>o</div>
    <div style={{ width: 128, height: 195, left: 168, top: 0, position: 'absolute' }}>o</div>
    <div style={{ width: 128, height: 195, left: 228, top: 0, position: 'absolute' }}>t</div>
    <div style={{ width: 128, height: 195, left: 278, top: 0, position: 'absolute' }}>s</div>
</div>
 
            <p style={{paddingTop: "72%", fontSize: "20px"}} className='step-text'>
            Step into the future of sustainable farming with Regen Roots—a platform
            where your investments grow beyond profits, fueling biodiversity,
            restoring ecosystems, and driving real impact.
            </p>
        </div>
        <div className="hero-image-container">
            <img
            src="../src/assets/images/plant.png"
            alt="Plant"
            className="hero-image"
            />
        </div>
      </header>

    </div>
  );
};

export default Home;
