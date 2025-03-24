import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import './Home.css';
import Testimonials from './Testimonials';
import Navbar from './Navbar';
import InvestorDashboard from './Investors';
import ProjectDetailsPage from './ProjectDetailsPage';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const testimonialsRef = useRef(null);
  const dashboardRef = useRef(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTestimonials = () => {
    testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDashboard = () => {
    dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`landing-page ${isDarkMode ? "dark" : ""}`} style={{ width: "100vw", height: "100vh", left: 0, top: 0, position: 'absolute' }}>
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        scrollToTestimonials={scrollToTestimonials}
        scrollToDashboard={scrollToDashboard}
      />

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

  {/* CTA Button */}
  <div className="cta-container">
    <Link to="/login" className="ghost-cta">
      Get Started
    </Link>
  </div>

  {/* Shortened Text */}
  <p style={{ fontSize: "20px", fontFamily: "Jacques", marginTop: "20px", marginBottom: "55px"}} className='step-text'>
    Join Regen Roots—a platform where your investments fuel biodiversity, restore ecosystems, and drive real impact.
  </p>
</div>
        <div className="hero-image-container">
          <img
            src="../src/assets/images/plant.png"
            alt="Plant"
            className="hero-image" />
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToTestimonials}>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      
      {/* Testimonials Section */}
      <Testimonials ref={testimonialsRef} isDarkMode={isDarkMode} />
      <InvestorDashboard ref={dashboardRef} isDarkMode={isDarkMode} />

      {/* Project Details Section (Smooth Scroll Target) */}
      <section id="details">
        <ProjectDetailsPage isDarkMode={isDarkMode} />
      </section>
    </div>
  );
};

export default Home;