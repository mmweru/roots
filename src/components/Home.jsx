import React, { useState, useRef } from 'react';
import './Home.css';
import Testimonials from './Testimonials';
import Navbar from './Navbar'; // Import the Navbar component
import InvestorDashboard from './Investors';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const testimonialsRef = useRef(null); // Create a ref for Testimonials section

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to scroll to the Testimonials section
  const scrollToTestimonials = () => {
    testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const dashboardRef = useRef(null); // Create a ref for Dashboard section

  // Function to scroll to the Dashboard section
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
        scrollToTestimonials={scrollToTestimonials} // Pass scrollToTestimonials to Navbar
        scrollToDashboard={scrollToDashboard} // Pass scrollToDashboard to Navbar
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

          <p style={{ paddingTop: "72%", fontSize: "20px", fontFamily: "Jacques", marginBottom: "40px"}} className='step-text'>
            Step into the future of sustainable farming with Regen Roots—a platform
            where your investments grow beyond profits, fueling biodiversity,
            restoring ecosystems, and driving real impact.
          </p>
        </div>
        <div className="hero-image-container">
          <img
            src="../src/assets/images/plant.png"
            alt="Plant"
            className="hero-image" />
        </div>
      </header>

      {/* Testimonials Section */}
      <Testimonials ref={testimonialsRef} isDarkMode={isDarkMode} />
      <InvestorDashboard ref={dashboardRef} isDarkMode={isDarkMode} />

      </div>
  );
};

export default Home;
