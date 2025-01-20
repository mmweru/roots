import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen, isDarkMode, toggleTheme, scrollToTestimonials, scrollToDashboard}) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "#testimonials", onClick: scrollToTestimonials }, // Add the scroll to testimonials functionality here
    { name: "About Us", path: "/about" },
    { name: "Impact", path: "/impact" },
    { name: "Dashboard", path: "#dashboard", onClick: scrollToDashboard } // Add scroll to Dashboard functionality
];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-md z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              Regen Roots
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onClick={item.onClick} // Add onClick handler for Testimonials link
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Moon className="text-gray-200" /> : <Sun className="text-gray-700" />}
            </button>
            <Link
              to="/login"
              className="px-4 py-2 text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 rounded-md hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  onClick={item.onClick} // Add onClick handler for Testimonials link
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-center text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-center bg-green-600 text-white rounded-md"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
